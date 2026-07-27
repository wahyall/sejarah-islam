"use client";

import { useMemo, useCallback, useEffect, useRef } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  Controls,
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
import { CLUSTER_GROUPS, getClusterForNode } from "@/data/cluster-nodes";
import { CustomNode, type ChainNodeData } from "./CustomNode";
import { ClusterNode, type ClusterNodeData } from "./ClusterNode";
import { ClusterBreadcrumb } from "./ClusterBreadcrumb";
import { getLayoutedElements } from "@/lib/flow/layout";
import { useFlowStore } from "@/store/flow-store";

const nodeTypes = {
  custom: CustomNode,
  cluster: ClusterNode,
};

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
  "h-perang-nahrawan",
  "h-ali-siffin",
  "h-perang-jamal",
  "h-pemindahan-ibukota-kufah",
  "h-kekhalifahan-ali-baiat",
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

  const expandedClusterId = useFlowStore((s) => s.expandedClusterId);
  const setExpandedClusterId = useFlowStore((s) => s.setExpandedClusterId);

  const traversalActive = useFlowStore((s) => s.traversalActive);
  const traversalIndex = useFlowStore((s) => s.traversalIndex);
  const traversalNodeId = useFlowStore((s) => s.traversalNodeId);
  const setTraversalIndex = useFlowStore((s) => s.setTraversalIndex);
  const setTraversalNodeId = useFlowStore((s) => s.setTraversalNodeId);
  const stopTraversal = useFlowStore((s) => s.stopTraversal);

  const focusNodeId = useFlowStore((s) => s.focusNodeId);
  const setFocusNode = useFlowStore((s) => s.setFocusNode);

  const { setCenter, getNode, fitView } = useReactFlow();
  const traversalTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto expand cluster if focusNodeId or traversal is activated
  useEffect(() => {
    if (focusNodeId) {
      const nodeObj = nodesData.find((n) => n.id === focusNodeId);
      if (nodeObj) {
        const targetCluster = getClusterForNode(nodeObj.id, nodeObj.category);
        if (targetCluster && expandedClusterId !== targetCluster.id && expandedClusterId !== "all") {
          setExpandedClusterId(targetCluster.id);
        }
      }
    }
  }, [focusNodeId, expandedClusterId, setExpandedClusterId]);

  // Build nodes and edges based on mode: Macro Cluster vs Single Cluster Drill-Down vs Full 114+ Nodes Graph
  const { rfNodes, rfEdges } = useMemo(() => {
    if (expandedClusterId === null) {
      // OVERVIEW MODE: Render 9 Cluster Nodes in a 3-column / 3-row grid layout
      const clusterNodes: Node[] = CLUSTER_GROUPS.map((cluster, idx) => {
        const col = idx % 3;
        const row = Math.floor(idx / 3);
        const x = col * 580;
        const y = row * 410;

        return {
          id: cluster.id,
          type: "cluster",
          position: { x, y },
          data: {
            cluster,
            eventCount: cluster.nodeIds.length,
            isExpanded: false,
          } as ClusterNodeData,
        };
      });

      // Connecting edges between sequential clusters
      const clusterEdges: Edge[] = [];
      for (let i = 0; i < CLUSTER_GROUPS.length - 1; i++) {
        const src = CLUSTER_GROUPS[i];
        const tgt = CLUSTER_GROUPS[i + 1];
        clusterEdges.push({
          id: `edge-${src.id}-${tgt.id}`,
          source: src.id,
          target: tgt.id,
          type: "smoothstep",
          animated: true,
          style: { stroke: src.color, strokeWidth: 3, opacity: 0.8 },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 18,
            height: 18,
            color: src.color,
          },
        });
      }

      return { rfNodes: clusterNodes, rfEdges: clusterEdges };
    } else {
      // DRILL-DOWN OR FULL GRAPH MODE
      const isAllMode = expandedClusterId === "all";
      const activeCluster = !isAllMode ? CLUSTER_GROUPS.find((c) => c.id === expandedClusterId) : null;
      const activeNodeIdSet = new Set(activeCluster?.nodeIds || []);

      const filteredChildNodes = nodesData.filter((n) => {
        if (!isAllMode && activeNodeIdSet.size > 0) return activeNodeIdSet.has(n.id);
        if (activeBranch === "all") return true;
        return n.branch === activeBranch;
      });

      const decoratedNodes = filteredChildNodes.map((n) => {
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
          isDimmed: (!matchesCategory || !matchesSearch) && searchQuery !== "",
          isHighlighted: timelineMatch || isTraversalActiveNode,
          isSelected: selectedNodeId === n.id,
          isTraversalActive: isTraversalActiveNode,
        };
      });

      const detailNodes: Node<ChainNodeData>[] = decoratedNodes.map((n) => ({
        id: n.id,
        type: "custom",
        position: { x: 0, y: 0 },
        data: {
          node: n,
        } as unknown as ChainNodeData,
      }));

      const visibleChildIds = new Set(detailNodes.map((n) => n.id));

      const detailEdges: Edge[] = edgesData
        .filter((e) => visibleChildIds.has(e.source) && visibleChildIds.has(e.target))
        .map((e) => {
          const isTraversalEdge =
            traversalActive &&
            traversalIndex < TRAVERSAL_SEQUENCE.length - 1 &&
            e.source === TRAVERSAL_SEQUENCE[traversalIndex] &&
            e.target === TRAVERSAL_SEQUENCE[traversalIndex + 1];

          const isCrossEdge =
            e.id.includes("cross") ||
            (e.source.startsWith("h-") && !e.source.startsWith("h-bm-") && e.target.startsWith("h-bm-"));

          return {
            id: e.id,
            source: e.source,
            target: e.target,
            sourceHandle: "source-bottom",
            targetHandle: "target-top",
            label: e.causalLabel,
            type: "smoothstep",
            animated: isTraversalEdge || isCrossEdge,
            markerEnd: {
              type: MarkerType.ArrowClosed,
              width: 16,
              height: 16,
              color: isCrossEdge ? "#0284c7" : isTraversalEdge ? "#10b981" : "#64748b",
            },
            style: {
              stroke: isTraversalEdge ? "#10b981" : isCrossEdge ? "#0284c7" : "currentColor",
              strokeWidth: isTraversalEdge ? 2.5 : isCrossEdge ? 2 : 1.5,
              opacity: isTraversalEdge ? 1 : isCrossEdge ? 0.85 : 0.6,
            },
          };
        });

      return { rfNodes: detailNodes, rfEdges: detailEdges };
    }
  }, [
    expandedClusterId,
    activeBranch,
    activeCategories,
    searchQuery,
    timelineTimeValue,
    selectedNodeId,
    traversalActive,
    traversalNodeId,
    traversalIndex,
  ]);

  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  useEffect(() => {
    if (expandedClusterId === null) {
      setNodes(rfNodes);
      setEdges(rfEdges);
      setTimeout(() => fitView({ duration: 600, padding: 0.2 }), 50);
    } else {
      const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
        rfNodes as Node[],
        rfEdges
      );
      setNodes(layoutedNodes);
      setEdges(layoutedEdges);
    }
  }, [rfNodes, rfEdges, expandedClusterId, setNodes, setEdges, fitView]);

  useEffect(() => {
    if (focusNodeId) {
      // Delay slightly to ensure nodes are placed in layout
      const timer = setTimeout(() => {
        const node = getNode(focusNodeId);
        if (node) {
          setCenter(node.position.x + 190, node.position.y + 55, {
            zoom: 1.1,
            duration: 700,
          });
        }
        setFocusNode(null);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [focusNodeId, getNode, setCenter, setFocusNode]);

  const onNodeClick = useCallback(
    (_event: React.MouseEvent, node: Node) => {
      if (node.type === "cluster") {
        const clusterData = node.data as any;
        const clusterId = clusterData?.cluster?.id;
        if (clusterId) {
          setExpandedClusterId(clusterId);
          setTimeout(() => {
            setCenter(node.position.x + 170, node.position.y + 80, {
              zoom: 0.85,
              duration: 700,
            });
          }, 120);
        }
      } else {
        setSelectedNode(node.id);
        setFocusNode(node.id);
      }
    },
    [setSelectedNode, setExpandedClusterId, setFocusNode, setCenter]
  );

  const onPaneClick = useCallback(() => {
    setSelectedNode(null);
  }, [setSelectedNode]);

  return (
    <div className="relative w-full h-full">
      <ClusterBreadcrumb />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.05}
        maxZoom={2.2}
        proOptions={{ hideAttribution: true }}
        className="bg-slate-50 dark:bg-slate-950 transition-colors"
      >
        <Background color="currentColor" className="opacity-10" gap={24} size={2} />
        <Controls className="!mb-6 !mr-6 shadow-xl border rounded-lg bg-background" showInteractive={true} />
      </ReactFlow>
    </div>
  );
}

export function ChainFlowCanvas() {
  return (
    <ReactFlowProvider>
      <FlowInner />
    </ReactFlowProvider>
  );
}
