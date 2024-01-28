import React from "react";
import { Accordion } from "react-bootstrap";

//Import Map
import Section from "../Section/Section.component";
import { FAQBOXMap } from "./FAQ List Items/map";
import "./FAQList.styles.css";

const FAQ = () => {
  return (
    <Section
      cardClass="faq-section"
      cardBodyClass="faq-body"
      cardTitleClass="faq-title"
      cardTextClass="faq-text"
      cardFooterClass="faq-footer"
      title="FAQ"
      id="faq">
      <Accordion>{FAQBOXMap}</Accordion>
    </Section>
  );
};

export default FAQ;
