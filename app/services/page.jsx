"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Frontend Web Development",
    description:
      "I create responsive and interactive web interfaces using HTML5, CSS3, JavaScript, React.js, and Tailwind CSS.",
    href: "#",
  },
  {
    num: "02",
    title: "Figma UI Design",
    description:
      "I create intuitive and visually appealing UI designs in Figma, optimized for both usability and developer handoff.",
    href: "#",
  },
  {
    num: "03",
    title: "UI/UX Implementation",
    description:
      "I convert Figma designs into functional layouts using modern CSS techniques and component-based frameworks.",
    href: "#",
  },
  {
    num: "04",
    title: "MERN Stack Development",
    description:
      "I develop dynamic web apps using the MERN stack, combining MongoDB, Express, React, and Node.js for complete frontend-to-backend integration.",
    href: "#",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  {/* niche add select:none baadme (duration:500 ke baaju mei)*/}
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
