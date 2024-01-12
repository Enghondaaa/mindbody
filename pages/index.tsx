import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import {
  About,
  Header,
  Footer,
  Contact,
  OurWork,
  Services,
  Copyrights,
  MobileFooter,
  Announcement,
} from "../src/containers";
import Features from "../src/containers/Features";
import Values from "../src/containers/Values";
import Vision from "../src/containers/Vision";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <title>Check body</title>
      </Head>

      <Header
        image=""
        variant="vertical"
        title={`Your Path to Wellness and Fitness`}
      />

      <About />
      <Vision />
      <Services />
      <Features />
      <Values />
      {/* <OurWork /> */}
      <Announcement />
      <Contact />

      <Footer />
      <MobileFooter />
      <Copyrights />
    </>
  );
};

export default Home;
