import React from "react";
import img_challenge_3 from "../../assets/challenge_3.jpg";
import Section from "../Section/Section.component";
import { Challenge } from "./Challenge/Challenge.component";
import { DomainList } from "./Challenge/map";
import "./Challenges.style.css";

const domain_list = [
  [
    {
      id: 1,
      domain: "Internet of Things",
    },
    {
      id: 2,
      domain: "Sensors",
    },
    {
      id: 3,
      domain: "Intelligent Systems",
    },
  ],
  [
    {
      id: 1,
      domain: "Cyber Security",
    },
    {
      id: 2,
      domain: "Signal Processing",
    },
    {
      id: 3,
      domain: "Computer Engineering",
    },
  ],
  [
    {
      id: 1,
      domain: "Sense & Control",
    },
    {
      id: 2,
      domain: "Embedded Systems",
    },
    {
      id: 3,
      domain: "Applied Electronics",
    },
  ],
];

export const Challenges = () => {
  return (
    <Section
      cardClass="challenges-section"
      cardBodyClass="challenges-body"
      cardTitleClass="challenges-title"
      cardFooterClass="challenges-footer"
      cardTextClass="challenges-text"
      title="Challenges"
      id="challenges"
      text={
        <>
          {/* <h6>Electrify the Campun</h6> */}
          <Challenge
            name="Electrify the Campus"
            image={img_challenge_3}
            domains={<DomainList domains={domain_list[0]} />}
          />
          {/* <h6>Capture the Flag</h6> */}
          <Challenge
            name="Capture the Flag"
            image={img_challenge_3}
            // image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/376.png"
            domains={<DomainList domains={domain_list[1]} />}
          />
          {/* <h6>ESP Connect&Control</h6> */}
          <Challenge
            name="ESP Connect & Control"
            image={img_challenge_3}
            // image="https://img.pokemondb.net/sprites/scarlet-violet/normal/magnezone.png"
            domains={<DomainList domains={domain_list[2]} />}
          />
        </>
      }
      footerIsActive={false}></Section>
  );
};
