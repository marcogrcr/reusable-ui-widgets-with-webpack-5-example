import { renderMyWidget, renderHelloWidget } from "my-widget";

renderMyWidget(document.getElementById("my-widget-container")!);
renderHelloWidget(document.getElementById("hello-widget-container")!, {
  name: "npm-no-react",
});
