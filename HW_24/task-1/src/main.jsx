import { createRoot } from "react-dom/client";
import Form from "./Form.jsx";
import Code from "./Code.jsx";
import "./Main.css";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(
  <div id="container">
    <Form />
    <Code />
  </div>
);
