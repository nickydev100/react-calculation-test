import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

function Button ({name, orange, wide, blue, clickHandler}) {  
  const handleClick = () => {
    clickHandler(name);
  };
  
  const className = [
    "component-button",
    orange ? "orange" : "",
    wide ? "wide" : "",
    blue ? "blue" : "",
  ];

  return (
    <div className={className.join(" ").trim()}>
      <button onClick={handleClick}>{name}</button>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  orange: PropTypes.bool,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
}

export { Button }
