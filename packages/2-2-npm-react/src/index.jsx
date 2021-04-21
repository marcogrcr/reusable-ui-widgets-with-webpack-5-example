import React from "react";
import { render } from "react-dom";
import { MyWidget } from "my-widget";

const App = () => {
  return <div>
    <h1>2.2. npm (react)</h1>
    <MyWidget />
  </div>
}

render(<App />, document.getElementById("app-container"));
