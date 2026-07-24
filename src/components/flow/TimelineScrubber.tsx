"use client";

import { useMemo, useState } from "react";
import { useFlowStore } from "@/store/flow-store";
import { nodes as chainNodes } from "@/data/chain-nodes";
import { cn } from "@/lib/utils";
import { X, Clock, MapPin } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

// Rentang linier: dari tahun 500 M hingga 2050 M
const MIN_YEAR = 500;
const MAX_YEAR = 2050;
const RANGE = MAX_YEAR - MIN_YEAR;

function linearScale(value: number): number {
  const v = Math.max(MIN_YEAR, Math.min(value, MAX_YEAR));
  return ((v - MIN_YEAR) / RANGE) * 100;
}

interface EraMarker {
  id: string;
  nodeId: string;
  eraName: string;
  shortLabel: string; // label singkat di bawah titik
  timeDisplay: string; // angka waktu (mis. "622 M")
  timeValue: number;
  location: string;
  description: string;
  group: "early" | "classical" | "middle" | "modern";
}

const ERA_MARKERS: EraMarker[] = [
  {
    id: "m-jahiliyah",
    nodeId: "h-jahiliyah",
    eraName: "Era Pra-Islam",
    shortLabel: "Jahiliyah",
    timeDisplay: "Pra 570 M",
    timeValue: 550,
    location: "Mekkah",
    description: "Masa kekosongan wahyu sebelum Nabi Muhammad lahir.",
    group: "early",
  },
  {
    id: "m-hijrah",
    nodeId: "h-hijrah",
    eraName: "Hijrah ke Madinah",
    shortLabel: "Hijrah",
    timeDisplay: "622 M",
    timeValue: 622,
    location: "Yatsrib (Madinah)",
    description: "Nabi Muhammad hijrah, menandai tahun 1 Hijriah dan berdirinya tatanan sosial baru.",
    group: "early",
  },
  {
    id: "m-khulafaur",
    nodeId: "h-abu-bakar",
    eraName: "Khulafaur Rasyidin",
    shortLabel: "Rasyidin",
    timeDisplay: "632 M",
    timeValue: 632,
    location: "Madinah",
    description: "Masa kepemimpinan 4 sahabat Nabi pasca wafatnya beliau.",
    group: "early",
  },
  {
    id: "m-umayyah",
    nodeId: "h-umayyah-diri",
    eraName: "Dinasti Umayyah",
    shortLabel: "Umayyah",
    timeDisplay: "661 M",
    timeValue: 661,
    location: "Damaskus",
    description: "Berdirinya kekhalifahan monarki pertama dengan ekspansi wilayah yang masif.",
    group: "classical",
  },
  {
    id: "m-abbasiyah",
    nodeId: "h-revolusi-abbasiyah",
    eraName: "Dinasti Abbasiyah",
    shortLabel: "Abbasiyah",
    timeDisplay: "750 M",
    timeValue: 750,
    location: "Baghdad",
    description: "Awal zaman keemasan Islam, perkembangan pesat sains, kedokteran, dan filsafat.",
    group: "classical",
  },
  {
    id: "m-salib",
    nodeId: "h-perang-salib",
    eraName: "Perang Salib",
    shortLabel: "Perang Salib",
    timeDisplay: "1099 M",
    timeValue: 1099,
    location: "Yerusalem",
    description: "Konflik militer antara pasukan Eropa dan dunia Islam yang berlangsung berabad-abad.",
    group: "middle",
  },
  {
    id: "m-mongol",
    nodeId: "h-runtuh-baghdad",
    eraName: "Kejatuhan Baghdad",
    shortLabel: "Mongol",
    timeDisplay: "1258 M",
    timeValue: 1258,
    location: "Baghdad",
    description: "Pasukan Mongol pimpinan Hulagu Khan menghancurkan pusat kekhalifahan Abbasiyah.",
    group: "middle",
  },
  {
    id: "m-konstantinopel",
    nodeId: "h-konstantinopel",
    eraName: "Penaklukan Konstantinopel",
    shortLabel: "Fathu",
    timeDisplay: "1453 M",
    timeValue: 1453,
    location: "Istanbul",
    description: "Muhammad Al-Fatih menaklukkan ibukota Romawi Timur, mengokohkan Kekaisaran Utsmani.",
    group: "middle",
  },
  {
    id: "m-napoleon",
    nodeId: "h-napoleon-mesir",
    eraName: "Era Kolonial",
    shortLabel: "Kolonial",
    timeDisplay: "1798 M",
    timeValue: 1798,
    location: "Mesir",
    description: "Invasi Napoleon ke Mesir menyadarkan dunia Islam akan ketertinggalan teknologi Eropa.",
    group: "modern",
  },
  {
    id: "m-now",
    nodeId: "h-masa-kini",
    eraName: "Masa Kini",
    shortLabel: "Kini",
    timeDisplay: "2024 M",
    timeValue: 2024,
    location: "Global",
    description: "Tantangan negara-bangsa modern, kebangkitan Islam, dan diaspora Muslim di seluruh dunia.",
    group: "modern",
  },
];

const GROUP_STYLES: Record<
  EraMarker["group"],
  {
    dotActive: string;
    dotHover: string;
    chipText: string;
    cardBorder: string;
    legendColor: string;
  }
> = {
  early: {
    dotActive: "bg-emerald-600 border-emerald-700 ring-4 ring-emerald-100",
    dotHover: "bg-emerald-600 border-emerald-700 ring-4 ring-emerald-100 scale-125",
    chipText: "text-emerald-700",
    cardBorder: "border-emerald-300",
    legendColor: "bg-emerald-500",
  },
  classical: {
    dotActive: "bg-indigo-600 border-indigo-700 ring-4 ring-indigo-100",
    dotHover: "bg-indigo-600 border-indigo-700 ring-4 ring-indigo-100 scale-125",
    chipText: "text-indigo-700",
    cardBorder: "border-indigo-300",
    legendColor: "bg-indigo-500",
  },
  middle: {
    dotActive: "bg-amber-600 border-amber-700 ring-4 ring-amber-100",
    dotHover: "bg-amber-600 border-amber-700 ring-4 ring-amber-100 scale-125",
    chipText: "text-amber-700",
    cardBorder: "border-amber-300",
    legendColor: "bg-amber-500",
  },
  modern: {
    dotActive: "bg-cyan-600 border-cyan-700 ring-4 ring-cyan-100",
    dotHover: "bg-cyan-600 border-cyan-700 ring-4 ring-cyan-100 scale-125",
    chipText: "text-cyan-700",
    cardBorder: "border-cyan-300",
    legendColor: "bg-cyan-500",
  },
};

export function TimelineScrubber() {
  const timelineTimeValue = useFlowStore((s) => s.timelineTimeValue);
  const setTimelineTimeValue = useFlowStore((s) => s.setTimelineTimeValue);
  const setSelectedNode = useFlowStore((s) => s.setSelectedNode);
  const setFocusNode = useFlowStore((s) => s.setFocusNode);
  const setBranch = useFlowStore((s) => s.setBranch);
  const isMobile = useIsMobile();
  const [hoveredState, setHoveredState] = useState<{
    marker: EraMarker;
    rect: DOMRect;
  } | null>(null);

  const activeMarkerId = useMemo(() => {
    if (timelineTimeValue == null) return null;
    let bestId: string | null = null;
    let bestDist = Infinity;
    for (const m of ERA_MARKERS) {
      const d = Math.abs(m.timeValue - timelineTimeValue);
      if (d < bestDist) {
        bestDist = d;
        bestId = m.id;
      }
    }
    return bestId;
  }, [timelineTimeValue]);

  const markerPositions = useMemo(() => {
    const minGap = isMobile ? 8 : 4.5;
    const maxAllowed = 99;
    const minAllowed = 1;

    const rawPos = ERA_MARKERS.map((m) => linearScale(m.timeValue));
    const pos = [...rawPos];

    for (let i = 1; i < pos.length; i++) {
      if (pos[i] - pos[i - 1] < minGap) {
        pos[i] = pos[i - 1] + minGap;
      }
    }

    if (pos[pos.length - 1] > maxAllowed) {
      pos[pos.length - 1] = maxAllowed;
      for (let i = pos.length - 2; i >= 0; i--) {
        if (pos[i + 1] - pos[i] < minGap) {
          pos[i] = pos[i + 1] - minGap;
        }
      }
    }

    if (pos[0] < minAllowed) {
      pos[0] = minAllowed;
      for (let i = 1; i < pos.length; i++) {
        if (pos[i] - pos[i - 1] < minGap) {
          pos[i] = pos[i - 1] + minGap;
        }
      }
    }

    return pos;
  }, [isMobile]);

  const handleTickClick = (m: EraMarker) => {
    const node = chainNodes.find((n) => n.id === m.nodeId);
    if (node && node.branch !== "jalur-utama") {
      setBranch("jalur-utama");
    }
    setTimelineTimeValue(m.timeValue);
    setSelectedNode(m.nodeId);
    setFocusNode(m.nodeId);
  };

  const handleReset = () => {
    setTimelineTimeValue(null);
    setSelectedNode(null);
  };

  const isActive = timelineTimeValue != null;

  const groupLegend = [
    { group: "early" as const, label: "Fase Awal" },
    { group: "classical" as const, label: "Zaman Keemasan" },
    { group: "middle" as const, label: "Fase Pertengahan" },
    { group: "modern" as const, label: "Era Modern" },
  ];

  const hoveredMarker = hoveredState?.marker ?? null;

  return (
    <div className="w-full bg-white border-b border-slate-200 shadow-sm">
      <div className="px-4 sm:px-5 pt-2 pb-1.5 flex flex-wrap items-center justify-between gap-2 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-900 text-white flex-shrink-0">
            <Clock className="w-3 h-3" />
          </div>
          <div>
            <h4 className="text-[12px] sm:text-[13px] font-bold tracking-tight text-slate-900 leading-tight">
              Skala Waktu Historis
            </h4>
            {hoveredMarker ? (
              <p className="text-[10px] sm:text-[11px] text-slate-700 leading-tight flex items-center gap-1.5 font-medium">
                <span className={cn("font-bold", GROUP_STYLES[hoveredMarker.group].chipText)}>
                  {hoveredMarker.eraName}
                </span>
                <span className="text-slate-400 font-normal">
                  ({hoveredMarker.timeDisplay})
                </span>
                <span className="text-slate-500 font-normal hidden sm:inline">
                  — {hoveredMarker.description}
                </span>
              </p>
            ) : (
              <p className="text-[10px] sm:text-[11px] text-slate-500 leading-tight">
                <span className="font-mono font-semibold text-slate-700">500 M</span> → <span className="font-mono font-semibold text-slate-700">2024 M</span> · klik node untuk detail
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2.5">
            {groupLegend.map((g) => (
              <div key={g.group} className="flex items-center gap-1.5">
                <span className={cn("w-2 h-2 rounded-full", GROUP_STYLES[g.group].legendColor)} />
                <span className="text-[10px] text-slate-500 font-medium">{g.label}</span>
              </div>
            ))}
          </div>

          {isActive && (
            <button
              onClick={handleReset}
              title="Reset pilihan"
              className="flex items-center gap-1 text-[10px] px-2 py-1 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors font-medium"
            >
              <X className="w-3 h-3" />
              Reset
            </button>
          )}
        </div>
      </div>

      <div className="relative px-4 sm:px-5 py-2">
        <div className="overflow-x-auto sm:overflow-hidden pb-1" style={{ WebkitOverflowScrolling: "touch" }}>
          <div className="relative min-w-[960px] sm:min-w-0" style={{ height: "72px" }}>
            <div className="absolute left-0 right-0 h-px bg-slate-300" style={{ top: "14px" }} />

            {/* Minor ticks (setiap 100 tahun) */}
            {Array.from({ length: 16 }, (_, i) => 500 + i * 100).map((year) => {
              const pos = ((year - MIN_YEAR) / RANGE) * 100;
              return (
                <div
                  key={year}
                  className="absolute -translate-x-1/2"
                  style={{
                    left: `${pos}%`,
                    top: "10px",
                    height: "8px",
                    width: "1px",
                    background: "rgb(148 163 184)",
                  }}
                />
              );
            })}

            {ERA_MARKERS.map((m, idx) => {
              const pos = markerPositions[idx];
              const isActiveTick = activeMarkerId === m.id;
              const isHovered = hoveredState?.marker.id === m.id;
              const styles = GROUP_STYLES[m.group];

              return (
                <div
                  key={m.id}
                  className="absolute -translate-x-1/2"
                  style={{ left: `${pos}%`, top: 0 }}
                  onMouseEnter={(e) => {
                    const dotBtn = e.currentTarget.querySelector("button");
                    const rect = dotBtn ? dotBtn.getBoundingClientRect() : e.currentTarget.getBoundingClientRect();
                    setHoveredState({ marker: m, rect });
                  }}
                  onMouseLeave={() => setHoveredState(null)}
                >
                  <button
                    onClick={() => handleTickClick(m)}
                    title={`${m.eraName} — klik untuk lompat ke node`}
                    className="relative flex flex-col items-center group focus:outline-none"
                  >
                    <span
                      className={cn(
                        "rounded-full border-2 transition-all duration-150 group-hover:scale-125",
                        isActiveTick ? styles.dotActive : isHovered ? styles.dotHover : "bg-white border-slate-400"
                      )}
                      style={{ width: "12px", height: "12px", marginTop: "8px" }}
                    />
                    <span
                      className={cn(
                        "mt-1.5 text-[10px] font-semibold leading-none whitespace-nowrap transition-colors",
                        isActiveTick ? styles.chipText : isHovered ? cn(styles.chipText, "font-bold scale-105") : "text-slate-600"
                      )}
                    >
                      {m.shortLabel}
                    </span>
                    <span className="mt-0.5 text-[9px] font-mono leading-none whitespace-nowrap text-slate-400">
                      {m.timeDisplay}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between items-center mt-1 pt-1 border-t border-slate-100 text-[10px] text-slate-500 font-mono min-w-[960px] sm:min-w-0">
            <span>← 500 M (Pra-Islam)</span>
            <span className="hidden sm:inline text-slate-400">Skala Tahun Linier</span>
            <span>2050 M (Masa Kini) →</span>
          </div>
        </div>
      </div>

      {hoveredState && (() => {
        const m = hoveredState.marker;
        const styles = GROUP_STYLES[m.group];
        const cardWidth = 220;
        const halfCard = cardWidth / 2;
        const markerCenterX = hoveredState.rect.left + hoveredState.rect.width / 2;
        const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 1000;
        const clampedCenterX = Math.min(Math.max(markerCenterX, halfCard + 12), viewportWidth - halfCard - 12);
        const arrowOffsetX = markerCenterX - clampedCenterX;

        return (
          <div
            className={cn(
              "fixed z-50 w-[220px] bg-white rounded-lg border-2 shadow-2xl px-3 py-2.5 text-left pointer-events-none transition-opacity duration-150 animate-in fade-in zoom-in-95",
              styles.cardBorder
            )}
            style={{
              left: `${clampedCenterX}px`,
              top: `${hoveredState.rect.top - 8}px`,
              transform: "translate(-50%, -100%)",
            }}
          >
            <div
              className={cn("absolute w-2.5 h-2.5 bg-white border-r-2 border-b-2", styles.cardBorder)}
              style={{
                bottom: "-6px",
                left: `calc(50% + ${arrowOffsetX}px)`,
                transform: "translateX(-50%) rotate(45deg)",
              }}
            />
            <h5 className={cn("text-[12px] font-bold leading-tight mb-1.5", styles.chipText)}>
              {m.eraName}
            </h5>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="font-mono text-[10px] font-semibold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded">
                {m.timeDisplay}
              </span>
              <span className="inline-flex items-center gap-0.5 text-[10px] text-orange-600 font-medium">
                <MapPin className="w-3 h-3" />
                {m.location}
              </span>
            </div>
            <p className="text-[10px] leading-snug text-slate-600">
              {m.description}
            </p>
            <p className="mt-1.5 text-[9px] text-slate-400 italic">
              Klik untuk lompat ke node era ini →
            </p>
          </div>
        );
      })()}
    </div>
  );
}
