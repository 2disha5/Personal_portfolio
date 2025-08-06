"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Frontend Web Development",
    description:
      "I create responsive and interactive web interfaces using HTML5, CSS3, JavaScript, React.js, and Tailwind CSS.",
  },
  {
    num: "02",
    title: "Figma UI Design",
    description:
      "I create intuitive and visually appealing UI designs in Figma, optimized for both usability and developer handoff.",
  },
  {
    num: "03",
    title: "UI/UX Implementation",
    description:
      "I convert Figma designs into functional layouts using modern CSS techniques and component-based frameworks.",
  },
  {
    num: "04",
    title: "MERN Stack Development",
    description:
      "I develop dynamic web apps using the MERN stack, combining MongoDB, Express, React, and Node.js for complete frontend-to-backend integration.",
  },
];

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
          className="grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-[60px]"
        >
          {services.map((service, index) => (
            <div key={index} className="flex flex-col h-full">
              <div className="flex flex-col justify-between gap-6 group flex-1 min-h-[320px]">
                {/* Top section with number and arrow */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 cursor-pointer">
                    {service.num}
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-white/60">{service.description}</p>
              </div>

              {/* Bottom border */}
              <div className="border-b border-white/20 w-full mt-6"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
