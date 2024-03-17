'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

const items = [
  {
    id: 1,
    color: 'from-[#0E0E0E] to-[#121212]',
    title: 'Cover Me',
    src: '/coverMe.mp4',
    alt: 'Cover Me Video',
    description:
      "An insurance product offering comprehensive coverage designed to safeguard individuals and families against life's uncertainties. Tailored to meet diverse needs, CoverMe provides financial protection in areas such as health, critical illness, disability, and life insurance.",
    url: 'https://tripx.prd.coverme.com/travel-insurance',
  },
  {
    id: 2,
    color: 'from-[#121212] to-[#1A1A1A]',
    title: 'Prophet Gaming',
    src: '/prophetGaming.mp4',
    alt: 'Prophet Gaming Video',
    description:
      'A vibrant gaming community deeply immersed in video game culture and the thrill of gameplay. With over 4 years of active participation in the gaming scene, our journey began as a group of college enthusiasts driven by a shared love for gaming and the camaraderie it fosters.',
    url: 'https://www.propetagaming.com/',
  },
  {
    id: 3,
    color: 'from-[#1A1A1A] to-[#222222]',
    title: 'Dental Care',
    src: '/dentalCare.mp4',
    alt: 'Dental Care Video',
    description:
      'A user-friendly platform designed to effortlessly link patients with a wide range of dental care solutions and resources. It encourages proactive oral hygiene practices while simplifying the management of dental appointments.',
    url: 'https://github.com/Audiph/dental-care',
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col gap-24 items-center justify-center text-8xl text-center text-[#ECEFF1]">
          My Works
          <div>
            <span className="mouse relative block mx-auto border-2 border-[#B0BEC5] rounded-full h-24 w-12">
              <motion.span
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: '20px' }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: 'easeInOut',
                }}
                className="move absolute bg-[#B0BEC5] rounded-full h-3 w-3 left-0 right-0 mx-auto"
              ></motion.span>
            </span>
            <h2 className="text-[#B0BEC5] font-roboto font-light text-xs mt-2">
              Scroll down
            </h2>
          </div>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-black to-[#0E0E0E]" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-[#ECEFF1]">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative">
                    <video
                      className="aspect-video w-80 md:w-96 lg:w-[500px] xl:w-[600px]"
                      autoPlay
                      loop
                    >
                      <source src={item.src} />
                    </video>
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px] text-[#B0BEC5]">
                    {item.description}
                  </p>
                  <Link href={item.url} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-[#ECEFF1] text-[#222222] font-semibold m-4 rounded">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen bg-gradient-to-b from-[#222222] to-black flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl text-[#ECEFF1]">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#B0BEC5">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full Stack Software Engineer/Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-[#ECEFF1] hover:bg-[#009B94] text-[#222222] rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
