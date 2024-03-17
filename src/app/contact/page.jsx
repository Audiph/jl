'use client';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Loading from '@/components/Loading';

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setIsLoading(false);
          form.current.reset();
        },
        () => {
          setIsLoading(false);
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div className="text-[#ECEFF1]">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                'Send me a message',
                1000,
                'Say Hello',
                1000,
              ]}
              speed={40}
              style={{ fontSize: '2em' }}
              repeat={Infinity}
            />
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-[#DEE4E7] rounded-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear Jeff</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
          />
          <span>My E-mail:</span>
          <input
            type="email"
            className="bg-transparent border-b-2 border-b-black outline-none"
            name="user_email"
          />
          <button
            disabled={isLoading}
            className={`bg-[#222222] rounded font-semibold text-[#DEE4E7] p-4 ${
              isLoading ? 'hover:bg-black' : 'hover:bg-[#607D8B]'
            }`}
          >
            {isLoading ? <Loading /> : 'Send'}
          </button>
          {success && (
            <span className="font-semibold text-[#009B94]">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="font-semibold text-[#BF0000]">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
