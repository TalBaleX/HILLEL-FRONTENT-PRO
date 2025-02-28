import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../store/actions";

const Form = ({ setUrl, url }) => {
  const [subdomain, setSubdomain] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (url) {
      const newSubdomain = url.replace("https://swapi.dev/api/", "");
      setSubdomain(newSubdomain);
    }
  }, [url]);

  const submit = () => {
    const fullUrl = `https://swapi.dev/api/${subdomain}`;
    setUrl(fullUrl);
    dispatch(fetchData(fullUrl));
  };

  return (
    <>
      <h1>SWAPI</h1>
      <div className="mb-3">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon3">
            https://swapi.dev/api/
          </span>
          <input
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3 basic-addon4"
            placeholder="people/1/"
            value={subdomain}
            onChange={(e) => setSubdomain(e.target.value)}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={submit}
          >
            Get info
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
