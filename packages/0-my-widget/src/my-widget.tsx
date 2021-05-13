import React, { ReactElement } from "react";
import ReactDOM from "react-dom";

export const MyWidget = (): ReactElement => {
  return <div>Hello from Widget.</div>
}

export function render(container: HTMLElement) {
  ReactDOM.render(<MyWidget />, container);
}

export default MyWidget;
