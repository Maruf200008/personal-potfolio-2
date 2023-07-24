import Image from "next/image";
import brandsLogo from "../images/brnandsLogo.png";

const WorkWith = () => {
  return (
    <>
      <div className="max-w-screen-xl  mx-auto p-4 my-20 ">
        <h1 className=" text-center md:w-[400px] mx-auto text-[40px] font-bold">{`Companies I’ve Worked with`}</h1>

        <div className=" my-12  w-full flex flex-col items-center justify-center  ">
          <Image src={brandsLogo} alt="brands logo" />
        </div>
      </div>
    </>
  );
};

export default WorkWith;
