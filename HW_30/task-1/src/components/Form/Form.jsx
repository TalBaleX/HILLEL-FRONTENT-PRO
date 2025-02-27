import React from "react";
class Form extends React.Component {
  render() {
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
            ></input>
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Get info
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Form;
