import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { PatternProvider } from "./context/PatternContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PatternProvider>
      <App />
    </PatternProvider>
  </StrictMode>
);
