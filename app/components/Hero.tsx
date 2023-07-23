import Image from "next/image";
import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";
import client1 from "../images/client1.png";
import client2 from "../images/client2.png";
import client3 from "../images/client3.png";
import client4 from "../images/client4.png";
import heroImg from "../images/heroImg.png";

const Hero = () => {
  return (
    <>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 my-10">
        <div className=" grid md:grid-cols-2 gap-10 items-center ">
          <div className=" space-y-10">
            <h2 className=" text-[35px] text-center md:text-left md:text-[40px] lg:text-[55px] xl:text-[85px] font-bold xl:leading-[95px]">
              Designing for Amazing People
            </h2>
            <div className=" space-y-5 flex items-center justify-center flex-col md:justify-start md:items-start">
              <p className=" md:text-[20px] text-gray-400 md:w-[400px] text-center md:text-left">
                Designing user interface for over 10 years as visual designer
              </p>
              <Link
                href="/"
                className=" flex bg-[#84E1F6]  w-[120px] pl-3 pr-1 rounded-full justify-between py-1 items-center "
              >
                <p className=" font-medium">Hire Me</p>
                <div className=" text-[30px]">
                  <BsArrowRightCircleFill />
                </div>
              </Link>
              <div className=" flex items-center gap-7">
                <div className=" flex items-center ">
                  <Image
                    src={client1}
                    alt="Client Image"
                    width={35}
                    className=" mr-[-3px]"
                  />
                  <Image
                    src={client2}
                    alt="Client Image"
                    width={35}
                    className=" mr-[-3px]"
                  />
                  <Image
                    src={client3}
                    alt="Client Image"
                    width={35}
                    className=" mr-[-3px]"
                  />
                  <Image
                    src={client4}
                    alt="Client Image"
                    width={35}
                    className=" mr-[-3px]"
                  />
                </div>
                <p className=" font-medium">
                  1K+ <span className=" text-gray-400">Client</span>
                </p>
              </div>
            </div>
          </div>
          <div className=" order-first md:order-last">
            <Image src={heroImg} alt="hero img " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
