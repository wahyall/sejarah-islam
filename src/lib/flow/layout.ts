/**
 * layout.ts — Category-Column & Generous Zero-Overlap "Menyamping ke Bawah" Layout Engine
 *
 * Mengatur posisi node React Flow dengan alur "Menyamping ke Bawah" dengan spasi ekstra lega:
 * 1. 9 Kolom Era Utama dari Kiri ke Kanan dengan jarak aman horisontal ekstra (COLUMN_WIDTH = 1100px).
 * 2. Di dalam setiap kolom era, node disusun vertikal berurutan mengikuti tahun Masehi & kausalitas (RANK_HEIGHT = 280px).
 * 3. Node pada tahun yang sama ditata maksimal 2 kartu per sub-baris dengan jarak horisontal 460px (celah bersih 80px antar-kartu).
 * 4. Celah antar-kolom era sebesar 260px, menjamin 100% tidak ada kartu atau panah yang saling bertumpuk.
 * 5. Untuk mode single-cluster drill-down, node ditata di tengah secara vertikal dengan celah horisontal 480px.
 */

import type { Node, Edge } from "@xyflow/react";
import { CLUSTER_GROUPS, getClusterForNode } from "@/data/cluster-nodes";

const NODE_WIDTH = 380;
const NODE_HEIGHT = 120;
const COLUMN_WIDTH = 1100; // Jarak ekstra aman antar-kolom era (celah bersih 260px)
const RANK_HEIGHT = 280;   // Jarak ekstra aman vertikal antar-tahun (celah bersih 160px)
const SUB_X_SEP = 460;     // Jarak horisontal antar-kartu sejajar dalam satu era (celah bersih 80px)

export interface LayoutOptions {
  direction?: "LR" | "TB";
  nodeSep?: number;
  rankSep?: number;
}

/**
 * Hitung posisi node secara menyamping ke bawah antar-era dengan spasi ekstra lega.
 */
export function getLayoutedElements<TNode extends Node, TEdge extends Edge>(
  nodes: TNode[],
  edges: TEdge[],
  _options: LayoutOptions = {}
): { nodes: TNode[]; edges: TEdge[] } {
  if (!nodes || nodes.length === 0) return { nodes: [], edges };

  // Map Cluster ID ke Kolom Index (0 s/d 8)
  const clusterColMap = new Map<string, number>();
  CLUSTER_GROUPS.forEach((cg, idx) => clusterColMap.set(cg.id, idx));

  // MODE 1: SINGLE CLUSTER DRILL-DOWN (Jumlah node <= 30)
  if (nodes.length <= 30) {
    const sorted = [...nodes].sort((a, b) => {
      const tA = (a.data as any)?.node?.timeValue ?? (a as any).timeValue ?? 0;
      const tB = (b.data as any)?.node?.timeValue ?? (b as any).timeValue ?? 0;
      return tA - tB;
    });

    const timeSet = Array.from(
      new Set(
        sorted.map(
          (n) => (n.data as any)?.node?.timeValue ?? (n as any).timeValue ?? 0
        )
      )
    ).sort((a, b) => a - b);

    const timeRankMap = new Map<number, number>();
    timeSet.forEach((t, i) => timeRankMap.set(t, i));

    const nodeRankMap = new Map<string, number>();
    nodes.forEach((node) => {
      const tv = (node.data as any)?.node?.timeValue ?? (node as any).timeValue ?? 0;
      nodeRankMap.set(node.id, timeRankMap.get(tv) ?? 0);
    });

    // Enforce cause-above-effect causality
    let changed = true;
    let maxIter = 50;
    while (changed && maxIter > 0) {
      maxIter--;
      changed = false;
      edges.forEach((edge) => {
        const rSrc = nodeRankMap.get(edge.source);
        const rTgt = nodeRankMap.get(edge.target);
        if (rSrc !== undefined && rTgt !== undefined && rTgt <= rSrc) {
          nodeRankMap.set(edge.target, rSrc + 1);
          changed = true;
        }
      });
    }

    const rankGroupsMap = new Map<number, TNode[]>();
    nodes.forEach((node) => {
      const rank = nodeRankMap.get(node.id) ?? 0;
      if (!rankGroupsMap.has(rank)) rankGroupsMap.set(rank, []);
      rankGroupsMap.get(rank)!.push(node);
    });

    const sortedRanks = Array.from(rankGroupsMap.keys()).sort((a, b) => a - b);
    const rankToFinalIndex = new Map<number, number>();
    sortedRanks.forEach((r, idx) => rankToFinalIndex.set(r, idx));

    const layoutedNodes = nodes.map((node) => {
      const r = nodeRankMap.get(node.id) ?? 0;
      const finalRankIndex = rankToFinalIndex.get(r) ?? 0;
      const group = rankGroupsMap.get(r) || [node];
      const k = group.length;
      const itemIndex = group.findIndex((n) => n.id === node.id);

      const x = (itemIndex - (k - 1) / 2) * 480;
      const y = finalRankIndex * 260;

      return {
        ...node,
        position: {
          x: x - NODE_WIDTH / 2,
          y: y - NODE_HEIGHT / 2,
        },
      };
    });

    return { nodes: layoutedNodes, edges };
  }

  // MODE 2: FULL GRAPH MODE (9 ERA COLUMNS "MENYAMPING KE BAWAH" - EXTRA ZERO OVERLAP)
  const nodePosMap = new Map<string, { x: number; y: number }>();

  // Map setiap node ke klaster yang sesuai
  const nodeClusterMap = new Map<string, string>();
  nodes.forEach((node) => {
    const rawCategory = (node.data as any)?.node?.category ?? (node as any).category ?? "pra-islam";
    const cg = getClusterForNode(node.id, rawCategory);
    nodeClusterMap.set(node.id, cg.id);
  });

  CLUSTER_GROUPS.forEach((cg, colIdx) => {
    const nodesInCluster = nodes.filter((n) => nodeClusterMap.get(n.id) === cg.id);
    if (nodesInCluster.length === 0) return;

    // Urutkan node di dalam klaster berdasarkan timeValue
    const sortedInCluster = [...nodesInCluster].sort((a, b) => {
      const tA = (a.data as any)?.node?.timeValue ?? (a as any).timeValue ?? 0;
      const tB = (b.data as any)?.node?.timeValue ?? (b as any).timeValue ?? 0;
      return tA - tB;
    });

    // Kelompokkan berdasarkan timeValue di dalam klaster ini
    const timeMap = new Map<number, TNode[]>();
    sortedInCluster.forEach((n) => {
      const tv = (n.data as any)?.node?.timeValue ?? (n as any).timeValue ?? 0;
      if (!timeMap.has(tv)) timeMap.set(tv, []);
      timeMap.get(tv)!.push(n);
    });

    const timeKeys = Array.from(timeMap.keys()).sort((a, b) => a - b);
    const baseX = colIdx * COLUMN_WIDTH;
    const startY = colIdx * 150; // Staggered Y offset untuk alur menyamping ke bawah yang anggun

    let currentRankY = 0;
    timeKeys.forEach((tv) => {
      const group = timeMap.get(tv)!;
      const totalSubRows = Math.ceil(group.length / 2);

      group.forEach((node, itemIdx) => {
        const subIdx = itemIdx % 2;
        const rowIdx = Math.floor(itemIdx / 2);
        const k = Math.min(group.length - rowIdx * 2, 2);

        const xOffset = (subIdx - (k - 1) / 2) * SUB_X_SEP;
        const x = baseX + (group.length === 1 ? 0 : xOffset);
        const y = startY + (currentRankY + rowIdx) * RANK_HEIGHT;

        nodePosMap.set(node.id, { x, y });
      });

      currentRankY += totalSubRows;
    });
  });

  const layoutedNodes = nodes.map((node) => {
    const pos = nodePosMap.get(node.id) || { x: 0, y: 0 };
    return {
      ...node,
      position: {
        x: pos.x - NODE_WIDTH / 2,
        y: pos.y - NODE_HEIGHT / 2,
      },
    };
  });

  return { nodes: layoutedNodes, edges };
}

/**
 * Warna dan label per kategori peradaban
 */
export const CATEGORY_COLORS: Record<
  string,
  { bg: string; border: string; text: string; ring: string; dot: string; label: string }
> = {
  "pra-islam": {
    bg: "bg-stone-50 dark:bg-stone-950/40",
    border: "border-stone-300 dark:border-stone-800",
    text: "text-stone-900 dark:text-stone-100",
    ring: "ring-stone-400",
    dot: "bg-stone-500",
    label: "Pra-Islam",
  },
  kenabian: {
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
    border: "border-emerald-300 dark:border-emerald-800",
    text: "text-emerald-900 dark:text-emerald-100",
    ring: "ring-emerald-400",
    dot: "bg-emerald-500",
    label: "Masa Kenabian",
  },
  "khulafaur-rasyidin": {
    bg: "bg-sky-50 dark:bg-sky-950/40",
    border: "border-sky-300 dark:border-sky-800",
    text: "text-sky-900 dark:text-sky-100",
    ring: "ring-sky-400",
    dot: "bg-sky-500",
    label: "Khulafaur Rasyidin",
  },
  umayyah: {
    bg: "bg-amber-50 dark:bg-amber-950/40",
    border: "border-amber-300 dark:border-amber-800",
    text: "text-amber-900 dark:text-amber-100",
    ring: "ring-amber-400",
    dot: "bg-amber-500",
    label: "Dinasti Umayyah",
  },
  abbasiyah: {
    bg: "bg-violet-50 dark:bg-violet-950/40",
    border: "border-violet-300 dark:border-violet-800",
    text: "text-violet-900 dark:text-violet-100",
    ring: "ring-violet-400",
    dot: "bg-violet-500",
    label: "Dinasti Abbasiyah",
  },
  andalusia: {
    bg: "bg-teal-50 dark:bg-teal-950/40",
    border: "border-teal-300 dark:border-teal-800",
    text: "text-teal-900 dark:text-teal-100",
    ring: "ring-teal-400",
    dot: "bg-teal-500",
    label: "Andalusia",
  },
  "tiga-kerajaan": {
    bg: "bg-indigo-50 dark:bg-indigo-950/40",
    border: "border-indigo-300 dark:border-indigo-800",
    text: "text-indigo-900 dark:text-indigo-100",
    ring: "ring-indigo-400",
    dot: "bg-indigo-500",
    label: "Tiga Kerajaan Besar",
  },
  nusantara: {
    bg: "bg-green-50 dark:bg-green-950/40",
    border: "border-green-300 dark:border-green-800",
    text: "text-green-900 dark:text-green-100",
    ring: "ring-green-400",
    dot: "bg-green-600",
    label: "Islam Nusantara",
  },
  modern: {
    bg: "bg-sky-50 dark:bg-sky-950/40",
    border: "border-sky-300 dark:border-sky-800",
    text: "text-sky-900 dark:text-sky-100",
    ring: "ring-sky-400",
    dot: "bg-sky-500",
    label: "Era Modern",
  },
};
