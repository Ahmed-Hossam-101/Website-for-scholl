import React, { useState, useEffect, useRef } from "react";
import Link from "../Components/Link";
import PersonIcon from "../Assets/svg/person";
import SearchBar from "../Components/SearchBar";
import Logo from '../Assets/Imgs/logo.png';
import '../style/Header.css';
import { Data } from '../Components/Data';
import SearchResults from "../Components/SearchResults";
import Menu from "../Assets/svg/Menu";

const Header = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [userName, setUserName] = useState('');
  useEffect(() => {
    const userDataParsed = JSON.parse(localStorage.getItem('userData'));
Data.map(e => {
  if (e.StudentKey == userDataParsed.studentCode) {
  setUserName(e.name)
  }

})
  }, []);

  return (
    <>
    <div className="header">
      <ul className="links">
        {window.screen.width < 980 ? <Menu />:'' }

        <div className="name" >
          {userName}
          <span id="icon">
          <svg
    viewBox="0 0 24 24"
    width="27px"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <path
        opacity={.2}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 16.3106 20.4627 18.6515 18.5549 19.8557L18.2395 18.878C17.9043 17.6699 17.2931 16.8681 16.262 16.3834C15.2532 15.9092 13.8644 15.75 12 15.75C10.134 15.75 8.74481 15.922 7.73554 16.4097C6.70593 16.9073 6.09582 17.7207 5.7608 18.927L5.45019 19.8589C3.53829 18.6556 3 16.3144 3 12ZM8.75 10C8.75 8.20507 10.2051 6.75 12 6.75C13.7949 6.75 15.25 8.20507 15.25 10C15.25 11.7949 13.7949 13.25 12 13.25C10.2051 13.25 8.75 11.7949 8.75 10Z"
        fill="#ffffff"
      />
      <path
        d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
        stroke="#ffffff"
        strokeWidth={2}
      />
      <path
        d="M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z"
        stroke="#ffffff"
        strokeWidth={2}
      />
      <path
        d="M6 19C6.63819 16.6928 8.27998 16 12 16C15.72 16 17.3618 16.6425 18 18.9497"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
        />
    </g>
  </svg>
          </span>
        </div>
        {isAdmin && (
          <Link TagName="المعلمين" Location="/teachersInfo" Icon={<PersonIcon width="28px" />} />
        )}
      </ul>
      <SearchBar/>
      <a href="/home">
        <div className="logo">
          <div className="Sc_name">عبد المنعم رياض الثانوية</div>
          <img src={Logo} alt="logo" />
        </div>
      </a>
    </div>
    {isClicked && <SearchResults />}
    </>
  );
};

export default Header;
