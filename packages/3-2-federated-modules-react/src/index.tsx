import React, { Fragment, lazy, ReactElement, Suspense } from "react";
import { render } from "react-dom";

const MyWidget = lazy(() => import("my-widget/my-widget"));
const HelloWidget = lazy(() => import("my-widget/hello-widget"));

const App = (): ReactElement => {
  return (
    <Fragment>
      <h1>3.2. federated modules (react)</h1>
      <Suspense fallback="Loading...">
        <MyWidget />
      </Suspense>
      <Suspense fallback="Loading...">
        <HelloWidget name="federated-modules-react" />
      </Suspense>
    </Fragment>
  );
};

render(<App />, document.getElementById("app-container"));
