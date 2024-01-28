import React from "react";
import { Accordion } from "react-bootstrap";

function FAQBox({
  itemClass,
  headerClass,
  bodyClass,
  eventKey,
  textHeader,
  textBody,
  id,
}) {
  return (
    <>
      <Accordion.Item
        key={id}
        className={`${itemClass}`}
        eventKey={eventKey}
        id={id}>
        <Accordion.Header className={`${headerClass}`}>
          {textHeader}
        </Accordion.Header>
        <Accordion.Body className={`${bodyClass}`}>
          <>{textBody}</>
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
}

export default FAQBox;
