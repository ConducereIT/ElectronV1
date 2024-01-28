import React from "react";
import { Link } from "react-scroll";

const NavBarList = [
  {
    id: "0",
    to: "about",
    text: "About",
  },
  // {
  //   id: "1",
  //   to: "faq",
  //   text: "FAQ",
  // },
  // {
  //   id: "2",
  //   to: "underworks",
  //   text: "Prizes",
  // },
  // {
  //   id: "3",
  //   to: "underworks",
  //   text: "Jury",
  // },
  // {
  //   id: "4",
  //   to: "underworks",
  //   text: "Challenges",
  // },
  // {
  //   id: "5",
  //   to: "underworks",
  //   text: "Workshops",
  // },
  {
    id: "6",
    to: "underworks",
    text: "Register",
  },
  {
    id: "7",
    to: "footer",
    text: "Contact",
  },
];

const NavBarLinks = NavBarList.map(({ id, to, text }) => {
  return (
    <Link
      className="nav-link active navbar-link"
      to={to}
      id={id}
      spy={true}
      // smooth={true}
      // delay={10}
      offset={-200}
      duration={500}>
      {text}
    </Link>
  );
});

export default NavBarLinks;
