import React from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
}

const SplitText: React.FC<SplitTextProps> = ({ text, className = '' }) => {
  return (
    <span className={`inline-block perspective-1000 ${className}`} aria-label={text}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block transition-transform duration-500 ease-in-out group-hover:[transform:rotateX(360deg)]"
          style={{ transitionDelay: `${index * 30}ms`, transformStyle: 'preserve-3d' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default SplitText;