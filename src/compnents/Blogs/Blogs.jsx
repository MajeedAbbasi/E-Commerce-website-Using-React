import React from "react";
import Heading from "../Products/Heading";
import Img1 from "../../assets/Blogs/blog-1.jpg";
import Img2 from "../../assets/Blogs/blog-2.jpg";
import Img3 from "../../assets/Blogs/blog-3.jpg";
const BlogData = [
  {
    title: "How to choose perfect smartwatch",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At fuga mollitia iste id provident ea.",
    published: "Jan 20, 2024 by Majeed",
    img: Img1,
    aosDelay: "400",
  },
  {
    title: "How to choose perfect Gadget",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At fuga mollitia iste id provident ea.",
    published: "Jan 20, 2024 by Majeed",
    img: Img2,
    aosDelay: "400",
  },
  {
    title: "How to choose perfect VR headset",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At fuga mollitia iste id provident ea.",
    published: "Jan 20, 2024 by Majeed",
    img: Img3,
    aosDelay: "400",
  },
];
const Blogs = () => {
  return (
    <div className="my-12">
      <div className="container">
        <Heading title="Recent News" subtitle={"Explore Our Blogs"} />
        {/* Blog section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* Blog card  */}

          {BlogData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.title}
              className="bg-white dark:bg-gray-900"
            >
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.img}
                  alt=""
                  className=" w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                />
              </div>
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
