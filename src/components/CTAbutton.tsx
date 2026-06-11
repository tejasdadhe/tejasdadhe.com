import React from "react";
import type { CtaProps, CtaType } from "../types.ts";
import "../styles/cta-button.css";

const getBackgroundColor = (type: CtaType) => {
  const colors = {
    primary: "#242424",
    secondary: "#4e5340",
    transparent: "transparent"
  };

  return colors[type];
};

const CTAbutton = (props: CtaProps) => {
  const { title, type, icon } = props;
  const style = {
    backgroundColor: getBackgroundColor(type),
    borderColor: getBackgroundColor(type),
    color: type == "transparent" ? "black" : "white"
  };
  return (
    <button className='cta-button' style={style}>
      {title} {icon}
    </button>
  );
};

export default CTAbutton;

