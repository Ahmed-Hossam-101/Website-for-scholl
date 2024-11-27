import React, { useEffect } from 'react';
import Header from '../layout/Header';
import Load from '../layout/Load';
import { HomeComponent } from '../Components/Home';

export const Home = () => {
  useEffect(() => {
    const requestFullscreen = () => {
      if (document.documentElement.requestFullscreen) {
        document.documentElement
          .requestFullscreen()
          .catch((err) => {
            console.error("Fullscreen failed:", err);
          });
      } else {
        console.warn("Fullscreen API is not supported by this browser.");
      }
    };
    const handleDoubleClick = () => {
      requestFullscreen();
    };
    window.addEventListener('dblclick', handleDoubleClick);
    return () => {
      window.removeEventListener('dblclick', handleDoubleClick);
    };
  }, []);

  return (
    <>
      <Load />
      <Header />
      <HomeComponent />
    </>
  );
};
