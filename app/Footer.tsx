import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="max-w-screen-xl  mx-auto p-4 mt-20 relative">
        <div className=" flex items-center justify-between">
          <div className=" grid grid-cols-3 gap-16">
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
        </div>
      </div>
    </>
  );
};

export default Footer;
