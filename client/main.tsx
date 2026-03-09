import "./global.css";
import React from "react";
import { createRoot, Root } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");

if (container) {
  // Use a global key to persist the root across HMR reloads
  const global = window as any;
  const rootKey = "_growlify_react_root";
  
  let root: Root;
  
  if (!global[rootKey]) {
    root = createRoot(container);
    global[rootKey] = root;
  } else {
    root = global[rootKey];
  }
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
