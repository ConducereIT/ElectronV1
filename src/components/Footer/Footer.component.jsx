import React from "react";
import ButtonSocial from "../Buttons/ButtonSocial/ButtonSocial.component";
import FacebookSvg from "../SVG/Facebook.svg";
import "../SVG/Instagram.svg";
import InstagramSvg from "../SVG/Instagram.svg";
import LinkedinSvg from "../SVG/Linkedin.svg";
import Section from "../Section/Section.component";
import "./Footer.style.css";

const text = "Copyright© 2024 Electron";

const SocialLinks = () => {
  return (
    <>
      <div className="socialButtons">
      <a
        href="https://www.instagram.com/electron.lse/"
        target="_blank"
        rel="noreferrer">
        <ButtonSocial svg={<InstagramSvg />} />
      </a>
      <a
        href="https://www.linkedin.com/company/ligastudentilorelectronisti/"
        target="_blank"
        rel="noreferrer">
        <ButtonSocial svg={<LinkedinSvg />} />
      </a>
      <a href="https://fb.me/e/Pedr5ooT" target="_blank" rel="noreferrer">
        <ButtonSocial svg={<FacebookSvg />} />
      </a>
      </div>
    </>
  );
};

const LegalLinks = () => {
  return (
    <>
      <p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=electron@lsebucuresti.org&su=MESSAGE_TO_ELECTRON">
          electron@lsebucuresti.org
        </a>
      </p>
      <p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/document/d/1l7FicpGAf3QuyM9mLhMlULbSc9QbPnAEBGkAhqNrYmc/edit?usp=share_link">
          Terms and Conditions
        </a>
        {" | "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/document/d/1sLkKvkOaDMmw5YRPF-nSkewAzhcv1WL5CVkvQIy_hhI/edit?usp=share_link">
          Privacy Policy
        </a>
      </p>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <Section
        cardClass="footer-section"
        cardBodyClass="footer-body"
        cardTitleClass="footer-title "
        cardFooterClass="footer-footer"
        cardTextClass="footer-text"
        title=""
        id="footer"
        text={<LegalLinks />}
        footerIsActive={true}
        footerSection={text}>
        <SocialLinks />
      </Section>
    </>
  );
};

export default Footer;
