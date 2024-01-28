import React from "react";
import { Card } from "react-bootstrap";
import "./Partner.style.css";

export const Partner = ({ img }) => {
  return (
    <Card className="partner-card">
      <Card.Img className="partner-img" src={img}></Card.Img>
    </Card>
  );
};
