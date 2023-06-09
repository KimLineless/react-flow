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

export default initialEdges;
