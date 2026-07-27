import { create } from "zustand";
import type { ChainBranch, ChainCategory } from "@/data/chain-nodes";

export type ActiveBranch = ChainBranch | "all";

export type PanelMode =
  | "none"
  | "bookmarks"
  | "glossary"
  | "reflections"
  | "quiz";

interface FlowState {
  activeBranch: ActiveBranch;
  searchQuery: string;
  activeCategories: Set<ChainCategory>;
  selectedNodeId: string | null;
  timelineTimeValue: number | null;
  panelMode: PanelMode;
  traversalActive: boolean;
  traversalIndex: number;
  traversalNodeId: string | null;
  focusNodeId: string | null;
  expandedClusterId: string | null;

  setBranch: (b: ActiveBranch) => void;
  setSearchQuery: (q: string) => void;
  toggleCategory: (c: ChainCategory) => void;
  setSelectedNode: (id: string | null) => void;
  setTimelineTimeValue: (v: number | null) => void;
  setPanelMode: (m: PanelMode) => void;
  startTraversal: () => void;
  stopTraversal: () => void;
  setTraversalIndex: (i: number) => void;
  setTraversalNodeId: (id: string | null) => void;
  setFocusNode: (id: string | null) => void;
  setExpandedClusterId: (id: string | null) => void;
}

export const useFlowStore = create<FlowState>((set) => ({
  activeBranch: "all",
  searchQuery: "",
  activeCategories: new Set<ChainCategory>([
    "pra-islam",
    "kenabian",
    "khulafaur-rasyidin",
    "umayyah",
    "abbasiyah",
    "andalusia",
    "tiga-kerajaan",
    "nusantara",
    "kolonial",
    "modern"
  ]),
  selectedNodeId: null,
  timelineTimeValue: null,
  panelMode: "none",
  traversalActive: false,
  traversalIndex: 0,
  traversalNodeId: null,
  focusNodeId: null,
  expandedClusterId: null,

  setBranch: (b) => set({ activeBranch: b }),
  setSearchQuery: (q) => set({ searchQuery: q }),
  toggleCategory: (c) =>
    set((state) => {
      const next = new Set(state.activeCategories);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return { activeCategories: next };
    }),
  setSelectedNode: (id) => set({ selectedNodeId: id }),
  setTimelineTimeValue: (v) => set({ timelineTimeValue: v }),
  setPanelMode: (m) =>
    set((state) => ({ panelMode: state.panelMode === m ? "none" : m })),
  startTraversal: () =>
    set({ traversalActive: true, traversalIndex: 0, traversalNodeId: null }),
  stopTraversal: () =>
    set({ traversalActive: false, traversalIndex: 0, traversalNodeId: null }),
  setTraversalIndex: (i) => set({ traversalIndex: i }),
  setTraversalNodeId: (id) => set({ traversalNodeId: id }),
  setFocusNode: (id) => set({ focusNodeId: id }),
  setExpandedClusterId: (id) => set({ expandedClusterId: id }),
}));
