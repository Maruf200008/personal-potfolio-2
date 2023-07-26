import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="max-w-screen-xl  mx-auto p-4 mt-20 relative ">
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className=" space-y-5 lg:col-span-2">
            <div className=" grid md:grid-cols-3 gap-16">
              <div>
                <p className=" font-bold text-lg">Navigation</p>
                <ul className=" mt-4 space-y-4 text-gray-500">
                  <li>
                    <Link href="/" className=" hover:text-gray-700 transition">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className=" hover:text-gray-700 transition">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className=" hover:text-gray-700 transition">
                      Experience
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className=" hover:text-gray-700 transition">
                      Website Service
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className=" font-bold text-lg">Services</p>
                <ul className=" mt-4 space-y-4 text-gray-500">
                  <li>
                    <Link href="/" className=" hover:text-gray-700 transition">
                      Branding
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className=" hover:text-gray-700 transition">
                      UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className=" hover:text-gray-700 transition">
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className=" hover:text-gray-700 transition">
                      Digital Marketing
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className=" font-bold text-lg">Social Media</p>
                <ul className=" mt-4 space-y-4 text-gray-500">
                  <li>
                    <Link href="/" className=" hover:text-gray-700 transition">
                      Github
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className=" hover:text-gray-700 transition">
                      Linkdin
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className=" hover:text-gray-700 transition">
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className=" hover:text-gray-700 transition">
                      Behance
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" space-y-3">
              <h2 className=" font-bold text-lg">Information</h2>
              <p className=" text-gray-400">mohammadmarufgazi@gmail.com</p>
              <p className=" text-gray-400">
                Stadium Road, Chandpur Sadar, Chandpur.
              </p>
              <p className=" text-gray-400">+880 123456 789</p>
            </div>
          </div>
          <div className=" space-y-10 mt-10 md:mt-0 ">
            <h2 className=" text-[30px]  sm:text-[40px]  text-center md:text-left md:text-[50px] xl:text-[60px] font-bold">
              Be Creative, Be Solutive
            </h2>

            <div>
              <form>
                <div className="relative">
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-3 pl-5  text-gray-900  rounded-full bg-[#79DCFF] placeholder-gray-800  focus:outline-none font-semibold "
                    placeholder="Enter Your Mail"
                    required
                  />

                  <div className="absolute right-2 bottom-1.5 text-[35px]">
                    <BsArrowRightCircleFill />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
