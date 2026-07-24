"use client";

/**
 * page.tsx — Halaman utama "Jejak Peradaban Islam".
 * Single-page dengan 2 mode tampilan:
 * 1. Intro (default saat load) — kerangka falsafi Islam sebagai pengantar
 * 2. Explorer (klik tombol "Mulai Eksplorasi")
 *
 * Pada Explorer:
 * - Toolbar atas: BranchSwitcher + Search + 7 toggle/fitur
 *   a. Mode Argumen (default ON — kerangka falsafi Islam)
 *   b. Perspektif Lain (default OFF — bacaan tambahan opsional)
 *   c. Tur Berpandu (Iterasi 1)
 *   d. Rujukan Qur'ani (Iterasi 2)
 *   e. Mode Refleksi (Iterasi 3)
 *   f. Penanda & Catatan (Iterasi 4)
 *   g. Ekspor & Bagikan (Iterasi 5)
 * - TimelineScrubber
 * - Canvas React Flow + DetailPanel
 * - ArgumentOverlay (kiri, default ON) & 6 panel overlay lainnya
 */

import { useState, useRef, useEffect } from "react";
import { ChainFlowCanvas } from "@/components/flow/ChainFlowCanvas";
import { DetailPanel } from "@/components/flow/DetailPanel";
import { TimelineScrubber } from "@/components/flow/TimelineScrubber";
import { BranchSwitcher } from "@/components/flow/BranchSwitcher";
import { BookmarksPanel } from "@/components/flow/BookmarksPanel";
import { GlossaryPanel } from "@/components/flow/GlossaryPanel";
import { ReflectionsPanel } from "@/components/flow/ReflectionsPanel";
import { QuizPanel } from "@/components/flow/QuizPanel";
import { useFlowStore } from "@/store/flow-store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  ScrollText,
  Compass,
  Search,
  ArrowLeft,
  Github,
  Sparkles,
  MapPin,
  BookOpen,
  Brain,
  Bookmark,
  Share2,
  Play,
  Square,
  BookMarked,
  SlidersHorizontal,
  MoreHorizontal,
  X,
  GitCompareArrows,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [view, setView] = useState<"intro" | "explore">("intro");

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {view === "intro" ? (
        <IntroView onExplore={() => setView("explore")} />
      ) : (
        <ExplorerView onBack={() => setView("intro")} />
      )}
    </div>
  );
}

// ====================================================================
// INTRO VIEW
// ====================================================================

function IntroView({ onExplore }: { onExplore: () => void }) {
  return (
    <>
      <header className="border-b bg-gradient-to-b from-emerald-50/60 via-amber-50/40 to-background dark:from-emerald-950/20 dark:via-amber-950/10">
        <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
            <Compass className="w-3.5 h-3.5" />
            <span>
              Ensiklopedia Interaktif · Sejarah Peradaban Islam
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4">
            Jejak Peradaban Islam
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
            Telusuri rentetan sejarah Islam dari{" "}
            <strong className="text-foreground">masa pra-Islam</strong> hingga{" "}
            <strong className="text-foreground">
              era modern
            </strong>
            . Eksplorasi hubungan sebab-akibat antar peristiwa, perkembangan politik, sains, dan pemikiran yang membentuk dunia Islam yang kita kenal saat ini.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" onClick={onExplore} className="gap-2">
              <Sparkles className="w-4 h-4" />
              Mulai Eksplorasi
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="#penjelasan"
                className="gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("penjelasan")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Pelajari dulu
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 space-y-12">
        {/* Apa ini */}
        <section id="penjelasan" className="space-y-3 scroll-mt-4">
          <h2 className="text-2xl font-bold">Apa ini?</h2>
          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
            Situs ini memvisualisasikan perjalanan panjang{" "}
            <strong className="text-foreground">Peradaban Islam</strong>{" "}
            selama lebih dari 1.400 tahun. Kami merangkai peristiwa-peristiwa kunci—dari fase Kenabian di jazirah Arab, hingga lahirnya imperium-imperium besar seperti Umayyah, Abbasiyah, dan Ottoman.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
            Melalui graf kausalitas interaktif, Anda dapat melihat bagaimana penemuan kertas memicu revolusi sains di Baitul Hikmah, atau bagaimana jatuhnya suatu dinasti memberi jalan bagi lahirnya kekuatan baru di tempat lain.
          </p>
        </section>

        {/* Empat Era Utama */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Fase-Fase Utama</h2>
          <p className="text-[11px] text-muted-foreground italic">
            Rentang waktu sejarah Islam dapat dibagi ke dalam beberapa epoch (zaman) besar yang menjadi pondasi peradaban dunia.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                letter: "①",
                name: "Fase Kenabian & Khulafaur Rasyidin",
                title: "570 - 661 M",
                desc: "Dari turunnya wahyu pertama hingga terbentuknya komunitas Islam awal di Madinah dan meluasnya wilayah di bawah empat khalifah pertama.",
                color:
                  "border-emerald-300 bg-emerald-50/50 dark:border-emerald-800 dark:bg-emerald-950/20",
              },
              {
                letter: "②",
                name: "Umayyah & Abbasiyah",
                title: "Zaman Keemasan",
                desc: "Puncak ekspansi geografis dan kemajuan ilmu pengetahuan, ditandai oleh Baitul Hikmah di Baghdad dan toleransi di Andalusia.",
                color:
                  "border-violet-300 bg-violet-50/50 dark:border-violet-800 dark:bg-violet-950/20",
              },
              {
                letter: "③",
                name: "Tiga Kerajaan Besar",
                title: "Utsmani, Safawi, Mughal",
                desc: "Kembalinya kekuatan politik Islam paska-Mongol. Munculnya tiga imperium raksasa yang menguasai sebagian besar Eurasia.",
                color:
                  "border-amber-300 bg-amber-50/50 dark:border-amber-800 dark:bg-amber-950/20",
              },
              {
                letter: "④",
                name: "Era Modern",
                title: "Tantangan Kontemporer",
                desc: "Dari masa kolonialisme hingga kebangkitan kembali negara-bangsa dan pertumbuhan diaspora global di abad ke-21.",
                color:
                  "border-cyan-300 bg-cyan-50/50 dark:border-cyan-800 dark:bg-cyan-950/20",
              },
            ].map((p) => (
              <div
                key={p.letter}
                className={cn("border rounded-lg p-4", p.color)}
              >
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-2xl font-bold text-foreground/70">
                    {p.letter}
                  </span>
                  <div>
                    <h3 className="font-semibold text-sm">{p.name}</h3>
                    <p className="text-[11px] text-muted-foreground italic">
                      {p.title}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-foreground/80 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Fitur */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Fitur</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-foreground">•</span> Canvas pan/zoom dengan
              minimap &amp; auto-layout hierarkis VERTIKAL — alur akibat (atas) → sebab (bawah)
            </li>
            <li className="flex gap-2">
              <span className="text-foreground">•</span> Timeline scrubber berbasis tahun Masehi — geser dari era 500 M hingga masa kini
            </li>
            <li className="flex gap-2">
              <span className="text-foreground">•</span> Klik node → detail
              panel dengan deskripsi mendalam dan referensi buku sejarah yang digunakan
            </li>
            <li className="flex gap-2">
              <span className="text-foreground">•</span> Search box untuk
              mencari peristiwa atau tokoh
            </li>
            <li className="flex gap-2">
              <span className="text-foreground">•</span>{" "}
              <strong>Kamus Istilah</strong> — glossary istilah historis Islam.
            </li>
            <li className="flex gap-2">
              <span className="text-foreground">•</span> Legenda warna per
              dinasti dan era (Umayyah, Abbasiyah, dll)
            </li>
          </ul>
        </section>

        {/* Riset */}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Tentang riset</h2>
          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
            Data sejarah disusun berdasarkan karya sejarawan otoritatif, di antaranya <em>A History of Islamic Societies</em> oleh Ira M. Lapidus, <em>Ar-Raheeq Al-Makhtum</em> (Perjalanan Nabi Muhammad), serta berbagai literatur kontemporer mengenai dinasti-dinasti klasik Islam.
          </p>
        </section>

        <div className="pt-4">
          <Button
            size="lg"
            onClick={onExplore}
            className="gap-2 w-full sm:w-auto"
          >
            <Sparkles className="w-4 h-4" />
            Masuk ke Canvas
          </Button>
        </div>
      </main>

      {/* Footer — wraps on mobile */}
      <footer className="border-t mt-auto">
        <div className="max-w-4xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground">
          <span className="leading-relaxed">
            Dibangun dengan Next.js, React Flow v12, dagre, Zustand, Tailwind
            CSS, shadcn/ui, dan html-to-image. Kerangka falsafi: Al-Kindi · Ibnu
            Sina · Al-Ghazali.
          </span>
          <Github className="w-4 h-4 flex-shrink-0" />
        </div>
      </footer>
    </>
  );
}

// ====================================================================
// EXPLORER VIEW
// ====================================================================

function ExplorerView({ onBack }: { onBack: () => void }) {
  const searchQuery = useFlowStore((s) => s.searchQuery);
  const setSearchQuery = useFlowStore((s) => s.setSearchQuery);

  const panelMode = useFlowStore((s) => s.panelMode);
  const setPanelMode = useFlowStore((s) => s.setPanelMode);

  // Animasi Telusur state
  const traversalActive = useFlowStore((s) => s.traversalActive);
  const startTraversal = useFlowStore((s) => s.startTraversal);
  const stopTraversal = useFlowStore((s) => s.stopTraversal);

  // Mobile "More" dropdown
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileMenuOpen]);

  const toolbarBtn = (
    mode: typeof panelMode,
    icon: React.ReactNode,
    label: string,
  ) => ({
    active: panelMode === mode,
    onClick: () => {
      setPanelMode(mode);
      setMobileMenuOpen(false);
    },
    icon,
    label,
  });

  const featureBtns = [
    toolbarBtn("quiz", <HelpCircle className="w-3.5 h-3.5 text-emerald-500" />, "Kuis Soal"),
    toolbarBtn("reflections", <Sparkles className="w-3.5 h-3.5 text-amber-500" />, "Refleksi & Tadabbur"),
    toolbarBtn("bookmarks", <Bookmark className="w-3.5 h-3.5" />, "Penanda"),
    toolbarBtn("glossary", <BookMarked className="w-3.5 h-3.5" />, "Kamus Istilah"),
  ];

  const hasActiveFeature = featureBtns.some((b) => b.active);

  return (
    <div className="flex flex-col h-screen">
      {/* Toolbar atas */}
      <header className="border-b bg-background flex-shrink-0">
        <div className="px-3 py-2 flex items-center gap-2">
          {/* Back */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="gap-1 flex-shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Beranda</span>
          </Button>

          <div className="text-sm font-semibold hidden md:block flex-shrink-0">
            Jejak Peradaban Islam
          </div>

          <div className="flex-1 min-w-0" />

          {/* Search — shrinks on mobile */}
          <div className="relative flex-shrink-0">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari node..."
              className="pl-7 h-8 w-28 sm:w-44 md:w-56 text-xs"
            />
          </div>

          {/* Animasi Telusur — icon-only on mobile */}
          <button
            onClick={() =>
              traversalActive ? stopTraversal() : startTraversal()
            }
            title={
              traversalActive
                ? "Hentikan Animasi Telusur"
                : "Mulai Animasi Telusur (mode presentasi)"
            }
            className={cn(
              "flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border text-[11px] font-medium transition-colors",
              traversalActive
                ? "bg-emerald-500 text-white border-emerald-600 hover:bg-emerald-600 animate-pulse"
                : "bg-background hover:bg-emerald-50 dark:hover:bg-emerald-950/30 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300",
            )}
          >
            {traversalActive ? (
              <>
                <Square className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Stop</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Telusur</span>
              </>
            )}
          </button>

          {/* ── Desktop: toggles + feature buttons (≥ sm) ── */}
          <div className="hidden sm:flex items-center gap-2 flex-wrap justify-end">
            {/* Feature buttons — icon-only on sm, text on lg */}
            {featureBtns.map((b, i) => (
              <button
                key={i}
                onClick={b.onClick}
                title={b.label}
                className={cn(
                  "flex items-center gap-1.5 px-2 py-1.5 rounded-md border text-[11px] transition-colors",
                  b.active
                    ? "bg-foreground text-background border-foreground"
                    : "bg-background hover:bg-muted border-border text-foreground/80",
                )}
              >
                {b.icon}
                <span className="hidden lg:inline">{b.label}</span>
              </button>
            ))}
          </div>

          {/* ── Mobile: "More" dropdown (< sm) ── */}
          <div className="sm:hidden relative flex-shrink-0" ref={menuRef}>
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              title="Fitur lainnya"
              className={cn(
                "flex items-center gap-1 px-2 py-1.5 rounded-md border text-[11px] transition-colors",
                mobileMenuOpen || hasActiveFeature
                  ? "bg-foreground text-background border-foreground"
                  : "bg-background hover:bg-muted border-border text-foreground/80",
              )}
            >
              {mobileMenuOpen
                ? <X className="w-3.5 h-3.5" />
                : <MoreHorizontal className="w-3.5 h-3.5" />}
            </button>

            {mobileMenuOpen && (
              <div className="absolute right-0 top-full mt-1 z-50 w-64 bg-background border border-border rounded-lg shadow-xl p-3 space-y-3">
                {/* Feature buttons grid */}
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-semibold">Fitur</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {featureBtns.map((b, i) => (
                      <button
                        key={i}
                        onClick={b.onClick}
                        className={cn(
                          "flex items-center text-left gap-2 px-2.5 py-2 rounded-md border text-xs transition-colors",
                          b.active
                            ? "bg-foreground text-background border-foreground"
                            : "bg-background hover:bg-muted border-border text-foreground/80",
                        )}
                      >
                        {b.icon}
                        {b.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Branch switcher — horizontally scrollable on mobile */}
        <div className="px-3 pb-2 overflow-x-auto">
          <BranchSwitcher />
        </div>
      </header>

      {/* Timeline scrubber */}
      <div className="flex-shrink-0">
        <TimelineScrubber />
      </div>

      {/* Main area: Canvas + DetailPanel, dengan overlay */}
      <div className="flex-1 relative overflow-hidden flex min-h-0">
        {/* Overlay panels (absolute, tidak mengubah layout canvas) */}
        <BookmarksPanel />
        <GlossaryPanel />
        <ReflectionsPanel />
        <QuizPanel />

        {/* Canvas (flex-1) + DetailPanel */}
        <div className="flex-1 flex min-w-0 min-h-0">
          <div className="flex-1 relative min-w-0 min-h-0">
            <ChainFlowCanvas />
          </div>
          <div className="w-[320px] sm:w-[480px] flex-shrink-0 hidden md:block min-h-0 h-full overflow-hidden">
            <DetailPanel />
          </div>
        </div>
      </div>

      {/* Mobile detail: bottom sheet */}
      <MobileDetailDrawer />
    </div>
  );
}

// ====================================================================
// MOBILE DETAIL DRAWER (untuk layar kecil tanpa side panel)
// ====================================================================

function MobileDetailDrawer() {
  const selectedNodeId = useFlowStore((s) => s.selectedNodeId);
  const setSelectedNode = useFlowStore((s) => s.setSelectedNode);

  if (!selectedNodeId) return null;

  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-40 max-h-[66.5vh] flex flex-col bg-background border-t shadow-2xl rounded-t-xl">
      {/* Drag handle visual */}
      <div className="flex justify-center pt-2 pb-1 flex-shrink-0">
        <div className="w-10 h-1 rounded-full bg-muted-foreground/30" />
      </div>
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto min-h-0">
        <DetailPanel />
      </div>
    </div>
  );
}
