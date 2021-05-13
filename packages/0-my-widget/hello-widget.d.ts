import { ReactElement } from "react";
export interface HelloWidgetProps {
    readonly name: string;
}
export declare const HelloWidget: ({ name }: HelloWidgetProps) => ReactElement;
export declare function render(container: HTMLElement, props: HelloWidgetProps): void;
export default HelloWidget;
