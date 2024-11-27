import React, { useEffect } from 'react';
import CompetionContainr from "../Components/CompetionContainer";
import Header from '../layout/Header';
import Load from '../layout/Load';
import img from '../Assets/Imgs/runner.jpg'
import img2 from '../Assets/Imgs/swimming.jpg'
import GoUp from "../layout/GoUp";
import CopyRight from '../layout/CopyRight';

const Competitions = () => {
  let text =  `
  تنظيم مسابقات مدرسية يعد وسيلة ممتازة لتحفيز الطلاب وتطوير قدراتهم واكسابهم مهارات التعاون والمنافسة بشكل ايجابي اليك خطوات تنفيذ مسابقة مدرسية

١. تحديد نوع المسابقة
علمية مثل مسابقات العلوم الرياضيات 
وايضا علينا ان نصلي ونعبد ربنا خير عبادة   
`
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
    <div className="Competitions">
    <CompetionContainr name={"السباحة"} describtion={text} img={img2}/>
<CompetionContainr name={"الجري"} describtion={text} img={img}/>
<CompetionContainr name={"الجري"} describtion={text} img={img}/>
 <CompetionContainr name={"السباحة"} describtion={text} img={img2}/>
<CompetionContainr name={"الجري"} describtion={text} img={img}/>
    </div>
    <GoUp />
<CopyRight />

    </>
  );
};

export default Competitions;
