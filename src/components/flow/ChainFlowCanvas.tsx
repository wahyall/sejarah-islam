"use client";

import { useMemo, useCallback, useEffect, useRef } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  useReactFlow,
  type Node,
  type Edge,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { chainEdges as edgesData } from "@/data/chain-edges";
import { nodes as nodesData } from "@/data/chain-nodes";
import { CustomNode, type ChainNodeData } from "./CustomNode";
import { getLayoutedElements, CATEGORY_COLORS } from "@/lib/flow/layout";
import { useFlowStore } from "@/store/flow-store";

const nodeTypes = { custom: CustomNode };

const TRAVERSAL_SEQUENCE = [
  "h-era-kontemporer",
  "h-gerakan-modern",
  "h-runtuh-khilafah",
  "h-sykes-picot-balfour",
  "h-pembaharuan-islam",
  "h-napoleon-mesir",
  "h-nusantara-mataram-gowa",
  "h-nusantara-walisongo",
  "h-nusantara-pasai-malaka",
  "h-mughal-india",
  "h-safawi-persia",
  "h-utsmani-puncak",
  "h-utsmani-konstantinopel",
  "h-kejatuhan-granada",
  "h-mamluk-ainjalut",
  "h-salahuddin-hittin",
  "h-manzikert-salib",
  "h-runtuh-baghdad",
  "h-al-ghazali-ibnu-rusyd",
  "h-fatimiyah-azhar",
  "h-andalusia-kordoba",
  "h-debat-teologi",
  "h-kutubus-sittah",
  "h-4mazhab-fiqh",
  "h-baitul-hikmah-sains",
  "h-perang-talas",
  "h-revolusi-abbasiyah",
  "h-umar-bin-abdulaziz",
  "h-arabisasi-dinar",
  "h-umayyah-ekspansi-timur",
  "h-umayyah-ekspansi-barat",
  "h-karbala",
  "h-amul-jamaah",
  "h-syahid-ali",
  "h-ali-siffin",
  "h-utsman-mushaf",
  "h-reformasi-umar",
  "h-qadisiyyah-jerusalem",
  "h-ekspansi-yarmuk",
  "h-perang-ridda",
  "h-saqifah-abubakar",
  "h-tabuk-hajiwada",
  "h-fathu-makkah",
  "h-mutah",
  "h-surat-raja",
  "h-khaibar",
  "h-hudaibiyyah",
  "h-khandaq",
  "h-bani-nadhir",
  "h-uhud",
  "h-bani-qainuqa",
  "h-badr",
  "h-perubahan-kiblat",
  "h-muakhah-piagam",
  "h-quba-nabawi",
  "h-hijrah-tsur",
  "h-baiat-aqabah",
  "h-isra-miraj",
  "h-tahun-kesedihan",
  "h-boikot-syiib",
  "h-hijrah-habasyah",
  "h-penyiksaan-mekkah",
  "h-dakwah-terbuka",
  "h-dakwah-sembunyi",
  "h-wahyu-pertama",
  "h-pernikahan-khadijah",
  "h-hilf-fudul",
  "h-halimah-saadiyah",
  "h-tahun-gajah",
  "h-jahiliyah-sosial",
  "h-ibrahim-kabah"
];

const TRAVERSAL_STEP_MS = 1100;

function FlowInner() {
  const activeBranch = useFlowStore((s) => s.activeBranch);
  const activeCategories = useFlowStore((s) => s.activeCategories);
  const searchQuery = useFlowStore((s) => s.searchQuery);
  const selectedNodeId = useFlowStore((s) => s.selectedNodeId);
  const timelineTimeValue = useFlowStore((s) => s.timelineTimeValue);
  const setSelectedNode = useFlowStore((s) => s.setSelectedNode);

  const traversalActive = useFlowStore((s) => s.traversalActive);
  const traversalIndex = useFlowStore((s) => s.traversalIndex);
  const traversalNodeId = useFlowStore((s) => s.traversalNodeId);
  const setTraversalIndex = useFlowStore((s) => s.setTraversalIndex);
  const setTraversalNodeId = useFlowStore((s) => s.setTraversalNodeId);
  const stopTraversal = useFlowStore((s) => s.stopTraversal);

  const focusNodeId = useFlowStore((s) => s.focusNodeId);
  const setFocusNode = useFlowStore((s) => s.setFocusNode);

  const { setCenter, getNode } = useReactFlow();
  const traversalTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const filteredNodes = useMemo(() => {
    return nodesData.filter((n) => {
      if (activeBranch === "all") return true;
      if (n.branch === activeBranch) return true;
      return false;
    });
  }, [activeBranch]);

  const filteredEdges = useMemo(() => {
    const visibleIds = new Set(filteredNodes.map((n) => n.id));
    return edgesData.filter((e) => {
      if (activeBranch === "all") {
        return visibleIds.has(e.source) && visibleIds.has(e.target);
      }
      const edgeBranch = e.branch || "all";
      if (edgeBranch === "all") {
        return visibleIds.has(e.source) && visibleIds.has(e.target);
      }
      return (
        edgeBranch === activeBranch &&
        visibleIds.has(e.source) &&
        visibleIds.has(e.target)
      );
    });
  }, [filteredNodes, activeBranch]);

  const decoratedNodes = useMemo(() => {
    return filteredNodes.map((n) => {
      const matchesCategory = activeCategories.has(n.category);
      const matchesSearch =
        !searchQuery ||
        n.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        n.description.toLowerCase().includes(searchQuery.toLowerCase());

      let timelineMatch = false;
      if (timelineTimeValue != null) {
        if (Math.abs(n.timeValue - timelineTimeValue) < 50) timelineMatch = true;
      }

      const isTraversalActiveNode = traversalActive && traversalNodeId === n.id;

      return {
        ...n,
        isDimmed: !matchesCategory || !matchesSearch,
        isHighlighted: timelineMatch || isTraversalActiveNode,
        isSelected: selectedNodeId === n.id,
        isTraversalActive: isTraversalActiveNode,
      };
    });
  }, [
    filteredNodes,
    activeCategories,
    searchQuery,
    timelineTimeValue,
    selectedNodeId,
    traversalActive,
    traversalNodeId,
  ]);

  const rfNodes: Node<ChainNodeData>[] = useMemo(() => {
    return decoratedNodes.map((n) => ({
      id: n.id,
      type: "custom",
      position: { x: 0, y: 0 },
      data: {
        node: n,
      } as unknown as ChainNodeData,
    }));
  }, [decoratedNodes]);

  const rfEdges: Edge[] = useMemo(() => {
    return filteredEdges.map((e) => {
      const isTraversalEdge =
        traversalActive &&
        traversalIndex < TRAVERSAL_SEQUENCE.length - 1 &&
        e.source === TRAVERSAL_SEQUENCE[traversalIndex] &&
        e.target === TRAVERSAL_SEQUENCE[traversalIndex + 1];
      return {
        id: e.id,
        source: e.source,
        target: e.target,
        sourceHandle: "source-bottom",
        targetHandle: "target-top",
        label: e.causalLabel,
        type: "smoothstep",
        animated: isTraversalEdge,
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 16,
          height: 16,
        },
        style: {
          stroke: isTraversalEdge ? "#10b981" : "currentColor",
          strokeWidth: isTraversalEdge ? 2.5 : 1.5,
          opacity: isTraversalEdge ? 1 : 0.5,
        },
        labelStyle: {
          fontSize: 10,
          fill: "currentColor",
          opacity: isTraversalEdge ? 1 : 0.7,
        },
        labelBgStyle: {
          fill: "var(--background)",
          opacity: 0.85,
        },
      };
    });
  }, [filteredEdges, traversalActive, traversalIndex]);

  const [nodes, setNodes, onNodesChange] = useNodesState<Node<ChainNodeData>>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  useEffect(() => {
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
      rfNodes as Node[],
      rfEdges
    );
    setNodes(layoutedNodes as Node<ChainNodeData>[]);
    setEdges(layoutedEdges);
  }, [rfNodes, rfEdges, setNodes, setEdges]);

  useEffect(() => {
    if (focusNodeId) {
      const node = getNode(focusNodeId);
      if (node) {
        setCenter(node.position.x + 130, node.position.y + 40, {
          zoom: 1.2,
          duration: 800,
        });
      }
      setFocusNode(null);
    }
  }, [focusNodeId, getNode, setCenter, setFocusNode]);

  useEffect(() => {
    if (traversalActive) {
      if (traversalIndex < TRAVERSAL_SEQUENCE.length) {
        const nodeId = TRAVERSAL_SEQUENCE[traversalIndex];
        setTraversalNodeId(nodeId);
        const node = getNode(nodeId);
        if (node) {
          setCenter(node.position.x + 130, node.position.y + 40, {
            zoom: 1.1,
            duration: 800,
          });
        }
        traversalTimerRef.current = setTimeout(() => {
          setTraversalIndex(traversalIndex + 1);
        }, TRAVERSAL_STEP_MS);
      } else {
        stopTraversal();
      }
    } else {
      if (traversalTimerRef.current) {
        clearTimeout(traversalTimerRef.current);
      }
      setTraversalNodeId(null);
    }
    return () => {
      if (traversalTimerRef.current) clearTimeout(traversalTimerRef.current);
    };
  }, [
    traversalActive,
    traversalIndex,
    getNode,
    setCenter,
    setTraversalNodeId,
    setTraversalIndex,
    stopTraversal,
  ]);

  const onPaneClick = useCallback(() => {
    setSelectedNode(null);
  }, [setSelectedNode]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onPaneClick={onPaneClick}
      nodeTypes={nodeTypes}
      fitView
      minZoom={0.1}
      maxZoom={2}
      proOptions={{ hideAttribution: true }}
      className="bg-slate-50 dark:bg-slate-950 transition-colors"
    >
      <Background color="currentColor" className="opacity-10" gap={24} size={2} />
      <Controls className="!mb-6 !mr-6 shadow-xl border rounded-lg bg-background" showInteractive={false} />
    </ReactFlow>
  );
}

export function ChainFlowCanvas() {
  return (
    <ReactFlowProvider>
      <FlowInner />
    </ReactFlowProvider>
  );
}
