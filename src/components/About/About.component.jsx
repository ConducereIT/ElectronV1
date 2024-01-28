import React from "react";
import Section from "../Section/Section.component";
import "./About.style.css";

const TextComp = () => {
  return (
    <>
      <p>
        Bun venit la cel mai interesant eveniment pentru tinerii pasionați de
        inovație și tehnologie - hackathon-ul Electron! Ești gata să-ți pui la
        încercare creativitatea și abilitățile într-un mediu dinamic și
        provocator? Atunci aceasta este o oportunitate excelentă pentru tine!
      </p>
      <p>
        Vei avea ocazia să interacționezi cu mentori experimentați și talentați,
        care vor fi disponibili pentru a te îndruma, a-ți răspunde la întrebări
        și a-ți oferi feedback pentru a te ajuta să îți dezvoltați abilitățile
        și să găsești soluții la problemele complexe. Acești mentori sunt
        persoane cu experiență în domeniul tehnologiei și inovației, care te pot
        ajuta să faci față provocărilor și să găsești soluții inovatoare.
      </p>
      <p>
        Așadar, indiferent dacă ești pasionat de tehnologie, un programator
        experimentat sau un începător în domeniu, hackathon-ul Electron este o
        oportunitate excelentă de a-ți pune la încercare abilitățile și
        creativitatea. În plus, vei avea ocazia să cunoști oameni noi și să-ți
        faci noi prieteni într-un mediu distractiv și prietenos. Vino și
        alătură-te nouă pentru o experiență inovatoare și provocatoare!
      </p>
    </>
  );
};

const About = () => {
  return (
    <Section
      cardClass="about-section"
      cardBodyClass="about-body"
      cardTitleClass="about-title "
      cardFooterClass="about-footer"
      cardTextClass="about-text"
      title="About"
      id="about"
      text={<TextComp />}
      footerIsActive={false}
    />
  );
};

export default About;
