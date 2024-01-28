//---------Inceput FAQBOX Item---------
import { Link } from "react-scroll";
import FAQBox from "../FAQ-BOX/FAQBox.component";
import "../FAQ-BOX/FAQBox.styles.css";

const FAQBoxList = [
  {
    id: "Q0",
    textHeader: "Cand este Electron?",
    textBody: "Electron dureaza 24 ore, in perioada 13-14 mai.",
  },
  {
    id: "Q3",
    textHeader: "Nu am mai participat niciodata la un hackathon. Ce fac?",
    textBody: "Stai fara griji, nici noi nu stim ce facem.",
  },
  {
    id: "Q5",
    textHeader: "Cum ma inscriu?",
    textBody:
      "Startul inscrierilor se va da in apropierea evenimentului. Follow us on social media.",
  },
  {
    id: "Q1",
    textHeader: "Exista o taxa de participare?",
    textBody:
      "Nu, inregistrarea este gratuita si include participarea la workshop-uri, interactiunea cu mentorii si o experienta memorabila.",
  },
  {
    id: "Q6",
    textHeader: "Pot participa online?",
    textBody:
      "Credem ca networking-ul este un skill foarte important, de aceea prezenta fizica este obligatorie.",
  },
  {
    id: "Q2",
    textHeader: "Care este programul evenimentului?",
    textBody:
      "Programul detaliat va fi afisat in apropierea evenimentului. Pentru moment ce putem dezvalui este ca check-in-ul va incepe in dimineata de 13 mai.",
  },
  {
    id: "Q4",
    textHeader: "Cine organizeaza Electron?",
    textBody:
      "Electron este organizat de Liga Studentilor Electronisti (LSE) in colaborare cu Facultatea de Electronica, Telecomunicatii si Tehnologia Informatiei.",
  },
  {
    id: "Q99",
    textHeader: "Inca am intrebari. Ce fac?",
    textBody: "Ne poti trimite un mail pe adresa lse.electron@gmail.com.",
  },
];

export const FAQBOXMap = FAQBoxList.map(({ id, textHeader, textBody }) => {
  return (
    <Link duration={500} offset={-300} to={id}>
      <FAQBox
        itemClass="faq-item"
        headerClass="faq-header"
        bodyClass="faq-body"
        eventKey={id}
        id={id}
        textHeader={textHeader}
        textBody={textBody}
      />
    </Link>
  );
});

//---------Final FAQBOX Item---------
