'use client';
import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Define a function to update screenSize state with window dimensions
    const updateScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener to update screenSize state on window resize
    window.addEventListener('resize', updateScreenSize);

    // Call updateScreenSize initially to set the initial dimensions
    updateScreenSize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
