/**
 * layout.ts — Wrapper dagre untuk auto-layout hierarkis.
 *
 * Mengatur node React Flow agar tidak bertumpuk, dengan arah:
 *   ATAS (akibat / efek) → BAWAH (sebab / asal)
 *
 * Konvensi edge kita: source = akibat, target = sebab.
 * Maka di dagre, kita pakai direction "TB" (top-to-bottom) supaya
 * node "akibat" muncul di atas dan "sebab pertama" muncul di bawah.
 */

import dagre from "dagre";
import type { Node, Edge } from "@xyflow/react";

const NODE_WIDTH = 260;
const NODE_HEIGHT = 90;

export interface LayoutOptions {
  direction?: "LR" | "TB";
  nodeSep?: number;
  rankSep?: number;
}

/**
 * Hitung posisi node dengan dagre, return node baru dengan posisi yang sudah dihitung.
 */
export function getLayoutedElements<TNode extends Node, TEdge extends Edge>(
  nodes: TNode[],
  edges: TEdge[],
  options: LayoutOptions = {}
): { nodes: TNode[]; edges: TEdge[] } {
  const { direction = "TB", nodeSep = 180, rankSep = 135 } = options;

  const g = new dagre.graphlib.Graph();
  g.setDefaultEdgeLabel(() => ({}));
  g.setGraph({
    rankdir: direction,
    nodesep: nodeSep,
    ranksep: rankSep,
    marginx: 40,
    marginy: 40,
  });

  nodes.forEach((node) => {
    g.setNode(node.id, {
      width: NODE_WIDTH,
      height: NODE_HEIGHT,
    });
  });

  edges.forEach((edge) => {
    g.setEdge(edge.source, edge.target);
  });

  dagre.layout(g);

  const layoutedNodes = nodes.map((node) => {
    const pos = g.node(node.id);
    return {
      ...node,
      // React Flow pakai posisi top-left, dagre pakai pusat. Sesuaikan.
      position: {
        x: pos.x - NODE_WIDTH / 2,
        y: pos.y - NODE_HEIGHT / 2,
      },
    };
  });

  return { nodes: layoutedNodes, edges };
}

/**
 * Konstanta kategori → warna (sesuai CSS variable Tailwind).
 * Warna dipilih agar kontras dan bermakna:
 * - personal: warm amber (manusia sehari-hari)
 * - biologis: hijau (kehidupan)
 * - geologis: tan/cokelat (batuan)
 * - astronomis: unggu gelap (bintang/galaksi)
 * - partikel: cyan (subatomik)
 * - filosofis: emas terang (argumen)
 */
export const CATEGORY_COLORS: Record<string, { bg: string; border: string; text: string; ring: string; dot: string; label: string }> = {
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
  kolonial: {
    bg: "bg-rose-50 dark:bg-rose-950/40",
    border: "border-rose-300 dark:border-rose-800",
    text: "text-rose-900 dark:text-rose-100",
    ring: "ring-rose-400",
    dot: "bg-rose-500",
    label: "Era Kolonialisme",
  },
  modern: {
    bg: "bg-cyan-50 dark:bg-cyan-950/40",
    border: "border-cyan-300 dark:border-cyan-800",
    text: "text-cyan-900 dark:text-cyan-100",
    ring: "ring-cyan-400",
    dot: "bg-cyan-500",
    label: "Era Modern",
  },
};
