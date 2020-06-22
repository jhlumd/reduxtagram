import React, { cloneElement } from "react";
import { Link } from "react-router";

export default function Main(props) {
  return (
    <div>
      <h1>
        <Link to="/">Reduxtagram</Link>
      </h1>
      {cloneElement(props.children, props)}
    </div>
  );
}
