import React from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../store/thunks";
import { Box, TextField, Button, Typography } from "@mui/material";

const Form = ({ setUrl, url, subdomain, setSubdomain }) => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const fullUrl = `https://swapi.dev/api/${subdomain}`;
    setUrl(fullUrl);
    dispatch(fetchData(fullUrl));
  };

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        SWAPI
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1" sx={{ mr: 1 }}>
            https://swapi.dev/api/
          </Typography>
          <TextField
            variant="outlined"
            placeholder="people/1/"
            value={subdomain}
            onChange={(e) => setSubdomain(e.target.value)}
            sx={{ flexGrow: 1, mr: 1 }}
          />
          <Button variant="contained" color="primary" type="submit">
            Get info
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Form;
