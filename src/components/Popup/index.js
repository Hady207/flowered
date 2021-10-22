import React from "react";

const Popup = ({ onClick, name }) => {
  return <div onClick={onClick}>{name.common}</div>;
};

export default Popup;
