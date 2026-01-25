import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const root: HTMLElement | null = document.getElementById("root");
if (root === null) {
  throw new Error("Root element not found");
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
