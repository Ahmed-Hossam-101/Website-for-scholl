import React, { useEffect ,useState} from 'react';
import '../style/UserPage.css';
import Header from '../layout/Header'
import Load from '../layout/Load';

const UserStatus = () => {
    const [Persent, setPersent] = useState(90);
    const [Name, setName] = useState("احمد حسام الدين احمد");
    const [Home, setHome] = useState("بني سويف ببا الفقاعي");
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
  <div className="MainInfo">
<div className="degree">
    <div className="circle">
    <div id="percent">{Persent}%</div>
<div className='degrees'>
    <span title='الدرجة النهائية'>220</span>
    <span>/</span>
    <span className='myDe'>219</span>
</div>
    </div>
</div>
{/* Public Info */}
<div className="PublicInfo">
<div className="name" data-title='الاسم : '>{Name}</div>
<div className="Num" data-title='رقم الجلوس : '>312312</div>
<div className="Evaluation" data-title='التقييم : '>ممتاز</div>
<div className="Status" data-title='حالة الطاب : '><span className='green'>ناجح</span></div>
</div>
  </div>
  <div className="subjects" >
    <div className="subject" >
      <div className="progress">
        <div className="line" style={{'--clr':'#ff1166','--width':'85%'}}>
          <div className="text">
            <span className='d'>40</span>
            <span>/</span>
            <span>50</span>
          </div>
        </div>
      </div>
      <span className="subjectName">رياضة</span>
    </div>
    <div className="subject" >
      <div className="progress">
        <div className="line" style={{'--clr':'#ff3400','--width':'80%'}}>
          <div className="text">
            <span className='d'>40</span>
            <span>/</span>
            <span>50</span>
          </div>
        </div>
      </div>
      <span className="subjectName">فلسفة</span>
    </div>
    <div className="subject" >
      <div className="progress">
        <div className="line" style={{'--clr':'#ff7166','--width':'70%'}}>
          <div className="text">
            <span className='d'>34.5</span>
            <span>/</span>
            <span>50</span>
          </div>
        </div>
      </div>
      <span className="subjectName">عربي</span>
    </div>
    <div className="subject" >
      <div className="progress">
        <div className="line" style={{'--clr':'#2f10ff','--width':'100%'}}>
          <div className="text">
            <span className='d'>50</span>
            <span>/</span>
            <span>50</span>
          </div>
        </div>
      </div>
      <span className="subjectName"> English</span>
    </div>
    <div className="subject" >
      <div className="progress">
        <div className="line" style={{'--clr':'#f00','--width':'60%'}}>
          <div className="text">
            <span className='d'>41</span>
            <span>/</span>
            <span>50</span>
          </div>
        </div>
      </div>
      <span className="subjectName"> فرنساوي</span>
    </div>
    <div className="subject" >
      <div className="progress">
        <div className="line" style={{'--clr':'#07f','--width':'70%'}}>
          <div className="text">
            <span className='d'>30</span>
            <span>/</span>
            <span>50</span>
          </div>
        </div>
      </div>
      <span className="subjectName"> تاريخ</span>
    </div>
    <div className="subject" >
      <div className="progress">
        <div className="line" style={{'--clr':'#11ff00','--width':'30%'}}>
          <div className="text">
            <span className='d'>30</span>
            <span>/</span>
            <span>50</span>
          </div>
        </div>
      </div>
      <span className="subjectName"> دين</span>
    </div>
  </div>
  
  </>
)
}

export default UserStatus