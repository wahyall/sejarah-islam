import type { Edge } from "@xyflow/react";
import type { ChainBranch } from "./chain-nodes";
import { islamicHistoryEdges } from "./islamic-history-edges";

export type { Edge };

export interface ChainEdge extends Edge {
  causalLabel?: string;
  branch?: ChainBranch | "all";
}

export const chainEdges: ChainEdge[] = islamicHistoryEdges;
