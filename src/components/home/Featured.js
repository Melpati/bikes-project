import React from "react";
import Item from "./Item";

function Featured() {
  return (
    <div className="featured-sec">
      <div className="featured-heading">
        <h3>FEATURED PRODUCTS</h3>
      </div>
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
}

export default Featured;
