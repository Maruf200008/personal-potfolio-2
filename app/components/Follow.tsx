import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BsBehance, BsLinkedin } from "react-icons/bs";
import bgImg from "../images/followBg.png";
const Follow = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImg})` }} className=" bg-no-repeat">
      <h2 className=" text-center text-lg">Follow me on :</h2>
      <div className=" flex items-center justify-center my-5 text-xl gap-5">
        <Link
          href="https://github.com/Maruf200008"
          target="_"
          className=" bg-gray-200 p-2 rounded-full "
        >
          <AiFillGithub />
        </Link>
        <Link
          target="_"
          href="https://www.linkedin.com/in/mohammad-maruf-a77b9621a/"
          className=" bg-gray-200 p-2 rounded-full"
        >
          <BsLinkedin />
        </Link>
        <Link
          target="_"
          href="https://www.facebook.com/profile.php?id=100088210389764"
          className=" bg-gray-200 p-2 rounded-full"
        >
          <BiLogoFacebook />
        </Link>
        <Link
          target="_"
          href="https://www.behance.net/mohammadmaruf"
          className=" bg-gray-200 p-2 rounded-full"
        >
          <BsBehance />
        </Link>
      </div>
    </div>
  );
};

export default Follow;
