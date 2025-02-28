import React from "react";

const Footer = ({ setUrl }) => {
  const clear = () => {
    setUrl("");
  };

  return (
    <footer>
      <button type="button" className="btn btn-warning" onClick={clear}>
        Clear
      </button>
    </footer>
  );
};

export default Footer;
