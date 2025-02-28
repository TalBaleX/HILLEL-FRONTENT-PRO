import React, { useState } from "react";
import Form from "./components/Form/Form.jsx";
import Code from "./components/Code/Code.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./public/Main.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [url, setUrl] = useState("");

  return (
    <div id="container">
      <Form setUrl={setUrl} url={url} />
      {url && <Code url={url} setUrl={setUrl} />}
      <Footer setUrl={setUrl} />
    </div>
  );
};

export default App;
