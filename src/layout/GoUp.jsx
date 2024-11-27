import React, { useRef, useEffect } from 'react';
import '../style/App.css';

const GoUp = () => {
  const go = useRef();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      go.current.style.opacity = '1';
    } else {
      go.current.style.opacity = '0';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Hide initially if not scrolled
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='goup' ref={go} onClick={e=> window.scrollTo(0,0)}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="60px"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          <path
            opacity={0.2}
            d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
            fill="#07f"
          />
          <path
            d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
            stroke="#07f"
            strokeWidth={.5}
          />
          <path
            d="M15 13L12.2014 10.2014V10.2014C12.0901 10.0901 11.9099 10.0901 11.7986 10.2014V10.2014L9 13"
            stroke="#07f"
            strokeWidth={1.3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default GoUp;
