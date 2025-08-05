"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullStack",
    title: "Navya Collection – Full-Stack E-commerce Clothing Website",
    description:
      "Developed an e-commerce clothing website that allows users to browse and purchase products with ease. Integrated a secure payment gateway to ensure safe transactions, implemented real-time product filtering for enhanced user experience, and designed an intuitive user interface. Backend functionalities were handled with Node.js and MongoDB for seamless data management and dynamic content rendering.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    image: "/assets/work/thumb1.png",
    github: "https://github.com/2disha5/Navya-Collection",
  },
  {
    num: "02",
    category: "MERN Stack",
    title: "ThinkBoard – MERN Stack Note-Taking Application",
    description:
      "Built a dynamic and responsive web application for notetaking using the MERN stack .The app supports complete CRUD operations, enabling users to manage notes efficiently. Ensured a smooth and consistent user experience across all devices through responsive design and implemented seamless interaction between frontend and backend for real-time updates.",
    stack: [{ name: "React.js" }, { name: "Express.js" }, { name: "MongoDB" }],
    image: "/assets/work/thumb2.png",
    github: "https://github.com/2disha5/mern-thinkboard",
  },
  {
    num: "03",
    category: "MERN Stack(On-Going)",
    title: "JourNiva- Smart Productivity & Journaling Platform ",
    description:
      "Created a comprehensive productivity web application using the MERN stack, aimed at helping users organize their goals and daily reflections. The platform includes a digital journaling feature, an interactive vision board, and habit and goal tracking functionalities. Prioritized an engaging UI and consistent user experience to encourage daily use and long-term productivity.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind.css" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/thumb3.png",
    github: "https://github.com/OmAmberkar/JourNiva",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Personal Portfolio Website",
    description:
      "Designed and deployed a personal portfolio website, showcasing individual projects and skills in a modern, clean layout. The site is fully responsive and optimized for all devices. Features include smooth page transitions, fast load times, and builtin dark mode support, enhancing both usability and aesthetics for visitors.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/thumb4.png",
    github: "https://github.com/2disha5/Personal_portfolio",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              <h6 className="text-[30px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h6>

              <h2 className="text-[20px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
