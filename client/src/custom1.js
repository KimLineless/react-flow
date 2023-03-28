import React, { useCallback, useState } from "react";
import ReactFlow, { useNodesState, useEdgesState, addEdge } from "reactflow";
import "reactflow/dist/style.css";
import Modal from "react-modal";
import CustomEdge from "./CustomEdge";
import {
  initialNodes,
  getNodeStyle,
  getNodeStyle2,
} from "./components/Nodes.js";
import initialEdges from "./components/Edges.js";

const edgeTypes = {
  custom: CustomEdge,
};

const EdgesFlow = props => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [modalOpen, setModalOpen] = useState(false);
  const [nodeToRemove, setNodeToRemove] = useState(null);

  const onConnect = useCallback(
    params => setEdges(eds => addEdge(params, eds)),
    [],
  );

  const removeNodeAndDescendants = nodeId => {
    setNodes(nodes => nodes.filter(n => n.id !== nodeId));
    setEdges(edges =>
      edges.filter(e => e.source !== nodeId && e.target !== nodeId),
    );
    const children = edges.filter(e => e.source === nodeId).map(e => e.target);
    children.forEach(childId => {
      removeNodeAndDescendants(childId);
    });
  };

  const handleNodeContextMenu = (event, node) => {
    event.preventDefault();
    setNodeToRemove(node.id);
    setModalOpen(true);
  };

  const handleNodeRemoveConfirm = () => {
    // 삭제 대상 노드와 연결된 edge들을 찾아서 삭제
    const connectedEdges = edges.filter(edge => {
      return edge.source === nodeToRemove || edge.target === nodeToRemove;
    });
    const updatedEdges = edges.filter(edge => !connectedEdges.includes(edge));

    // 삭제 대상 노드와 자식 노드들을 찾아서 삭제
    removeNodeAndDescendants(nodeToRemove);

    setEdges(updatedEdges);
    setNodeToRemove(null);
    setModalOpen(false);
  };

  return (
    <>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        snapToGrid={true}
        edgeTypes={edgeTypes}
        fitView
        elements={initialNodes}
        onNodeContextMenu={handleNodeContextMenu}
      ></ReactFlow>
      <Modal
        isOpen={modalOpen}
        style={{
          content: {
            width: "400px",
            height: "200px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <h2>이 노드를 삭제하시겠습니까?</h2>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button onClick={handleNodeRemoveConfirm}>네</button>
          <button onClick={() => setModalOpen(false)}>아니요</button>
        </div>
      </Modal>
    </>
  );
};

export { EdgesFlow };
