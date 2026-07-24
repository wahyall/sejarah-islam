import type { Edge } from "@xyflow/react";
import { islamicHistoryEdges } from "./islamic-history-edges";

export type { Edge };

export interface ChainEdge extends Edge {
  causalLabel?: string;
  branch?: "jalur-utama" | "jalur-sains" | "jalur-politik" | "jalur-pemikiran" | "all";
}

export const chainEdges: ChainEdge[] = islamicHistoryEdges;
