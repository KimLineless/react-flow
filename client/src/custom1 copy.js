// import React, { useCallback } from "react";
// import ReactFlow, {
//   useNodesState,
//   useEdgesState,
//   addEdge,
//   Controls,
//   Background,
//   MarkerType,
// } from "reactflow";
// import "reactflow/dist/style.css";

// import CustomEdge from "./CustomEdge";

// const initialNodes = [
//   {
//     id: "node-1",
//     type: "input",
//     data: { label: "ICT L4 switch" },
//     position: { x: 0, y: 0 },
//   },
//   {
//     id: "node-2",
//     data: { label: "GATEWAY" },
//     position: { x: 0, y: 100 },
//     outputs: [
//       {
//         id: "output-2a",
//         position: "bottom",
//       },
//       {
//         id: "output-2b",
//         position: "right",
//       },
//     ],
//   },
//   { id: "node-2a", data: { label: "방화벽" }, position: { x: 0, y: 200 } },
//   { id: "node-2a-1", data: { label: "l3 switch" }, position: { x: 0, y: 270 } },
//   { id: "node-2a-2", data: { label: "l2 switch" }, position: { x: 0, y: 340 } },
//   {
//     id: "node-2a-3",
//     data: { label: "server1" },
//     position: { x: -100, y: 450 },
//   },
//   { id: "node-2a-4", data: { label: "server2" }, position: { x: 100, y: 450 } },
//   { id: "node-3a", data: { label: "AP1" }, position: { x: 450, y: 200 } },
//   { id: "node-3a-1", data: { label: "센서1" }, position: { x: 250, y: 290 } },
//   { id: "node-3a-2", data: { label: "센서2" }, position: { x: 450, y: 290 } },
//   { id: "node-3a-3", data: { label: "sensor3" }, position: { x: 650, y: 290 } },
//   { id: "node-3b", data: { label: "AP2" }, position: { x: 850, y: 200 } },
//   { id: "node-3c", data: { label: "AP3" }, position: { x: 1050, y: 200 } },
// ];

// const initialEdges = [
//   {
//     id: "edge-1-2",
//     source: "node-1",
//     target: "node-2",
//     className: "normal-edge",
//   },
//   {
//     id: "edge-2-2",
//     source: "node-2",
//     target: "node-2a",
//     type: "step",
//   },
//   {
//     id: "edge-2-2a",
//     source: "node-2a",
//     target: "node-2a-1",
//     type: "step",
//   },
//   {
//     id: "edge-2-2B",
//     source: "node-2a-1",
//     target: "node-2a-2",
//     type: "step",
//   },
//   {
//     id: "edge-2-2c",
//     source: "node-2a-2",
//     target: "node-2a-3",
//     type: "step",
//   },
//   {
//     id: "edge-2-2d",
//     source: "node-2a-2",
//     target: "node-2a-4",
//     type: "step",
//   },
//   {
//     id: "edge-2-3",
//     source: "node-2",
//     target: "node-3a",
//     type: "step",
//   },
//   {
//     id: "edge-3-1",
//     source: "node-3a",
//     target: "node-3a-1",
//     type: "step",
//   },
//   {
//     id: "edge-3-2",
//     source: "node-3a",
//     target: "node-3a-2",
//     type: "step",
//   },
//   {
//     id: "edge-3-3",
//     source: "node-3a",
//     target: "node-3a-3",
//     type: "step",
//   },
//   {
//     id: "edge-2-4",
//     source: "node-2",
//     target: "node-3b",
//     type: "step",
//   },
//   {
//     id: "edge-2-5",
//     source: "node-2",
//     target: "node-3c",
//     type: "step",
//   },
// ];

// const edgeTypes = {
//   custom: CustomEdge,
// };

// const EdgesFlow = () => {
//   const [nodes, , onNodesChange] = useNodesState(initialNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

//   const onConnect = useCallback(
//     params => setEdges(eds => addEdge(params, eds)),
//     [],
//   );

//   return (
//     <ReactFlow
//       nodes={nodes}
//       edges={edges}
//       onNodesChange={onNodesChange}
//       onEdgesChange={onEdgesChange}
//       onConnect={onConnect}
//       snapToGrid={true}
//       edgeTypes={edgeTypes}
//       fitView
//     >
//       <Controls />
//       <Background />
//     </ReactFlow>
//   );
// };

// export default EdgesFlow;
