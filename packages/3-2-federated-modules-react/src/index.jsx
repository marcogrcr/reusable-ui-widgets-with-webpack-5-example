import React, { Fragment, lazy, Suspense } from "react";
import { render } from "react-dom";

const MyWidget = lazy(() => import("my_widget_remote").then(({ MyWidget }) => ({ default: MyWidget })));

const App = () => {
  return (
    <Fragment>
      <h1>3.2. federated modules (react)</h1>
      <Suspense fallback="Loading...">
        <MyWidget />
      </Suspense>
    </Fragment>
  );
};

render(<App />, document.getElementById("app-container"));
