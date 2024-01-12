import * as React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="max-w-default m-auto flex w-full flex-col justify-between px-6 md:w-4/5 md:px-0 lg:flex-row-reverse"
    >
      <div className="flex w-full flex-col justify-center lg:ml-12 lg:w-2/5">
        <h1 className="mb-4 text-xl font-bold lg:text-2xl">About us</h1>
        <p className="text-description font-inter mb-8 text-sm font-normal leading-tight xl:text-lg">
          Mind Body Check Company
          If you very much agree with the saying that goes “health is wealth”, then you may also very well agree that one of the ways of staying healthy both physically and mentally is by keeping fit.
          The center aims to help other people realize their weight goals and mental matters, and its all provided here so you can keep and stay fit and not worrying about your life, mental wise always.
          The center meets the standard expected by gym users, and much more!        </p>
      </div>
      <div className="w-full lg:w-3/5 rounded-xl overflow-hidden">
        <Image
          width="343"
          height="243"
          layout="responsive"
          src="/images/about-us.jpg"
          alt="About us"
          quality="100"
        />
      </div>
    </section>
  );
};

export default About;
