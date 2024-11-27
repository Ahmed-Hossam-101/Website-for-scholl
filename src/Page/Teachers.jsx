import React from 'react'
import TeacherBox from '../Components/TeacherBox'
import Header from '..//layout/Header';
import CopyRight from '../layout/CopyRight';
import img from '../Assets/Imgs/teacher_img.jpg'
const Teachers = () => {
    return (
<>
<Header />

<div className="Teachers">
<TeacherBox imgUrl={img} nameOfTeacher='محمد عبد الحق'/>
<TeacherBox imgUrl={img} nameOfTeacher='محمد حسن عبدالله'/>
<TeacherBox imgUrl={img} nameOfTeacher='ربيع سعيد مختار'/>
<TeacherBox imgUrl={img} nameOfTeacher=' احمد محمد السيد'/>
<TeacherBox imgUrl={img} nameOfTeacher='عبدالله محمود'/>
<TeacherBox imgUrl={img} nameOfTeacher='كريم محمد'/>
<TeacherBox imgUrl={img} nameOfTeacher='ياسين محمد '/>
<TeacherBox imgUrl={img} nameOfTeacher='زينب محمد'/>
<TeacherBox imgUrl={img} nameOfTeacher='اسراء جميل '/>
<TeacherBox imgUrl={img} nameOfTeacher='احمد'/>
<TeacherBox imgUrl={img} nameOfTeacher='احمد'/>
<TeacherBox imgUrl={img} nameOfTeacher='احمد'/>
<TeacherBox imgUrl={img} nameOfTeacher='احمد'/>
</div>
<CopyRight />

</>
    )
}

export default Teachers