import "./global.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");

if (container) {
  // Use window to persist the root during HMR reloads in development
  const global = window as any;
  
  if (!global._root) {
    global._root = createRoot(container);
  }
  
  global._root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
