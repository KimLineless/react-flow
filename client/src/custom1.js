import React, { useCallback, useState } from "react";
import ReactFlow, { useNodesState, useEdgesState, addEdge } from "reactflow";
import "reactflow/dist/style.css";
import Cloud from "./img/CLOUDL4_1_D.png";
import Gw from "./img/gw_d.png";
import Vpn from "./img/vpn_d.png";
import Switch from "./img/switch_d.png";
import Server from "./img/server_d.png";
import Sensor from "./img/sen_d.png";
import Ap from "./img/ap_d.png";
import CustomEdge from "./CustomEdge";
import vis from "vis";

let initialNodes = [
  {
    id: "node-1",
    type: "input",
    data: { label: "ICT L4 switch" },
    position: { x: 0, y: -92 },
    style: getNodeStyle(Cloud),
  },
  {
    id: "node-2",
    data: { label: "GATEWAY" },
    position: { x: 0, y: 100 },
    sourcePosition: "right",
    style: getNodeStyle(Gw, "50%,80%"),
  },
  {
    id: "node-2a",
    data: { label: "방화벽" },
    position: { x: 120, y: 200 },
    style: getNodeStyle(Vpn),
  },
  {
    id: "node-2a-1",
    data: { label: "l3 switch" },
    position: { x: 120, y: 330 },
    style: getNodeStyle(Switch, "50%,80%"),
  },
  {
    id: "node-2a-2",
    data: { label: "l2 switch" },
    position: { x: 120, y: 450 },
    style: getNodeStyle(Switch, "50%,80%"),
  },
  {
    id: "node-2a-3",
    data: { label: "server1" },
    position: { x: 40, y: 650 },
    style: getNodeStyle(Server),
  },
  {
    id: "node-2a-4",
    data: { label: "server2" },
    position: { x: 200, y: 650 },
    style: getNodeStyle(Server),
  },
  {
    id: "node-3a",
    data: { label: "AP1" },
    position: { x: 500, y: -92 },
    targetPosition: "left",
    sourcePosition: "right",
    style: getNodeStyle(Ap),
  },
  {
    id: "node-3a-1",
    data: { label: "센서1" },
    position: { x: 700, y: -167 },
    targetPosition: "left",
    style: getNodeStyle2(Sensor),
  },
  {
    id: "node-3a-2",
    data: { label: "센서2" },
    position: { x: 700, y: -77 },
    targetPosition: "left",
    style: getNodeStyle2(Sensor),
  },
  {
    id: "node-3a-3",
    data: { label: "sensor3" },
    position: { x: 700, y: 17 },
    targetPosition: "left",
    style: getNodeStyle2(Sensor),
  },
  {
    id: "node-3b",
    data: { label: "AP2" },
    position: { x: 500, y: 208 },
    targetPosition: "left",
    sourcePosition: "right",
    style: getNodeStyle(Ap),
  },
  {
    id: "node-3b-1",
    data: { label: "sensor4" },
    position: { x: 700, y: 133.4 },
    targetPosition: "left",
    style: getNodeStyle2(Sensor),
  },
  {
    id: "node-3b-2",
    data: { label: "sensor5" },
    position: { x: 700, y: 223.4 },
    targetPosition: "left",
    style: getNodeStyle2(Sensor),
  },
  {
    id: "node-3b-3",
    data: { label: "sensor6" },
    position: { x: 700, y: 313.4 },
    targetPosition: "left",
    style: getNodeStyle2(Sensor),
  },
  {
    id: "node-3c",
    data: { label: "AP3" },
    position: { x: 500, y: 508 },
    targetPosition: "left",
    sourcePosition: "right",
    style: getNodeStyle(Ap),
  },
  {
    id: "node-3c-1",
    data: { label: "sensor7" },
    position: { x: 700, y: 433.3 },
    targetPosition: "left",
    style: getNodeStyle2(Sensor),
  },
  {
    id: "node-3c-2",
    data: { label: "sensor8" },
    position: { x: 700, y: 523.3 },
    targetPosition: "left",
    style: getNodeStyle2(Sensor),
  },
  {
    id: "node-3c-3",
    data: { label: "sensor9" },
    position: { x: 700, y: 613.3 },
    targetPosition: "left",
    style: getNodeStyle2(Sensor),
  },
];

const edgeStyle = {
  stroke: "#0AA596",
};

const initialEdges = [
  {
    id: "edge-1-2",
    source: "node-1",
    target: "node-2",
    className: "normal-edge",
    style: edgeStyle,
  },
  {
    id: "edge-2-2",
    source: "node-2",
    target: "node-2a",
    type: "step",
    style: edgeStyle,
  },
  {
    id: "edge-2-2a",
    source: "node-2a",
    target: "node-2a-1",
    type: "step",
    style: edgeStyle,
  },
  {
    id: "edge-2-2b",
    source: "node-2a-1",
    target: "node-2a-2",
    type: "step",
    style: edgeStyle,
  },
  {
    id: "edge-2-2c",
    source: "node-2a-2",
    target: "node-2a-3",
    type: "step",
    style: edgeStyle,
  },
  {
    id: "edge-2-2d",
    source: "node-2a-2",
    target: "node-2a-4",
    type: "step",
    style: edgeStyle,
  },
  {
    id: "edge-2-3",
    source: "node-2",
    target: "node-3a",
    type: "step",
    style: edgeStyle,
  },
  {
    id: "edge-3-1",
    source: "node-3a",
    target: "node-3a-1",
    type: "step",
    style: edgeStyle,
  },
  {
    id: "edge-3-2",
    source: "node-3a",
    target: "node-3a-2",
    type: "step",
    style: edgeStyle,
  },
  {
    id: "edge-3-3",
    source: "node-3a",
    target: "node-3a-3",
    type: "step",
    style: edgeStyle,
  },
  {
    id: "edge-2-4",
    source: "node-2",
    target: "node-3b",
    type: "step",
    style: edgeStyle,
  },
  {
    id: "edge-3b-1",
    source: "node-3b",
    target: "node-3b-1",
    type: "step",
    style: edgeStyle,
  },
  {
    id: "edge-3b-2",
    source: "node-3b",
    target: "node-3b-2",
    type: "step",
    style: edgeStyle,
  },
  {
    id: "edge-3b-3",
    source: "node-3b",
    target: "node-3b-3",
    type: "step",
    style: edgeStyle,
  },
  {
    id: "edge-2-5",
    source: "node-2",
    target: "node-3c",
    type: "step",
    style: edgeStyle,
  },
  {
    id: "edge-3c-1",
    source: "node-3c",
    target: "node-3c-1",
    type: "step",
    style: edgeStyle,
  },
  {
    id: "edge-3c-2",
    source: "node-3c",
    target: "node-3c-2",
    type: "step",
    style: edgeStyle,
  },
  {
    id: "edge-3c-3",
    source: "node-3c",
    target: "node-3c-3",
    type: "step",
    style: edgeStyle,
  },
];

const edgeTypes = {
  custom: CustomEdge,
};

function getNodeStyle(backgroundImage, backgroundPosition = "50%,50%") {
  return {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    width: 80,
    height: 80,
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "noWrap",
    paddingTop: "7%",
    fontWeight: "bold",
    color: "#111",
    border: "none",
    backgroundPosition: backgroundPosition,
  };
}

function getNodeStyle2(backgroundImage, backgroundPosition = "50%,50%") {
  return {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    whiteSpace: "noWrap",
    width: 50,
    height: 50,
    padding: "10px",
    display: "flex",
    paddingTop: "5%",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    color: "#111",
    border: "none",
    backgroundPosition: backgroundPosition,
  };
}

const EdgesFlow = props => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    params => setEdges(eds => addEdge(params, eds)),
    [],
  );

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
      ></ReactFlow>
    </>
  );
};

export { EdgesFlow, initialNodes, initialEdges };
