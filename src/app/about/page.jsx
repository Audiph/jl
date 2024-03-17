'use client';
import { motion, useInView, useScroll } from 'framer-motion';
import Brain from '@/components/Brain';
import { useRef } from 'react';
import Image from 'next/image';

const skills = [
  { id: 1, title: 'JavaScript' },
  { id: 2, title: 'TypeScript' },
  { id: 3, title: 'Python' },
  { id: 4, title: 'Node' },
  { id: 5, title: 'React' },
  { id: 6, title: 'lit' },
  { id: 7, title: 'NextJS' },
  { id: 8, title: 'ExpressJS' },
  { id: 9, title: 'Fastify' },
  { id: 10, title: 'GraphQL' },
  { id: 11, title: 'Flask' },
  { id: 12, title: 'FastAPI' },
  { id: 13, title: 'MongoDB' },
  { id: 14, title: 'AEM' },
  { id: 15, title: 'TinaCMS' },
  { id: 16, title: 'HTML5/CSS/SCSS' },
  { id: 17, title: 'Microsoft Azure' },
  { id: 18, title: 'AWS' },
  { id: 19, title: 'k8s' },
  { id: 20, title: 'Docker' },
  { id: 21, title: 'Terraform' },
  { id: 22, title: 'JGP' },
  { id: 23, title: 'n8n' },
  { id: 24, title: 'Shoelace' },
  { id: 25, title: 'Tailwind CSS' },
  { id: 26, title: 'MUI' },
];

const experiences = [
  {
    id: 2,
    left: true,
    title: 'Freelancer',
    description:
      'I provided web solutions, applying a range of technologies to address client requirements.',
    date: '2023 - Present',
  },
  {
    id: 1,
    left: false,
    title: 'Associate Full Stack Software Engineer',
    description:
      'Involved in scripting, software documentation, feature design, Agile participation, user requirement translation, and API/UI development, testing, and enhancement.',
    date: '2021 - 2023',
    company: 'Manulife',
  },
];

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: '-100px' });
  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' });

  return (
    <motion.div
      className="h-full overflow-x-hidden"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY AVATAR */}
            <Image
              src="/avatar.png"
              width={112}
              height={112}
              alt="Picture of the author"
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl text-[#ECEFF1]">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESCRIPTION */}
            <p className="text-lg text-[#B0BEC5]">
              A driven Full Stack Software Engineer with over two years of
              industry expertise, pursuing an engaging opportunity to apply my
              proficiency in crafting, architecting, and sustaining top-tier
              user-centric web applications. Proficient in multiple frameworks,
              I am recognized for my ability to produce concise and effective
              code. I am enthusiastic about utilizing my technical acumen,
              innovative thinking, and dedication to problem-solving to deliver
              exceptional solutions that meet client requirements and foster
              organizational advancement.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic text-[#B0BEC5]">
              “Becoming a pro is like jumping onto a moving train that doesn’t
              stop. You can never get off of it. Not until you lose and fall
              off.” – Rei Kiriyama
            </span>
            {/* BIOGRAPHY SIGNATURE SVG */}
            <div className="self-end">
              <svg
                width="214"
                height="151"
                viewBox="0 0 214 151"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M94 60C93.0678 57.2033 90.0041 55.1296 88.1111 53C84.5345 48.9763 82.967 44.2788 83.1667 38.8889C84.0282 15.6269 117.473 4.21287 136.389 2.11111C146.759 0.958864 133.705 39.7648 132.333 42.7778C114.049 82.9488 74.9421 98.9012 40 121.444C28.1935 129.062 17.095 137.637 6.16667 146.444C-5.32888 155.71 10.1126 138.261 11.7222 136.5C55.8447 88.215 122.521 67.2056 178.611 36.6111C191.973 29.3228 203.222 23.9947 210.5 11.0556C215.448 2.25922 196.401 12.4667 193.833 13.6667C172.961 23.4223 152.659 39.0658 139.222 58C135.891 62.6947 133.3 67.6328 129.222 71.7778C127.536 73.492 124.693 74.6043 123.222 76.2222C118.577 81.3324 131.152 81.8214 132.667 81.5556C141.809 79.9516 148.956 73.55 155.333 67.2222C158.218 64.3601 166.033 55.0014 163.556 58.2222C161.909 60.3629 158.581 63.6817 155.833 64.1667C154.525 64.3976 155.631 63 157 63C160.223 63 163.356 64.7091 166.5 63.5C171.357 61.6319 168.702 67.5633 173.889 63.5556C180.827 58.1944 176.524 66.7795 174.667 71C173.765 73.049 181.315 60.7612 180 62.7778C179.662 63.296 177.987 66.1082 180.111 65.1111C187.837 61.4847 194.238 53.2923 198.556 46.2222C204.091 37.1584 206.559 26.9515 210.833 17.3333C217.892 1.45053 196.275 48.9014 188.722 64.5556C182.894 76.6362 176.955 87.7491 169 98.5556C168.063 99.8283 160.662 107.794 165 103C170.169 97.2869 178.823 88.2421 181.222 80.7778C182.171 77.8256 182.873 75.0892 184.556 72.4444C186.057 70.0849 185.274 67.7069 186.5 65.5C187.901 62.9787 187.244 61 190.5 61C195.624 61 198.942 64.2687 204.333 61.4444C210.735 58.0911 208.461 47.8287 199.556 54.4444C198.412 55.2941 184.632 65.4368 190.667 66.7778C193.171 67.3343 202.633 69.7338 204 67"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: '10px' }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#FFFFFF"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#FFFFFF" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#FFFFFF"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILLS TITLE */}
            <motion.h1
              initial={{ x: '-300px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl text-[#ECEFF1]"
            >
              SKILLS
            </motion.h1>
            {/* SKILLS LIST */}
            <motion.div
              initial={{ x: '-300px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {skills.map((skill) => (
                <div
                  className="rounded p-2 text-sm cursor-pointer bg-[#ECEFF1] text-[#222222] hover:bg-[#222222] hover:text-[#ECEFF1]"
                  key={skill.id}
                >
                  {skill.title}
                </div>
              ))}
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: '10px' }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#FFFFFF"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#FFFFFF" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#FFFFFF"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: '-310px' }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl text-[#ECEFF1]"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: '-300px' }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
            >
              {/* EXPERIENCE LIST ITEM */}
              {experiences.map((item) => (
                <div key={item.id} className="flex justify-between h-48">
                  {/* LEFT */}
                  {item.left ? (
                    <div className="w-1/3">
                      {/* JOB TITLE */}
                      <div className="p-3 bg-[#ECEFF1] font-semibold rounded-b-lg rounded-s-lg">
                        {item.title}
                      </div>
                      {/* JOB DESCRIPTION */}
                      <div className="p-3 text-sm italic text-[#ECEFF1]">
                        {item.description}
                      </div>
                      {/* JOB DATE */}
                      <div className="p-3 text-[#009B94] text-sm font-semibold">
                        {item.date}
                      </div>
                      {/* JOB COMPANY */}
                      {item.company && (
                        <div className="p-1 bg-[#ECEFF1] rounded text-sm font-semibold w-fit">
                          {item.company}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="w-1/3"></div>
                  )}
                  {/* CENTER */}
                  <div className="w-1/6 flex justify-center">
                    {/* LINE */}
                    <div className="w-1 h-full bg-[#B0BEC5] rounded relative">
                      {/* LINE CIRCLE */}
                      <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#009B94] bg-[#ECEFF1] -left-2"></div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  {!item.left ? (
                    <div className="w-1/3">
                      {/* JOB TITLE */}
                      <div className="p-3 bg-[#ECEFF1] font-semibold rounded-b-lg rounded-s-lg">
                        {item.title}
                      </div>
                      {/* JOB DESCRIPTION */}
                      <div className="p-3 text-sm italic text-[#ECEFF1]">
                        {item.description}
                      </div>
                      {/* JOB DATE */}
                      <div className="p-3 text-[#009B94] text-sm font-semibold">
                        {item.date}
                      </div>
                      {/* JOB COMPANY */}
                      {item.company && (
                        <div className="p-1 bg-[#ECEFF1] rounded text-sm font-semibold w-fit">
                          {item.company}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="w-1/3"></div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
