import * as MyWidgetType from "my-widget";

declare global {
  const MyWidget: typeof MyWidgetType;

  interface Window {
    readonly MyWidget: typeof MyWidgetType;
  }
}
