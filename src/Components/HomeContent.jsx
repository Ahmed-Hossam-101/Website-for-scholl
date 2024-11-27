import React from 'react';
import img from '../Assets/Imgs/logo.png';
import FaceBook from '../Assets/svg/FaceBook';
import { Data } from './Data';
import Whats from '../Assets/svg/whatsapp';

const HomeContent = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
console.log(Data);

  return (
    <>
      <div className="content">
        <div className="img">
          <img src={img} alt="img" width="100px" />
        </div>
        <div className="textContent">
          <div className="text">
            مرحبا في منصة مدرسة
            <br />
            <span className="mark">الشهيد عبد المنعم رياض الثانوية</span>
            <br />
            هنا يمكنك تفقد المدرسين والتواصل مع خدمة العملاء أو الاستعلام عن نتائج الثانوية العامة
          </div>
          <div className="btns">
          <button style={{ "--clr": "#25e" }}>
<span>
<FaceBook width="30px" /> 

</span>
              صفحة الفيسبوك
            </button>
            <button style={{ "--clr": "#25D366" }}>
<span>
<Whats width="30px" /> 

</span>
              تواصل  واتس 
            </button>

            {userData === null || userData === '' ? (
              <a href="/SignIn">
                <button style={{ "--clr": "#25e" }}>تسجيل الدخول</button>
              </a>
            ) : (
              ''
            )}

          </div>
        </div>

      </div>
    </>
  );
};

export default HomeContent;
