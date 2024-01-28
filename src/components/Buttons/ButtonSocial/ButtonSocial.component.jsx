import React from "react";
import { Button } from "react-bootstrap";

import "./ButtonSocial.style.css";

const ButtonSocial = ({ text, svg }) => {
  return (
    <>
      <Button
        style={{ background: "transparent", border: "none" }}
        className="button-social-new">
        {text}
        {svg}
      </Button>
    </>
  );
};

export default ButtonSocial;
