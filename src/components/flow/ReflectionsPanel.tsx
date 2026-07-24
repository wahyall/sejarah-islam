"use client";

import { useState, useEffect, useMemo } from "react";
import { useFlowStore } from "@/store/flow-store";
import { nodes as chainNodes, ChainNode } from "@/data/chain-nodes";
import { CATEGORY_COLORS } from "@/lib/flow/layout";
import { cn } from "@/lib/utils";
import {
  Sparkles,
  X,
  Search,
  BookOpen,
  HeartHandshake,
  MessageSquareQuote,
  CheckCircle2,
  Share2,
  Check,
  Compass,
  Filter,
} from "lucide-react";

const REFLECTION_NOTE_KEY = "rsk-user-reflections";

export function ReflectionsPanel() {
  const panelMode = useFlowStore((s) => s.panelMode);
  const setPanelMode = useFlowStore((s) => s.setPanelMode);
  const setSelectedNode = useFlowStore((s) => s.setSelectedNode);
  const setFocusNode = useFlowStore((s) => s.setFocusNode);

  const isOpen = panelMode === "reflections";

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [userReflections, setUserReflections] = useState<Record<string, string>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Load User Saved Reflections
  useEffect(() => {
    try {
      const raw = localStorage.getItem(REFLECTION_NOTE_KEY);
      if (raw) {
        setUserReflections(JSON.parse(raw));
      }
    } catch {
      setUserReflections({});
    }
  }, [isOpen]);

  const filteredNodes = useMemo(() => {
    return chainNodes.filter((node) => {
      const matchesCat = selectedCategory === "all" || node.category === selectedCategory;
      const matchesSearch =
        search === "" ||
        node.label.toLowerCase().includes(search.toLowerCase()) ||
        node.refleksi?.hikmah.toLowerCase().includes(search.toLowerCase()) ||
        node.akhlakTeladan?.toLowerCase().includes(search.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [search, selectedCategory]);

  if (!isOpen) return null;

  const handleCopyReflection = (node: ChainNode) => {
    const hikmahText = node.refleksi?.hikmah || node.akhlakTeladan || node.description.slice(0, 150);
    const textToCopy = `✨ *Tadabbur Sejarah: ${node.label} (${node.timeLabel})*\n\n"${hikmahText}"\n\n📌 *Pertanyaan Refleksi:* ${node.refleksi?.pertanyaanReflektif?.[0] || "Apa hikmah terbesar bagi kita hari ini?"}\n\n- Dari Sejarah Peradaban Islam Explorer`;

    navigator.clipboard.writeText(textToCopy);
    setCopiedId(node.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const savedCount = Object.keys(userReflections).length;

  return (
    <div className="fixed inset-y-0 right-0 w-full sm:w-[450px] z-50 bg-background border-l shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
      {/* Header */}
      <div className="p-4 border-b bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-amber-500 text-white shadow-md">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold flex items-center gap-1.5">
              Refleksi &amp; Tadabbur Sejarah
            </h3>
            <p className="text-xs text-muted-foreground">
              Hikmah Sunnatullah, Pertanyaan Kritis &amp; Jurnal Diri
            </p>
          </div>
        </div>

        <button
          onClick={() => setPanelMode("none")}
          className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Stats Banner */}
      <div className="px-4 py-2 bg-amber-500/5 border-b flex items-center justify-between text-xs font-medium text-amber-900 dark:text-amber-200">
        <span className="flex items-center gap-1.5">
          <HeartHandshake className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          Total {chainNodes.length} Peristiwa Berhikmah
        </span>
        <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 text-[10px] font-bold">
          {savedCount} Jurnal Refleksi Terisi
        </span>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="p-3 border-b bg-muted/20 space-y-2">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Cari hikmah, peristiwa, atau refleksi..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1">
          <button
            onClick={() => setSelectedCategory("all")}
            className={cn(
              "px-2.5 py-1 rounded-md text-[10px] font-bold whitespace-nowrap transition-colors",
              selectedCategory === "all"
                ? "bg-amber-500 text-white"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            )}
          >
            Semua ({chainNodes.length})
          </button>
          {Object.entries(CATEGORY_COLORS).map(([catKey, catVal]) => {
            const count = chainNodes.filter((n) => n.category === catKey).length;
            if (count === 0) return null;
            return (
              <button
                key={catKey}
                onClick={() => setSelectedCategory(catKey)}
                className={cn(
                  "px-2.5 py-1 rounded-md text-[10px] font-semibold whitespace-nowrap transition-colors flex items-center gap-1",
                  selectedCategory === catKey
                    ? "bg-amber-500 text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                <span className={cn("w-1.5 h-1.5 rounded-full", catVal.dot)} />
                {catVal.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main List Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {filteredNodes.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground space-y-2">
            <BookOpen className="w-8 h-8 mx-auto text-muted-foreground/50" />
            <p className="text-xs">Tidak ada refleksi yang cocok dengan pencarian Anda.</p>
          </div>
        ) : (
          filteredNodes.map((node) => {
            const hasUserReflection = !!userReflections[node.id];
            const catColor = CATEGORY_COLORS[node.category] || { bg: "bg-gray-100", text: "text-gray-900", label: "General" };

            return (
              <div
                key={node.id}
                className="rounded-xl border bg-card p-3.5 space-y-2.5 hover:shadow-md transition-shadow group relative"
              >
                {/* Header Node */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className={cn("text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full inline-block mb-1", catColor.bg, catColor.text)}>
                      {catColor.label} • {node.timeLabel}
                    </span>
                    <h4 className="text-xs font-bold group-hover:text-amber-600 transition-colors">
                      {node.label}
                    </h4>
                  </div>

                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button
                      onClick={() => handleCopyReflection(node)}
                      title="Salin Kata-Kata Refleksi"
                      className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {copiedId === node.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={() => {
                        setSelectedNode(node.id);
                        setFocusNode(node.id);
                        setPanelMode("none");
                      }}
                      title="Buka Node & Fokus Kanvas"
                      className="p-1 rounded hover:bg-muted text-amber-600 transition-colors"
                    >
                      <Compass className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Hikmah Card */}
                <div className="rounded-lg bg-amber-500/5 border border-amber-500/20 p-2.5 space-y-1.5">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wide">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    Hikmah &amp; Sunnatullah
                  </div>
                  <p className="text-xs text-foreground/90 leading-relaxed italic">
                    &quot;{node.refleksi?.hikmah || node.akhlakTeladan || node.description.slice(0, 160) + "..."}&quot;
                  </p>
                </div>

                {/* Pertanyaan Reflektif */}
                {node.refleksi?.pertanyaanReflektif && node.refleksi.pertanyaanReflektif.length > 0 && (
                  <div className="space-y-1 bg-muted/40 p-2 rounded-lg text-xs">
                    <span className="text-[10px] font-bold text-muted-foreground flex items-center gap-1">
                      <MessageSquareQuote className="w-3 h-3 text-sky-500" />
                      Pertanyaan Introspeksi Diri:
                    </span>
                    <ul className="space-y-1 list-disc list-inside text-muted-foreground text-[11px] leading-relaxed">
                      {node.refleksi.pertanyaanReflektif.map((q, qIdx) => (
                        <li key={qIdx}>{q}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* User Personal Journal Indicator */}
                {hasUserReflection && (
                  <div className="rounded-md bg-emerald-500/10 border border-emerald-500/30 p-2 text-[11px] space-y-0.5 text-emerald-900 dark:text-emerald-200">
                    <div className="flex items-center gap-1 font-bold text-[10px] uppercase text-emerald-700 dark:text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" /> Jurnal Refleksi Anda:
                    </div>
                    <p className="italic line-clamp-2">{userReflections[node.id]}</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
