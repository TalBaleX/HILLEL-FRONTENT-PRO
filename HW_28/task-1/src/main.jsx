import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Todos from "./components/Todos/Todos.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container">
      <Todos />
    </div>
  </StrictMode>
);
