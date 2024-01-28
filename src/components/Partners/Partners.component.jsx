import React from "react";
import Section from "../Section/Section.component";
import { Partner } from "./Partner/Partner.component";
import "./Partners.style.css";

export const Partners = () => {
  return (
    <Section
      cardClass="partners-section"
      cardBodyClass="partners-body"
      cardTitleClass="partners-title"
      cardFooterClass="partners-footer"
      cardTextClass="partners-text"
      title="Partners"
      id="partners"
      text={
        <>
          <Partner img="https://upload.wikimedia.org/wikipedia/commons/6/6d/Sigla_Liga_studentilor_electronisti.png"></Partner>
          <Partner img="https://upb.ro/wp-content/uploads/2018/03/sigla_facultatea_electronica_telecomunicatii-300x300.png"></Partner>
          <Partner img="https://rotsa.ro/wp-content/uploads/2021/12/Cyber-edu.jpg"></Partner>
          <Partner img="https://media.licdn.com/dms/image/C4E0BAQEPT40_GewUXA/company-logo_200_200/0/1577560083206?e=2147483647&v=beta&t=n3A1QpaXH_c7JQd_jFFFikJyOT-A3JEYeA9sAI9Q_W0" />
          {/* <Partner img="https://yt3.googleusercontent.com/ytc/AL5GRJVOlbGlU664UWuTRXhmUaZSaFlyn51-An4ob6GO=s900-c-k-c0x00ffffff-no-rj"></Partner> */}
          {/* <Partner img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/1200px-Orange_logo.svg.png"></Partner> */}
        </>
      }
      footerIsActive={false}></Section>
  );
};
