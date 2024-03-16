'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import NavLink from './NavLink';

const links = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/portfolio', title: 'Portfolio' },
  { url: '/contact', title: 'Contact' },
];

const socLinks = [
  { src: '/github.png', url: 'https://github.com/Audiph', alt: 'Github Icon' },
  {
    src: '/linkedin.png',
    url: 'https://www.linkedin.com/in/marc-joseph-lagarde-198652172/',
    alt: 'LinkedIn Icon',
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 text-[#ECEFF1] w-1/3">
        {links.map((link) => {
          return <NavLink link={link} key={link.title} />;
        })}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1 px-2">JL</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      {/* SOCIAL LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {socLinks.map((link) => {
          return (
            <Link href={link.url} key={link.src}>
              <Image src={link.src} alt={link.alt} width={24} height={24} />
            </Link>
          );
        })}
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <div className="w-10 h-1 bg-[#DEE4E7] rounded"></div>
          <div className="w-10 h-1 bg-[#DEE4E7] rounded"></div>
          <div className="w-10 h-1 bg-[#DEE4E7] rounded"></div>
        </button>
        {/* MENU LIST */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-[#DEE4E7] text-[#222222] flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => {
              return (
                <Link href={link.url} key={link.title}>
                  {link.title}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
