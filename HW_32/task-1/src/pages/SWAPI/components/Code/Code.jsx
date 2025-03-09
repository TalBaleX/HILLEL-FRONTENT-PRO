import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../store/thunks";
import { Box, Button, CircularProgress, Typography } from "@mui/material";

const Code = ({ url, setUrl, setSubdomain }) => {
  const loading = useSelector((state) => state.data.loading);
  const data = useSelector((state) => state.data.data);
  const error = useSelector((state) => state.data.error);
  const dispatch = useDispatch();

  console.log("Loading State:", loading);
  console.log("Error State:", error);
  console.log("Component Data:", data);

  const search = (path) => {
    const fullUrl = `https://swapi.dev/api/${path}`;
    setUrl(fullUrl);
    setSubdomain(path);
    dispatch(fetchData(fullUrl));
  };

  const getPathParts = (url) => {
    if (!url) return [];
    const baseUrl = "https://swapi.dev/api/";
    return url.replace(baseUrl, "").split("/").filter(Boolean);
  };

  return (
    <Box id="code" sx={{ mt: 2 }}>
      {loading && <CircularProgress />}
      {error && (
        <Typography variant="body1" color="error">
          Error: {error}
        </Typography>
      )}
      {data && (
        <>
          <Box>
            {getPathParts(url).map((part, index, arr) => (
              <Button
                key={index}
                variant="contained"
                color="secondary"
                onClick={() => search(arr.slice(0, index + 1).join("/"))}
                sx={{ mr: 1, mb: 1 }}
              >
                {part}
              </Button>
            ))}
          </Box>
          <Box mt={2}>
            <pre>
              <code>{JSON.stringify(data, null, 2)}</code>
            </pre>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Code;
