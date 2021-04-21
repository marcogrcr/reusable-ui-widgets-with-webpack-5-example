import React from "react";
import ReactDOM from "react-dom";

export const MyWidget = () => {
  return <div>Hello from Widget.</div>
}

export function render(container) {
  ReactDOM.render(<MyWidget />, container);
}

export default MyWidget;
