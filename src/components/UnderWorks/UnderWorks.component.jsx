import React from "react";
import UnderWorksSvg from "../SVG/UnderWorks.svg";
import Section from "../Section/Section.component";
import "./UnderWorks.style.css";

const UnderWorks = () => {
  return (
    <Section
      cardClass="under-works-section"
      cardBodyClass="under-works-body"
      cardTitleClass="under-works-title"
      cardFooterClass="under-works-footer"
      cardTextClass="under-works-text"
      title="Underworks"
      id="underworks"
      text={":: Hackathon developed by LSE x ETTI ::"}
      footerIsActive={false}>
      <UnderWorksSvg />
    </Section>
  );
};

export default UnderWorks;
