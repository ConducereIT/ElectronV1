import React from "react";
import { Card } from "react-bootstrap";

import "./Section.style.css";

const Section = (props) => {
  const {
    cardClass,
    cardBodyClass,
    cardTextClass,
    cardTitleClass,
    cardFooterClass,
    title,
    id,
    text,
    footerIsActive,
    footerSection,
  } = props;

  return (
    <Card className={`section-class ${cardClass}`} id={id}>
      <Card.Body className={`section-body-class ${cardBodyClass}`}>
        <Card.Title className={`section-title-class ${cardTitleClass}`}>
          {title}
        </Card.Title>
        <Card.Text className={`${cardTextClass} section-text-class`}>
          {text}
        </Card.Text>
        {props.children}
      </Card.Body>
      {footerIsActive ? (
        <Card.Footer className={`section-footer-class ${cardFooterClass}`}>
          {footerSection}
        </Card.Footer>
      ) : (
        <></>
      )}
    </Card>
  );
};

export default Section;
