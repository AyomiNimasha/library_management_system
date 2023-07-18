import React from "react";
import ReactDOM from "react-dom/client";
import "./Index.css";
import { AppRoutes } from "./routes/AppRoutes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);