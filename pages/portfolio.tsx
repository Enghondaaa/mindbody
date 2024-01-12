import * as React from "react";
import Head from "next/head";
import {
  Contact,
  Copyrights,
  Footer,
  Header,
  MobileFooter,
  Portfolio as Work,
} from "../src/containers";

const Portfolio: React.FC = () => {
  return (
    <>
      <Head>
        <title>Mind Body Check</title>
      </Head>
      <Header
        variant="horizontal"
        title="Our Case Studies"
        image="/images/portfolio-header.png"
      />
      <Work />
      <Contact />
      <Footer />
      <MobileFooter />
      <Copyrights />
    </>
  );
};

export default Portfolio;
