"use client";

import { useFlowStore } from "@/store/flow-store";
import { CLUSTER_GROUPS } from "@/data/cluster-nodes";

export function ClusterBreadcrumb() {
  const expandedClusterId = useFlowStore((s) => s.expandedClusterId);
  const setExpandedClusterId = useFlowStore((s) => s.setExpandedClusterId);

  const activeCluster = CLUSTER_GROUPS.find((c) => c.id === expandedClusterId);

  return (
    <div className="absolute top-4 left-4 z-20 flex flex-wrap items-center gap-2 rounded-xl border border-border/80 bg-background/90 p-2 px-3 backdrop-blur-md shadow-lg text-xs font-medium">
      <button
        type="button"
        onClick={() => setExpandedClusterId(null)}
        className={`hover:text-primary transition-colors flex items-center gap-1.5 font-semibold px-2 py-1 rounded-md border ${
          expandedClusterId === null
            ? "bg-primary text-primary-foreground border-primary"
            : "text-foreground bg-secondary/50 border-border"
        }`}
      >
        <span className="text-sm">🌐</span>
        <span>Mode Klaster (9 Era Makro)</span>
      </button>

      <button
        type="button"
        onClick={() => setExpandedClusterId("all")}
        className={`hover:text-primary transition-colors flex items-center gap-1.5 font-semibold px-2 py-1 rounded-md border ${
          expandedClusterId === "all"
            ? "bg-primary text-primary-foreground border-primary"
            : "text-foreground bg-secondary/50 border-border"
        }`}
      >
        <span className="text-sm">📜</span>
        <span>Tampilkan Semua 114+ Node Detail</span>
      </button>

      {activeCluster && expandedClusterId !== "all" && (
        <>
          <span className="text-muted-foreground">/</span>
          <div className="flex items-center gap-2 bg-secondary/80 px-2.5 py-1 rounded-md border border-border">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: activeCluster.color }}
            />
            <span className="font-bold text-foreground">
              {activeCluster.label}
            </span>
            <span className="text-muted-foreground text-[10px]">
              ({activeCluster.nodeIds.length} Peristiwa • {activeCluster.timeRange})
            </span>
          </div>

          <button
            type="button"
            onClick={() => setExpandedClusterId(null)}
            className="ml-1 rounded-md bg-amber-500/20 hover:bg-amber-500/30 text-slate-800 border border-amber-500/40 px-2 py-1 text-[11px] font-semibold transition-colors flex items-center gap-1"
          >
            <span>🔙 Kembali ke Klaster Makro</span>
          </button>
        </>
      )}
    </div>
  );
}
