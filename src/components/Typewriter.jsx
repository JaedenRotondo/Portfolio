import React, { useState, useEffect } from 'react';

function Typewriter({ text }) {
  const [typedText, setTypedText] = useState('');
  let index = 0;

  useEffect(() => {
    const type = () => {
      setTypedText(text.substring(0, index));
      index++;
      if (index <= text.length) {
        setTimeout(type, 50);
      }
    };
    type();
  }, [text]);

  return <div>{typedText}</div>;
}

export default Typewriter;
