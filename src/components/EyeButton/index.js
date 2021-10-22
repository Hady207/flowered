import React from "react";

const EyeButton = ({ onClick }) => {
  return (
    <button className="eye__button" onClick={onClick}>
      <i className="far fa-eye"></i>
    </button>
  );
};

export default EyeButton;
