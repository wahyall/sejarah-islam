"use client";

import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { cn } from "@/lib/utils";
import type { ClusterGroup } from "@/data/cluster-nodes";
import { useFlowStore } from "@/store/flow-store";

export interface ClusterNodeData extends Record<string, unknown> {
  cluster: ClusterGroup;
  eventCount: number;
  isExpanded?: boolean;
}

function ClusterNodeImpl({ data }: NodeProps) {
  const nodeData = data as unknown as ClusterNodeData;
  const cluster = nodeData.cluster;
  const eventCount = nodeData.eventCount || cluster.nodeIds.length;

  const setExpandedClusterId = useFlowStore((s) => s.setExpandedClusterId);
  const expandedClusterId = useFlowStore((s) => s.expandedClusterId);
  const isCurrentExpanded = expandedClusterId === cluster.id;

  const handleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedClusterId(isCurrentExpanded ? null : cluster.id);
  };

  return (
    <div
      onClick={handleExpand}
      className={cn(
        "group relative cursor-pointer rounded-2xl border-2 p-6 transition-all duration-300",
        "w-[460px] min-h-[290px] flex flex-col justify-between shadow-xl hover:shadow-2xl hover:scale-[1.03]",
        "bg-background/95 backdrop-blur-md",
        "border-border hover:border-primary/60",
        isCurrentExpanded && "ring-4 ring-primary/50 border-primary shadow-primary/20 scale-[1.04]"
      )}
      style={{
        borderColor: cluster.color,
      }}
    >
      {/* Dynamic Glow Accent Header */}
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-2.5 rounded-t-xl bg-gradient-to-r opacity-90",
          cluster.gradient
        )}
        style={{ backgroundColor: cluster.color }}
      />

      {/* Handles for connections */}
      <Handle
        type="target"
        position={Position.Top}
        id="cluster-target-top"
        className="!w-3.5 !h-3.5 !border-2 !bg-primary !border-background"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="cluster-source-bottom"
        className="!w-3.5 !h-3.5 !border-2 !bg-primary !border-background"
      />
      <Handle
        type="target"
        position={Position.Left}
        id="cluster-target-left"
        className="!w-3.5 !h-3.5 !border-2 !bg-primary !border-background"
      />
      <Handle
        type="source"
        position={Position.Right}
        id="cluster-source-right"
        className="!w-3.5 !h-3.5 !border-2 !bg-primary !border-background"
      />

      {/* Header Info */}
      <div className="pt-1">
        <div className="flex items-center justify-between gap-2">
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold tracking-wide text-white shadow-sm"
            style={{ backgroundColor: cluster.color }}
          >
            {cluster.timeRange}
          </span>

          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            {eventCount} Peristiwa
          </span>
        </div>

        <h3 className="mt-3 text-lg font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors line-clamp-1">
          {cluster.label}
        </h3>

        <p className="mt-2 text-sm text-muted-foreground line-clamp-5 leading-relaxed">
          {cluster.description}
        </p>
      </div>

      {/* Action Footer */}
      <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs">
        <span className="text-muted-foreground group-hover:text-foreground font-semibold transition-colors">
          {isCurrentExpanded ? "Sedang Ditampilkan" : "Klik untuk Zoom-In Peristiwa"}
        </span>
        <button
          type="button"
          onClick={handleExpand}
          className={cn(
            "px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm",
            isCurrentExpanded
              ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
        >
          <span>{isCurrentExpanded ? "❌ Tutup" : "🔍 Zoom-In Klaster"}</span>
        </button>
      </div>
    </div>
  );
}

export const ClusterNode = memo(ClusterNodeImpl);
