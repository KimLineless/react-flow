import React from "react";

const CustomNode = ({ node, children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${node.data.img})`,
        width: "100px",
        height: "100px",
        backgroundSize: "cover",
      }}
    >
      {children}
    </div>
  );
};

export default CustomNode;
