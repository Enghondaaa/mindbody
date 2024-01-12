import * as React from "react";
import Image from "next/image";


const Vision: React.FC = () => {
  return (
    <section
      id="features"
      className="group gredient-bg relative py-16 pb-24 mt-20"
    >

      {/* Mobile Cubes */}
      <div className="absolute right-0 -top-12 lg:hidden">
        <Image
          width="107"
          height="106"
          src="/svg/right_cube.svg"
          alt="Right cube"
        />
      </div>

      <div className="absolute left-0 -bottom-20 lg:hidden">
        <Image
          width="107"
          height="106"
          src="/svg/left_cube.svg"
          alt="left cube"
        />
      </div>

      <div className="absolute -bottom-16 right-28 hidden lg:block">
        <Image
          width="172"
          height="150"
          src="/svg/left_cube.svg"
          className="transition-transform duration-1000 ease-in-out group-hover:-rotate-180"
          alt="Right cube"
        />
      </div>

      <div className="absolute left-52 -top-12 hidden lg:block">
        <Image
          className="transition-transform duration-1000 ease-in-out group-hover:rotate-180"
          width="107"
          height="106"
          src="/svg/left_cube.svg"
          alt="left cube"
        />
      </div>
      <div className="z-50 mx-auto w-11/12">
        <h1 className="hover mb-3 text-center text-[48px] max-w-[900px] mx-auto font-normal leading-tight text-white">
          Vision
        </h1>
        <p className="text-gray-200 text-[22px] text-center">Engage in the regular exercising of their bodies,<span className="sm:block"> so as to enable them stay healthy</span></p>
      </div>
    </section>
  );
};

export default Vision;
