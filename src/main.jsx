import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Providers from "./components/templates/Providers.jsx";
import Router from "./routes/Router.jsx";
import "./styles/index.css";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Providers>
      <Router />
    </Providers>
  </StrictMode>
);
