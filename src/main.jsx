import React from "react";
import ReactDOM from "react-dom/client";
import { reducer, initialState } from "./utility/reducer";

import App from "./App";
import DataProvider from "./components/DataProvider/DataProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </React.StrictMode>
);
