import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Context from "./context";

function Render() {
  return (
    <React.StrictMode>
      <Context.Provider value={"just checking working this or no!"}>
        <App />
      </Context.Provider>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Render />);
