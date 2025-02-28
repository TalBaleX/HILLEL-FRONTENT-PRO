import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../store/actions";
import "./Code.css";

const Code = ({ url, setUrl }) => {
  const { loading, data, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  const search = (path) => {
    const fullUrl = `https://swapi.dev/api/${path}`;
    setUrl(fullUrl);
    dispatch(fetchData(fullUrl));
  };

  const getPathParts = (url) => {
    if (!url) return [];
    const baseUrl = "https://swapi.dev/api/";
    return url.replace(baseUrl, "").split("/").filter(Boolean);
  };

  return (
    <div id="code">
      {loading && <div className="loader">Loading...</div>}
      {error && <div className="error">Error: {error}</div>}
      {data && (
        <>
          <span>
            {getPathParts(url).map((part, index, arr) => (
              <button
                key={index}
                type="button"
                className="btn btn-secondary"
                onClick={() => search(arr.slice(0, index + 1).join("/"))}
              >
                {part}
              </button>
            ))}
          </span>
          <br />
          <br />
          <pre>
            <code>{JSON.stringify(data, null, 2)}</code>
          </pre>
        </>
      )}
    </div>
  );
};

export default Code;
