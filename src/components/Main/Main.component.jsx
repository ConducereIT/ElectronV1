import React from "react";
import Section from "../Section/Section.component";
import { MainSectionFooter } from "./footer.component";

import "./Main.style.css";

const Main = () => {
  return (
    <Section
      cardClass="main-section"
      cardBodyClass="main-section-body my-auto"
      cardTitleClass="main-section-title"
      cardFooterClass="main-section-footer"
      cardTextClass="main-section-text"
      // title="ELECTRON"
      id="main"
      // text={
      //   <>
      //     <img
      //       src={header_logo_image}
      //       alt="header-logo"
      //       className="header-logo-img"></img>
      //     <img
      //       src={header_title_image}
      //       alt="header-title"
      //       className="header-title-img"></img>
      //   </>
      // }
      footerIsActive={true}
      footerSection={<MainSectionFooter />}>
      {/* <img className="main-section-logo" src={LOGO}></img> */}
    </Section>
  );
};

export default Main;
