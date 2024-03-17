'use client';

import Image from 'next/image';
import GraphemeSplitter from 'grapheme-splitter';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const description =
  "Explore to delve into the journey of a passionate Full Stack Software Engineer. From front-end development using React and Next.js to backend mastery with Node.js and Python, I specialize in crafting innovative solutions that fuel business growth and enhance user engagement. Let's collaborate to turn ideas into reality";

const HomePage = () => {
  const splitter = new GraphemeSplitter();
  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 gap-8 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative z-0">
          <Image
            width={2048}
            height={2839}
            src="/hero.png"
            alt="JL's Picture"
            priority
            className="absolute h-full w-full inset-0 text-transparent object-contain drop-shadow-xl"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <div className="text-4xl md:text-6xl font-bold text-[#ECEFF1]">
            <TypeAnimation
              splitter={(str) => splitter.splitGraphemes(str)}
              sequence={[
                // Same substring at the start will only be typed once, initially
                "Hello, I'm Jeff!",
                3000,
                'Hello, ako si Jeff!',
                3000,
                'こんにちは、ジェフです！',
                3000,
                '你好，我是杰夫！',
                3000,
                '안녕하세요, 제프입니다!',
                3000,
                'Привіт, я Джефф!',
                3000,
              ]}
              speed={30}
              style={{ fontSize: '2em' }}
              repeat={Infinity}
            />
          </div>
          {/* DESCRIPTION */}
          <p className="text-[#B0BEC5] md:text-xl">{description}</p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-[#ECEFF1] bg-[#ECEFF1] text-[#222222] hover:bg-transparent hover:text-[#ECEFF1]">
              <Link href="/portfolio">View My Work</Link>
            </button>
            <button className="p-4 rounded-lg ring-1 ring-[#ECEFF1] text-[#ECEFF1] hover:bg-[#ECEFF1] hover:text-[#222222]">
              <Link href="/contact">Contact Me</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
