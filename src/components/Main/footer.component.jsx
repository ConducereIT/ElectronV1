import React from "react";
import { Button } from "react-bootstrap";

import "./button.styles.css";

export const MainSectionFooter = () => {
  return (
    <>
      <Button className="main-section-footer-button">
        13-14 MAI
        {/* <span className="main-section-footer-span"></span> */}
      </Button>
      <Button className="main-section-footer-button">ETTI, CORP A</Button>
    </>
  );
};
