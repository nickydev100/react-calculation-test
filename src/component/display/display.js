import React from "react";
import PropTypes from "prop-types";

import "./display.scss";

function Display ({value}){
  return (
    <div className="component-display">
      <div>{value}</div>
    </div>
  ); 
}

Display.propTypes = {
  value: PropTypes.string,
}

export { Display }
