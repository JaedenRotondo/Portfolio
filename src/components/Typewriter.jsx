import React, { useState, useEffect } from 'react';

function Typewriter({ text }) {
  const [typedText, setTypedText] = useState('');
  let index = 0;

  useEffect(() => {
    const type = () => {
      const currentChar = text.charAt(index);
      const prevChar = text.charAt(index - 1);
      let delay = 40;

      if (currentChar === ' ') {
        delay = 75;
      } else if (prevChar === ' ') {
        delay = 50;
      }

      setTypedText(text.substring(0, index));
      index++;

      if (index <= text.length) {
        setTimeout(type, delay);
      }
    };

    type();
  }, [text]);

  return <div>{typedText}</div>;
}

export default Typewriter;
