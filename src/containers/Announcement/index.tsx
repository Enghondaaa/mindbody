import * as React from "react";
import Image from "next/image";

const Announcement: React.FC = () => {
  return (
    <section
      id="announcement"
      className="group gredient-bg relative flex h-[660px] items-center bg-cover lg:h-[450px]"
    >
      <div className="gredient-bg">
        {/* <Image
          layout="fill"
          objectFit="cover"
          src="/images/banner.png"
          alt="ActiveLife services"
          quality="100"
        /> */}
      </div>

      {/* <div className="gredient-bg">
        <Image
          layout="fill"
          objectFit="cover"
          src="/images/mobile/banner.png"
          alt="ActiveLife services"
          quality="100"
        />
      </div> */}



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
        <h1 className="hover mb-8 text-center text-[48px] max-w-[900px] mx-auto font-medium leading-tight text-white">
          encouraging regular exercise and a healthy lifestyle.
        </h1>

        {/* <div className="flex justify-center">
          <button className="bg-button rounded-2xl py-4 px-16 text-sm text-white transition-transform duration-300 hover:scale-110">
            {`Let's go`}
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Announcement;
