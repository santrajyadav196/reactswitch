import React from "react";
import "./secondrow.css";

import Item from "./item";

export default function secondrow() {
  return (
    <div className="mt-1">
      <div className="col d-flex  flex-wrap ml-3">
        <Item /> <Item /> <Item />
      </div>
    </div>
  );
}
