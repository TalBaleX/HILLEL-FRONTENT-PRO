import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "/src/public/main.css";
import RouterConfig from "/src/router/RouterConfig.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterConfig />
  </StrictMode>
);
