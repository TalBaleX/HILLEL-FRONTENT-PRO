import React, { useState } from "react";
import Form from "./components/Form/Form.jsx";
import Code from "./components/Code/Code.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Provider } from "react-redux";
import store from "./store/store";
import { Container, Box } from "@mui/material";

const SWAPI = () => {
  const [url, setUrl] = useState("");
  const [subdomain, setSubdomain] = useState("");

  const handleUrlChange = (newUrl) => {
    setUrl(newUrl);
    setSubdomain(newUrl.replace("https://swapi.dev/api/", ""));
  };

  return (
    <Provider store={store}>
      <Container id="container" sx={{ mt: 4 }}>
        <Form
          setUrl={handleUrlChange}
          url={url}
          subdomain={subdomain}
          setSubdomain={setSubdomain}
        />
        {url && (
          <Code
            url={url}
            setUrl={handleUrlChange}
            subdomain={subdomain}
            setSubdomain={setSubdomain}
          />
        )}
        <Footer setUrl={handleUrlChange} />
      </Container>
    </Provider>
  );
};

export default SWAPI;
