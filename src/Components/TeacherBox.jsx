import React from 'react';
import InfoIcon from '../Assets/svg/Info';
import Phone from '../Assets/svg/Phone';
import Whats from '../Assets/svg/whatsapp';
import '../style/Teachers.css';

const TeacherBox = ({ imgUrl, nameOfTeacher }) => {
    let handleImg = (e) => {
        const container = e.currentTarget; // Get the container element (teacherBox)
        const containerRect = container.getBoundingClientRect(); // Get container's position and dimensions

        const offsetX = e.clientX - containerRect.left;
        const offsetY = e.clientY - containerRect.top;

        console.log("Mouse coordinates relative to container:", offsetX, offsetY);

        let bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.position = 'absolute';
        bubble.style.top = offsetY + 'px';
        bubble.style.left = offsetX + 'px';
        
        container.append(bubble);

        bubble.style.transform = 'scale(0)';
        bubble.style.opacity = '.3';
        setTimeout(() => {
            bubble.style.transform = 'scale(10)';
            bubble.style.transition = 'transform .6s ease-out';

        }, 0);

        setTimeout(() => bubble.remove(), 900);
    };

    return (
        <div className="teacherBox" onClick={handleImg}> {/* Attach the click event to the container */}
            <div className="img">
                <img src={imgUrl} alt="img" />
            </div>
            <div className="tagName">
                {nameOfTeacher}
            </div>
            <div className="icons">
                <div className="icon">
                    <InfoIcon width="23px" />
                </div>
                <div className="icon">
                    <Phone width="23px" />
                </div>
                <div className="icon">
                    <Whats width="23px" />
                </div>
            </div>
        </div>
    );
};

export default TeacherBox;
