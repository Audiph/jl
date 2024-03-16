'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const aboutMe = {
  title: 'Hello! This is Jeff!',
  description:
    "Explore to delve into the journey of a passionate Full Stack Software Engineer. From front-end development using React and Next.js to backend mastery with Node.js and Python, I specialize in crafting innovative solutions that fuel business growth and enhance user engagement. Let's collaborate to turn ideas into reality",
};

const HomePage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 gap-8 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/hero.png"
            alt="JL's Picture"
            fill
            priority
            className="object-contain drop-shadow-xl"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold text-[#ECEFF1]">
            {aboutMe.title}
          </h1>
          {/* DESCRIPTION */}
          <p className="text-[#B0BEC5] md:text-xl">{aboutMe.description}</p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-[#ECEFF1] bg-[#ECEFF1] text-[#222222]">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-[#ECEFF1] text-[#ECEFF1]">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
