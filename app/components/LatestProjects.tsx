import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import demo1 from "../images/demo1.jpg";
import demo2 from "../images/demo2.jpg";
import demo3 from "../images/demo3.jpg";

const LatestProjects = () => {
  interface ProjectType {
    img: string | StaticImageData;
    title: string;
    catagory1: string;
    catagory2: string;
    link: string;
  }

  const projectData: ProjectType[] = [
    {
      img: demo1,
      title: "HomeLand",
      catagory1: "UI/UX",
      catagory2: "Product Design",
      link: "https://real-state-website-kappa.vercel.app/",
    },
    {
      img: demo2,
      title: "Shortly",
      catagory1: "UI/UX",
      catagory2: "Product Design",
      link: "https://relaxed-halva-74798e.netlify.app/",
    },
    {
      img: demo3,
      title: "Daffodil College",
      catagory1: "UI/UX",
      catagory2: "Product Design",
      link: "https://daffodil-chandpur-bz6r.vercel.app/",
    },
  ];
  return (
    <>
      <div className="max-w-screen-xl  mx-auto p-4 my-20 ">
        <div className=" flex items-center justify-between">
          <h2 className=" text-[30px] font-bold">Latest Projects</h2>
          <Link
            href="/"
            className=" text-gray-400 hover:text-gray-600 transition"
          >
            Sell All
          </Link>
        </div>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((data, index) => {
            const { img, title, catagory1, catagory2, link } = data || {};
            return (
              <Link
                key={index}
                target="_"
                href={link}
                className=" bg-slate-100 rounded-2xl border mt-7"
              >
                <div className=" rounded-2xl overflow-hidden p-4 space-y-5">
                  <Image src={img} alt="project demo" className=" rounded-xl" />

                  <div className=" space-y-4">
                    <h2 className=" text-xl font-bold">{title}</h2>
                    <div className=" flex items-center gap-5">
                      <p className=" border rounded-full px-3 border-gray-600">
                        {catagory1}
                      </p>
                      <p className=" border rounded-full px-3 border-gray-600">
                        {catagory2}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LatestProjects;
