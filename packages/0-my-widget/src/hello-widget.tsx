import React, { ReactElement } from "react";
import ReactDOM from "react-dom";

export interface HelloWidgetProps {
  readonly name: string;
}

export const HelloWidget = ({ name }: HelloWidgetProps): ReactElement => {
  return <div>Hello {name}!</div>
}

export function render(container: HTMLElement, props: HelloWidgetProps) {
  ReactDOM.render(<HelloWidget {...props} />, container);
}

export default HelloWidget;
