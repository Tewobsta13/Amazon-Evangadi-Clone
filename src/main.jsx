import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./index.css";
import { initialState, reducer } from "./utility/reducer";
import { DataProvider } from "./Components/DataProvider/DataProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/Amazon-Clone">
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </BrowserRouter>
);
