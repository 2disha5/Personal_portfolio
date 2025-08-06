"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "phone",
    description: "(+91) 91673 43281",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "dishachaudhari801@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Thane, Maharashtra, India",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              action="https://formsubmit.co/dishachaudhari801@gmail.com"
              method="POST"
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              {/* ✅ Add this hidden input */}
              <input
                type="hidden"
                name="_next"
                value="https://personal-portfolio-mu-eight-27.vercel.app/thankyou"
              />

              {/* You can also add this to avoid bot submissions */}
              <input type="hidden" name="_captcha" value="false" />

              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                I'm always eager to take on new challenges and contribute to
                meaningful projects. Reach out and let’s build something
                impactful together.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="name" placeholder="First Name" />
                <Input type="text" name="lastname" placeholder="Last Name" />
                <Input type="email" name="email" placeholder="Email Address" />
                <Input type="text" name="phone" placeholder="Phone Number" />
              </div>

              {/* Add `name="service"` so you can receive it in email */}
              <Select name="service">
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem
                      value="web development"
                      className="cursor-pointer"
                    >
                      Web development
                    </SelectItem>
                    <SelectItem value="uiux" className="cursor-pointer">
                      UI/UX Design
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
              />

              <Button size="md" className="max-w-40 min-h-12">
                Send Message
              </Button>
            </form>

            {/* <form
              action="https://formsubmit.co/dishachaudhari801@gmail.com"
              method="POST"
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                I'm always eager to take on new challenges and contribute to
                meaningful projects. Reach out and let’s build something
                impactful together.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" name="name" placeholder="First Name" />
                <Input
                  type="lastname"
                  name="lastname"
                  placeholder="Last Name"
                />
                <Input type="email" name="email" placeholder="Email Address" />
                <Input type="phone" name="phone" placeholder="Phone Number" />
              </div>
              <Select>
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est" className="cursor-pointer">
                      Web development
                    </SelectItem>
                    <SelectItem value="cst" className="cursor-pointer">
                      UI/UX Design
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
              />

              <Button size="md" className="max-w-40 min-h-12">
                Send Message
              </Button>
            </form> */}
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
