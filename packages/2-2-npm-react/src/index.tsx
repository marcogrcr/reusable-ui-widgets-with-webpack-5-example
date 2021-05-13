import React, { ReactElement } from "react";
import { render } from "react-dom";
import { MyWidget, HelloWidget } from "my-widget";

const App = (): ReactElement => {
  return (
    <div>
      <h1>2.2. npm (react)</h1>
      <MyWidget />
      <HelloWidget name="npm-react" />
    </div>
  );
};

render(<App />, document.getElementById("app-container"));
