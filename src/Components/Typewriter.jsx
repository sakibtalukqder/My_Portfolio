// components/Typewriter.js
"use client"

import { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const textInterval = 100; // Adjust the typing speed (milliseconds)

    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, textInterval);

      return () => clearTimeout(timeoutId);
    }

    // Clear the interval once the typing is complete
    return () => {};
  }, [text, currentIndex]);

  return (
    <pre style={{ whiteSpace: 'pre-wrap', fontFamily: '' }}>{displayText}</pre>
  );
};

export default Typewriter;
