"use client";

import { useFlowStore } from "@/store/flow-store";
import { nodes as chainNodes, ChainNode } from "@/data/chain-nodes";
import { islamicHistoryEdges } from "@/data/islamic-history-edges";
import { CATEGORY_COLORS } from "@/lib/flow/layout";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  X,
  ExternalLink,
  Moon,
  Quote,
  HeartHandshake,
  Bookmark,
  Share2,
  ArrowRight,
  ArrowLeft,
  Volume2,
  VolumeX,
  Copy,
  Check,
  StickyNote,
  Sparkles,
  Layers,
  Clock,
  Compass,
  MessageSquareQuote,
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";

const BM_KEY = "rsk-bookmarks";
const NOTE_KEY = "rsk-notes";

function renderFormattedText(text: string | null | undefined) {
  if (!text) return null;
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  const parts = text.split(regex);

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return (
        <strong key={i} className="font-bold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return (
        <em key={i} className="italic font-medium text-emerald-800 dark:text-emerald-300">
          {part.slice(1, -1)}
        </em>
      );
    }
    return part;
  });
}

export function DetailPanel() {
  const selectedNodeId = useFlowStore((s) => s.selectedNodeId);
  const setSelectedNode = useFlowStore((s) => s.setSelectedNode);
  const setFocusNode = useFlowStore((s) => s.setFocusNode);

  // Tab State
  const [activeTab, setActiveTab] = useState<"overview" | "references" | "reflection" | "causality" | "notes">("overview");

  // Interactive Features State
  const [textSize, setTextSize] = useState<"sm" | "base" | "lg">("base");
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [userNote, setUserNote] = useState<string>("");
  const [isSavingNote, setIsSavingNote] = useState<boolean>(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const node = useMemo(() => {
    return chainNodes.find((n) => n.id === selectedNodeId);
  }, [selectedNodeId]);

  // Load Bookmarks & Notes on Node Select
  useEffect(() => {
    if (!selectedNodeId) return;

    // Load Bookmark state
    try {
      const rawBm = localStorage.getItem(BM_KEY);
      if (rawBm) {
        const bmSet = new Set(JSON.parse(rawBm));
        setIsBookmarked(bmSet.has(selectedNodeId));
      } else {
        setIsBookmarked(false);
      }
    } catch {
      setIsBookmarked(false);
    }

    // Load Note state
    try {
      const rawNotes = localStorage.getItem(NOTE_KEY);
      if (rawNotes) {
        const notesObj = JSON.parse(rawNotes);
        setUserNote(notesObj[selectedNodeId] || "");
      } else {
        setUserNote("");
      }
    } catch {
      setUserNote("");
    }

    // Reset Audio state
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAudio(false);
  }, [selectedNodeId]);

  // Toggle Bookmark
  const handleToggleBookmark = () => {
    if (!selectedNodeId) return;
    try {
      const rawBm = localStorage.getItem(BM_KEY);
      const bmArray: string[] = rawBm ? JSON.parse(rawBm) : [];
      const bmSet = new Set(bmArray);

      if (bmSet.has(selectedNodeId)) {
        bmSet.delete(selectedNodeId);
        setIsBookmarked(false);
      } else {
        bmSet.add(selectedNodeId);
        setIsBookmarked(true);
      }

      localStorage.setItem(BM_KEY, JSON.stringify(Array.from(bmSet)));
    } catch (e) {
      console.error(e);
    }
  };

  // Save Personal Note
  const handleSaveNote = () => {
    if (!selectedNodeId) return;
    setIsSavingNote(true);
    try {
      const rawNotes = localStorage.getItem(NOTE_KEY);
      const notesObj: Record<string, string> = rawNotes ? JSON.parse(rawNotes) : {};
      
      if (userNote.trim()) {
        notesObj[selectedNodeId] = userNote.trim();
      } else {
        delete notesObj[selectedNodeId];
      }

      localStorage.setItem(NOTE_KEY, JSON.stringify(notesObj));
      setTimeout(() => setIsSavingNote(false), 500);
    } catch (e) {
      console.error(e);
      setIsSavingNote(false);
    }
  };

  // Copy to Clipboard Helper
  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Text-To-Speech (TTS) Toggle
  const handleToggleAudio = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window) || !node) return;

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else {
      window.speechSynthesis.cancel();
      const cleanDesc = node.description.replace(/\*/g, "");
      const cleanLabel = node.label.replace(/\*/g, "");
      const utterance = new SpeechSynthesisUtterance(`${cleanLabel}. ${cleanDesc}`);
      utterance.lang = "id-ID";
      utterance.rate = 0.95;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      
      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
    }
  };

  // Calculate Causes (Incoming Edges) and Effects (Outgoing Edges)
  const { causeNodes, effectNodes } = useMemo(() => {
    if (!selectedNodeId) return { causeNodes: [], effectNodes: [] };

    const incoming = islamicHistoryEdges.filter((e) => e.target === selectedNodeId);
    const outgoing = islamicHistoryEdges.filter((e) => e.source === selectedNodeId);

    const causes = incoming
      .map((e) => ({
        edge: e,
        node: chainNodes.find((n) => n.id === e.source),
      }))
      .filter((item): item is { edge: typeof incoming[0]; node: ChainNode } => item.node !== undefined);

    const effects = outgoing
      .map((e) => ({
        edge: e,
        node: chainNodes.find((n) => n.id === e.target),
      }))
      .filter((item): item is { edge: typeof outgoing[0]; node: ChainNode } => item.node !== undefined);

    return { causeNodes: causes, effectNodes: effects };
  }, [selectedNodeId]);

  // Reading time estimate
  const readTimeMinutes = useMemo(() => {
    if (!node) return 1;
    const wordCount = node.description.split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / 150));
  }, [node]);

  if (!selectedNodeId || !node) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 text-center border-l bg-muted/20">
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-3">
          <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h3 className="text-sm font-bold mb-1">Eksplorasi Peristiwa Sejarah</h3>
        <p className="text-xs text-muted-foreground leading-relaxed max-w-[240px]">
          Pilih salah satu node pada grafik untuk membuka analisis mendalam, rujukan Qur&apos;an/Hadits, serta rantai kausalitas.
        </p>
      </div>
    );
  }

  const color = CATEGORY_COLORS[node.category] || { bg: "bg-gray-100", dot: "bg-gray-500", text: "text-gray-900", label: "General" };

  return (
    <div className="h-full flex flex-col border-l bg-background shadow-xl">
      {/* ── HEADER PANEL ── */}
      <div className={cn("p-4 border-b relative transition-all duration-300", color.bg)}>
        {/* Row 1: Category + Action Icons */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5">
            <span className={cn("w-2.5 h-2.5 rounded-full animate-pulse", color.dot)} />
            <span className={cn("text-[10px] uppercase tracking-wider font-bold", color.text)}>
              {color.label}
            </span>
          </div>

          <div className="flex items-center gap-1">
            {/* Locate Node */}
            <button
              onClick={() => setFocusNode(node.id)}
              title="Fokuskan Kanvas ke Peristiwa Ini"
              className="p-1.5 rounded-md hover:bg-background/60 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Compass className="w-3.5 h-3.5" />
            </button>

            {/* Bookmark Toggle */}
            <button
              onClick={handleToggleBookmark}
              title={isBookmarked ? "Hapus dari Penanda" : "Tandai Peristiwa Ini"}
              className={cn(
                "p-1.5 rounded-md transition-colors",
                isBookmarked
                  ? "bg-amber-500 text-white shadow-sm"
                  : "hover:bg-background/60 text-muted-foreground hover:text-foreground"
              )}
            >
              <Bookmark className="w-3.5 h-3.5 fill-current" />
            </button>

            {/* Share / Copy Summary */}
            <button
              onClick={() => handleCopyText(`${node.label} (${node.timeLabel})\n\n${node.description}`, "header-share")}
              title="Salin Ringkasan Peristiwa"
              className="p-1.5 rounded-md hover:bg-background/60 text-muted-foreground hover:text-foreground transition-colors"
            >
              {copiedIndex === "header-share" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
            </button>

            {/* Close Panel */}
            <button
              onClick={() => setSelectedNode(null)}
              className="p-1.5 rounded-md hover:bg-background/60 text-muted-foreground hover:text-foreground transition-colors ml-1"
              aria-label="Tutup detail"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Title & Metadata */}
        <h2 className="text-base sm:text-lg font-bold leading-tight tracking-tight text-foreground">
          {node.label}
        </h2>
        
        <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground font-medium">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
            {node.timeLabel}
          </span>
          <span>•</span>
          <span>~{readTimeMinutes} min baca</span>
        </div>
      </div>

      {/* ── INTERACTIVE TAB NAVIGATION ── */}
      <div className="border-b bg-muted/30 px-3 py-1.5 flex items-center justify-between gap-1 text-xs">
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab("overview")}
            className={cn(
              "px-2.5 py-1 rounded-md font-medium text-[11px] transition-all flex items-center gap-1.5 whitespace-nowrap",
              activeTab === "overview"
                ? "bg-background text-foreground shadow-sm font-semibold"
                : "text-muted-foreground hover:text-foreground hover:bg-background/40"
            )}
          >
            <BookOpen className="w-3 h-3" />
            Narasi
          </button>

          {(node.quranRefs?.length || node.hadithRefs?.length) ? (
            <button
              onClick={() => setActiveTab("references")}
              className={cn(
                "px-2.5 py-1 rounded-md font-medium text-[11px] transition-all flex items-center gap-1.5 whitespace-nowrap relative",
                activeTab === "references"
                  ? "bg-background text-emerald-700 dark:text-emerald-400 shadow-sm font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/40"
              )}
            >
              <Moon className="w-3 h-3 text-emerald-500" />
              Dalil
              <span className="ml-0.5 px-1 py-0.2 text-[9px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full font-bold">
                {(node.quranRefs?.length || 0) + (node.hadithRefs?.length || 0)}
              </span>
            </button>
          ) : null}

          <button
            onClick={() => setActiveTab("reflection")}
            className={cn(
              "px-2.5 py-1 rounded-md font-medium text-[11px] transition-all flex items-center gap-1.5 whitespace-nowrap",
              activeTab === "reflection"
                ? "bg-background text-amber-700 dark:text-amber-400 shadow-sm font-semibold"
                : "text-muted-foreground hover:text-foreground hover:bg-background/40"
            )}
          >
            <Sparkles className="w-3 h-3 text-amber-500" />
            Refleksi
          </button>

          <button
            onClick={() => setActiveTab("causality")}
            className={cn(
              "px-2.5 py-1 rounded-md font-medium text-[11px] transition-all flex items-center gap-1.5 whitespace-nowrap",
              activeTab === "causality"
                ? "bg-background text-sky-700 dark:text-sky-400 shadow-sm font-semibold"
                : "text-muted-foreground hover:text-foreground hover:bg-background/40"
            )}
          >
            <Layers className="w-3 h-3 text-sky-500" />
            Kausalitas
            <span className="ml-0.5 px-1 py-0.2 text-[9px] bg-sky-500/10 text-sky-600 dark:text-sky-400 rounded-full font-bold">
              {causeNodes.length + effectNodes.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("notes")}
            className={cn(
              "px-2.5 py-1 rounded-md font-medium text-[11px] transition-all flex items-center gap-1.5 whitespace-nowrap",
              activeTab === "notes"
                ? "bg-background text-amber-700 dark:text-amber-400 shadow-sm font-semibold"
                : "text-muted-foreground hover:text-foreground hover:bg-background/40"
            )}
          >
            <StickyNote className="w-3 h-3 text-amber-500" />
            Catatan
            {userNote.trim() && <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />}
          </button>
        </div>

        {/* Text Size Control */}
        <div className="hidden sm:flex items-center gap-0.5 bg-background border rounded-md p-0.5">
          <button
            onClick={() => setTextSize("sm")}
            title="Ukuran Teks Kecil"
            className={cn("px-1 text-[10px] rounded font-bold", textSize === "sm" ? "bg-muted text-foreground" : "text-muted-foreground")}
          >
            A-
          </button>
          <button
            onClick={() => setTextSize("base")}
            title="Ukuran Teks Normal"
            className={cn("px-1 text-[10px] rounded font-bold", textSize === "base" ? "bg-muted text-foreground" : "text-muted-foreground")}
          >
            A
          </button>
          <button
            onClick={() => setTextSize("lg")}
            title="Ukuran Teks Besar"
            className={cn("px-1 text-[10px] rounded font-bold", textSize === "lg" ? "bg-muted text-foreground" : "text-muted-foreground")}
          >
            A+
          </button>
        </div>
      </div>

      {/* ── MAIN CONTENT AREA ── */}
      <div className="flex-1 overflow-y-auto min-h-0">
        <div className="p-4 space-y-6">
          {/* ==================== TAB 1: OVERVIEW & SIRAH ==================== */}
          {activeTab === "overview" && (
            <div className="space-y-5 animate-in fade-in-50 duration-200">
              {/* Audio TTS Toolbar Bar */}
              {"speechSynthesis" in (typeof window !== "undefined" ? window : {}) && (
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/20 text-xs">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-medium text-emerald-900 dark:text-emerald-200 text-[11px]">
                      Dengar Pembacaan Narasi (TTS)
                    </span>
                  </div>
                  <button
                    onClick={handleToggleAudio}
                    className={cn(
                      "flex items-center gap-1.5 px-2.5 py-1 rounded-md font-semibold text-[11px] transition-colors",
                      isPlayingAudio
                        ? "bg-rose-500 text-white hover:bg-rose-600 animate-pulse"
                        : "bg-emerald-600 text-white hover:bg-emerald-700"
                    )}
                  >
                    {isPlayingAudio ? (
                      <>
                        <VolumeX className="w-3.5 h-3.5" /> Stop
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5" /> Putar
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Description Paragraphs */}
              <section>
                <div
                  className={cn(
                    "text-foreground/90 space-y-3.5 leading-relaxed font-normal",
                    textSize === "sm" && "text-xs leading-normal",
                    textSize === "base" && "text-sm leading-relaxed",
                    textSize === "lg" && "text-base leading-loose"
                  )}
                >
                  {node.description.split("\n\n").map((para, i) => (
                    <p key={i} className="first-letter:text-lg first-letter:font-bold first-letter:text-emerald-700 dark:first-letter:text-emerald-400">
                      {renderFormattedText(para)}
                    </p>
                  ))}
                </div>
              </section>

              {/* Akhlak & Hikmah Card */}
              {node.akhlakTeladan && (
                <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-sky-500/10 via-sky-500/5 to-transparent border border-sky-500/20 p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-sky-500 text-white">
                      <HeartHandshake className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-sky-900 dark:text-sky-200 uppercase tracking-wide">
                        Keteladanan &amp; Hikmah Sirah
                      </h4>
                      <p className="text-[10px] text-sky-700 dark:text-sky-400">Prinsip Moral &amp; Karakter Rasulullah ﷺ</p>
                    </div>
                  </div>
                  <blockquote className="text-xs sm:text-sm leading-relaxed text-sky-950 dark:text-sky-100 italic border-l-2 border-sky-500 pl-3 py-0.5">
                    &quot;{renderFormattedText(node.akhlakTeladan)}&quot;
                  </blockquote>
                </section>
              )}

              {/* Sources */}
              {node.sources && node.sources.length > 0 && (
                <section className="pt-2 border-t">
                  <h4 className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-2 flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" />
                    Rujukan Karya Otentik
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {node.sources.map((src, i) => (
                      <span key={i} className="text-[10px] px-2 py-1 bg-muted rounded-md text-muted-foreground font-medium">
                        📖 {src}
                      </span>
                    ))}
                  </div>
                </section>
              )}
            </div>
          )}

          {/* ==================== TAB 2: DALIL (QURAN & HADITH) ==================== */}
          {activeTab === "references" && (
            <div className="space-y-5 animate-in fade-in-50 duration-200">
              {/* Asbab Al-Nuzul (Quran) */}
              {node.quranRefs && node.quranRefs.length > 0 && (
                <section className="space-y-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                    <Moon className="w-4 h-4" />
                    <h4>Asbab Al-Nuzul &amp; Ayat Terkait</h4>
                  </div>

                  {node.quranRefs.map((ref, idx) => (
                    <div
                      key={idx}
                      className="group relative rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-4 space-y-3 hover:border-emerald-500/40 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                          QS. {ref.surah} : Ayat {ref.ayat}
                        </span>
                        <button
                          onClick={() => handleCopyText(`QS. ${ref.surah}:${ref.ayat}\n${ref.arabicText || ""}\n"${ref.paraphrase}"`, `quran-${idx}`)}
                          className="p-1 rounded text-muted-foreground hover:text-foreground opacity-60 group-hover:opacity-100 transition-opacity"
                          title="Salin Ayat & Terjemahan"
                        >
                          {copiedIndex === `quran-${idx}` ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                      {ref.arabicText && (
                        <p className="text-lg sm:text-xl text-right leading-loose font-arabic text-foreground pt-1" dir="rtl">
                          {ref.arabicText}
                        </p>
                      )}

                      <p className="text-xs sm:text-sm leading-relaxed text-emerald-950 dark:text-emerald-100 italic bg-background/50 p-2.5 rounded-lg border border-emerald-500/10">
                        &quot;{renderFormattedText(ref.paraphrase)}&quot;
                      </p>
                    </div>
                  ))}
                </section>
              )}

              {/* Hadith References */}
              {node.hadithRefs && node.hadithRefs.length > 0 && (
                <section className="space-y-3 pt-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400">
                    <Quote className="w-4 h-4" />
                    <h4>Riwayat Hadits Otentik</h4>
                  </div>

                  {node.hadithRefs.map((ref, idx) => (
                    <div
                      key={idx}
                      className="group relative rounded-xl bg-amber-500/5 border border-amber-500/20 p-4 space-y-3 hover:border-amber-500/40 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full">
                          {ref.perawi}
                        </span>
                        <button
                          onClick={() => handleCopyText(`${ref.perawi}\n${ref.arabicText || ref.matan || ""}\n"${ref.terjemahan}"`, `hadith-${idx}`)}
                          className="p-1 rounded text-muted-foreground hover:text-foreground opacity-60 group-hover:opacity-100 transition-opacity"
                          title="Salin Hadits"
                        >
                          {copiedIndex === `hadith-${idx}` ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                      {ref.arabicText && (
                        <p className="text-base sm:text-lg text-right leading-loose font-arabic text-foreground pt-1" dir="rtl">
                          {ref.arabicText}
                        </p>
                      )}

                      {!ref.arabicText && ref.matan && (
                        <p className="text-xs font-medium text-amber-900/80 dark:text-amber-200">
                          {ref.matan}
                        </p>
                      )}

                      <p className="text-xs sm:text-sm leading-relaxed text-amber-950 dark:text-amber-100 italic bg-background/50 p-2.5 rounded-lg border border-amber-500/10">
                        &quot;{renderFormattedText(ref.terjemahan)}&quot;
                      </p>
                    </div>
                  ))}
                </section>
              )}
            </div>
          )}

          {/* ==================== TAB: REFLEKSI & TADABBUR ==================== */}
          {activeTab === "reflection" && (
            <div className="space-y-5 animate-in fade-in-50 duration-200">
              {/* Refleksi Hero Card */}
              <div className="rounded-xl bg-gradient-to-br from-amber-500/15 via-amber-500/5 to-transparent border border-amber-500/30 p-4 space-y-3 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-amber-500 text-white shadow-sm">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-200">
                      Tadabbur &amp; Hikmah Peristiwa
                    </h4>
                    <p className="text-[10px] text-amber-700 dark:text-amber-400">
                      Sunnatullah &amp; Pelajaran Spiritual Sejarah
                    </p>
                  </div>
                </div>

                <blockquote className="text-xs sm:text-sm leading-relaxed italic text-foreground/90 border-l-3 border-amber-500 pl-3 py-1 font-medium bg-background/50 rounded-r-lg">
                  &quot;{renderFormattedText(node.refleksi?.hikmah || node.akhlakTeladan || node.description.slice(0, 200) + "...")}&quot;
                </blockquote>
              </div>

              {/* Pertanyaan Reflektif / Introspeksi */}
              <div className="rounded-xl border bg-card p-4 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-700 dark:text-sky-400 border-b pb-2">
                  <MessageSquareQuote className="w-4 h-4" />
                  <h4>Pertanyaan Refleksi &amp; Introspeksi Diri</h4>
                </div>
                <div className="space-y-2">
                  {(node.refleksi?.pertanyaanReflektif || [
                    `Apa hikmah terpenting yang dapat kita petik dari peristiwa ${node.label} ini untuk kehidupan kita?`,
                    `Bagaimana nilai moral dan keteladanan dalam peristiwa ini dapat kita terapkan di era modern?`
                  ]).map((q, qIdx) => (
                    <div key={qIdx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-muted/40 text-xs">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-500/20 text-sky-700 dark:text-sky-300 font-bold flex items-center justify-center text-[10px]">
                        {qIdx + 1}
                      </span>
                      <p className="leading-relaxed text-foreground/90 font-medium">{q}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pesan Aksi & Amalan Nyata */}
              {node.refleksi?.pesanAksi && (
                <div className="rounded-xl border bg-emerald-500/5 border-emerald-500/20 p-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                    <HeartHandshake className="w-4 h-4 text-emerald-600" />
                    <h4>Langkah Amalan &amp; Komitmen Diri</h4>
                  </div>
                  <p className="text-xs text-emerald-950 dark:text-emerald-100 leading-relaxed font-medium">
                    {renderFormattedText(node.refleksi.pesanAksi)}
                  </p>
                </div>
              )}

              {/* Form Jurnal Refleksi Diri */}
              <div className="rounded-xl border p-4 space-y-3 bg-muted/20">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold flex items-center gap-1.5 text-foreground">
                    <StickyNote className="w-4 h-4 text-amber-500" />
                    Jurnal Refleksi Pribadi Anda
                  </h4>
                  <span className="text-[10px] text-muted-foreground">Tersimpan Otomatis</span>
                </div>

                <textarea
                  value={userNote}
                  onChange={(e) => setUserNote(e.target.value)}
                  placeholder="Tuliskan perenungan, hikmah pribadi, atau komitmen amalan yang ingin Anda lakukan setelah mempelajari peristiwa ini..."
                  className="w-full h-24 p-2.5 text-xs rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-amber-500/50 resize-none leading-relaxed"
                />

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setUserNote((prev) => (prev ? prev + " " : "") + "Pelajaran terbesar bagiku adalah ")}
                      className="text-[10px] px-2 py-1 rounded bg-muted hover:bg-muted/80 text-muted-foreground"
                    >
                      + Pelajaran terbesar
                    </button>
                    <button
                      onClick={() => setUserNote((prev) => (prev ? prev + " " : "") + "Komitmenku: ")}
                      className="text-[10px] px-2 py-1 rounded bg-muted hover:bg-muted/80 text-muted-foreground"
                    >
                      + Komitmen
                    </button>
                  </div>

                  <button
                    onClick={handleSaveNote}
                    className="px-3 py-1.5 rounded-md bg-amber-500 text-white font-semibold text-xs hover:bg-amber-600 transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    {isSavingNote ? <Check className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />}
                    {isSavingNote ? "Tersimpan!" : "Simpan Refleksi"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ==================== TAB 3: CAUSALITY CHAIN (SEBAB-AKIBAT) ==================== */}
          {activeTab === "causality" && (
            <div className="space-y-5 animate-in fade-in-50 duration-200">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Rantai sebab-akibat menunjukkan bagaimana peristiwa ini terjadi karena dorongan dari masa lalu, dan menjadi pemicu bagi pergerakan sejarah selanjutnya.
              </p>

              {/* CAUSES (Sebab / Pendahulu) */}
              <section className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-sky-700 dark:text-sky-400">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <h4>Peristiwa Pemicu / Sebab ({causeNodes.length})</h4>
                </div>

                {causeNodes.length === 0 ? (
                  <p className="text-xs italic text-muted-foreground bg-muted/30 p-3 rounded-lg">
                    Ini adalah peristiwa paling awal di garis masa ini.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {causeNodes.map(({ edge, node: causeNode }) => (
                      <button
                        key={causeNode.id}
                        onClick={() => {
                          setSelectedNode(causeNode.id);
                          setFocusNode(causeNode.id);
                        }}
                        className="w-full text-left p-3 rounded-xl border bg-background hover:bg-sky-500/5 hover:border-sky-500/30 transition-all flex items-start justify-between gap-3 group shadow-sm"
                      >
                        <div className="min-w-0">
                          <span className="text-[10px] font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-0.5">
                            {causeNode.timeLabel}
                          </span>
                          <h5 className="text-xs font-bold group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors line-clamp-1">
                            {causeNode.label}
                          </h5>
                          {edge.causalLabel && (
                            <p className="text-[11px] text-muted-foreground mt-1 line-clamp-1 italic">
                              &quot;{renderFormattedText(edge.causalLabel)}&quot;
                            </p>
                          )}
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-sky-500 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
                      </button>
                    ))}
                  </div>
                )}
              </section>

              {/* EFFECTS (Akibat / Dampak Lanjutan) */}
              <section className="space-y-2 pt-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                  <ArrowRight className="w-3.5 h-3.5" />
                  <h4>Dampak Lanjutan / Akibat ({effectNodes.length})</h4>
                </div>

                {effectNodes.length === 0 ? (
                  <p className="text-xs italic text-muted-foreground bg-muted/30 p-3 rounded-lg">
                    Ini adalah peristiwa puncak di era kontemporer.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {effectNodes.map(({ edge, node: effectNode }) => (
                      <button
                        key={effectNode.id}
                        onClick={() => {
                          setSelectedNode(effectNode.id);
                          setFocusNode(effectNode.id);
                        }}
                        className="w-full text-left p-3 rounded-xl border bg-background hover:bg-emerald-500/5 hover:border-emerald-500/30 transition-all flex items-start justify-between gap-3 group shadow-sm"
                      >
                        <div className="min-w-0">
                          <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-0.5">
                            {effectNode.timeLabel}
                          </span>
                          <h5 className="text-xs font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                            {effectNode.label}
                          </h5>
                          {edge.causalLabel && (
                            <p className="text-[11px] text-muted-foreground mt-1 line-clamp-1 italic">
                              &quot;{edge.causalLabel}&quot;
                            </p>
                          )}
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-emerald-500 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
                      </button>
                    ))}
                  </div>
                )}
              </section>
            </div>
          )}

          {/* ==================== TAB 4: PERSONAL NOTES (CATATAN PRIBADI) ==================== */}
          {activeTab === "notes" && (
            <div className="space-y-4 animate-in fade-in-50 duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400">
                  <StickyNote className="w-4 h-4" />
                  <h4>Catatan &amp; Refleksi Pribadi</h4>
                </div>
                {isSavingNote && (
                  <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                    <Check className="w-3 h-3" /> Tersimpan
                  </span>
                )}
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                Tuliskan perenungan, ibrah, atau poin penting mengenai <strong className="text-foreground">{node.label}</strong>. Catatan ini tersimpan aman di browser Anda.
              </p>

              <textarea
                value={userNote}
                onChange={(e) => setUserNote(e.target.value)}
                placeholder="Tuliskan refleksi Anda di sini..."
                rows={6}
                className="w-full text-xs sm:text-sm p-3 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500/50 resize-y leading-relaxed"
              />

              <button
                onClick={handleSaveNote}
                className="w-full py-2 px-4 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <StickyNote className="w-3.5 h-3.5" />
                Simpan Catatan Pribadi
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
