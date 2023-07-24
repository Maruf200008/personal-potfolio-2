import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";

const ImpactOfGood = () => {
  return (
    <div className=" bg-[#222222] relative ">
      <div className="max-w-screen-xl  mx-auto p-4 my-20 relative">
        <h2 className=" font-semibold text-white text-[25px] sm:text-[30px] md:text-[50px] py-10 md:w-[750px] mb-20">
          See the impact of good, conversion-oriented design on your business.
        </h2>

        <Link
          href="/"
          className=" mt-10 bg-[#79DCFF]  right-0 bottom-4 absolute pl-4 rounded-full  flex items-center justify-between gap-5 font-medium my-5"
        >
          <p>Hire Me!!</p>
          <div className=" text-[35px] p-1">
            <BsArrowRightCircleFill />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ImpactOfGood;
