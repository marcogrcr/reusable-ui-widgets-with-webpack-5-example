import("my-widget/my-widget").then(({ render }) => {
  render(document.getElementById("my-widget-container")!);
});

import("my-widget/hello-widget").then(({ render }) => {
  render(document.getElementById("hello-widget-container")!, {
    name: "federated-modules-no-react",
  });
});
