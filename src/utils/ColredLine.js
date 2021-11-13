import React from "react";

export default function ColredLine() {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 1,
      }}
    />
  );
  return <ColoredLine />;
}
