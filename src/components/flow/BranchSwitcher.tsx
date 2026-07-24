"use client";

import { useFlowStore, type ActiveBranch } from "@/store/flow-store";
import { cn } from "@/lib/utils";

interface BranchOption {
  value: ActiveBranch;
  label: string;
  short: string;
  description: string;
}

const OPTIONS: BranchOption[] = [
  {
    value: "jalur-utama",
    label: "A. Jalur Utama",
    short: "A",
    description: "Alur Peristiwa Utama dalam Sejarah Islam",
  },
  {
    value: "jalur-sains",
    label: "B. Perkembangan Sains & Ilmu",
    short: "B",
    description: "Sejarah Intelektual, Penemuan, dan Filsafat",
  },
  {
    value: "jalur-politik",
    label: "C. Dinamika Politik",
    short: "C",
    description: "Perang, Dinasti, dan Kekuasaan",
  },
  {
    value: "jalur-pemikiran",
    label: "D. Aliran Pemikiran",
    short: "D",
    description: "Teologi, Fiqh, dan Tasawuf",
  },
  {
    value: "all",
    label: "Semua Jalur",
    short: "★",
    description: "Gabungan seluruh cabang sejarah",
  },
];

export function BranchSwitcher() {
  const activeBranch = useFlowStore((s) => s.activeBranch);
  const setBranch = useFlowStore((s) => s.setBranch);

  return (
    <div className="flex flex-wrap gap-1.5 items-center">
      {OPTIONS.map((opt) => (
        <button
          key={opt.value}
          onClick={() => setBranch(opt.value)}
          title={opt.description}
          className={cn(
            "px-3 py-1.5 rounded-md text-xs font-medium transition-all border",
            "flex items-center gap-1.5",
            activeBranch === opt.value
              ? "bg-foreground text-background border-foreground shadow-sm"
              : "bg-background hover:bg-muted border-border text-foreground/80"
          )}
        >
          <span
            className={cn(
              "inline-flex items-center justify-center w-4 h-4 rounded text-[10px] font-bold",
              activeBranch === opt.value
                ? "bg-background text-foreground"
                : "bg-muted-foreground/15 text-foreground/70"
            )}
          >
            {opt.short}
          </span>
          <span className="hidden sm:inline">{opt.label}</span>
          <span className="sm:hidden">{opt.label.replace(/^[A-Z]★?\.\s*/, "")}</span>
        </button>
      ))}
    </div>
  );
}
