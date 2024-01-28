import React from "react";
import About from "../components/About/About.component";
import { Challenges } from "../components/Challenges/Challenges.component";
import FAQ from "../components/FAQ/FAQList.component";
import Layout from "../components/Layout.component";
import Main from "../components/Main/Main.component";
import { Partners } from "../components/Partners/Partners.component";
import UnderWorks from "../components/UnderWorks/UnderWorks.component";

const MainPage = () => {
  return (
    <>
      <Layout>
        {/* <Main /> */}
        <About />
        {/* <Challenges /> */}
        {/* <FAQ /> */}
        {/* <Partners /> */}
        <UnderWorks />
      </Layout>
    </>
  );
};

export default MainPage;
