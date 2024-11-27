import React, { useState, useEffect } from "react";
import img from "../Assets/Imgs/logo.png";
import "../style/Signin.css";
import CopyRight from "../layout/CopyRight";
import Load from "../layout/Load";

export const Signin = () => {
  const [User, setUser] = useState({
    studentCode: "",
    uniqueCode: "",
  });
  const [IsFocused, setIsFocused] = useState(false);

  // Check for user data in localStorage and redirect if present
  localStorage.setItem("userData",[])
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData && userData !== "[]") {
      window.location.href = "/home";
    }
  }, []);

  // Handle input changes and vibrate on input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
    window.navigator.vibrate([50]);
  };

  // Save user data to localStorage and validate
  const handleSave = (e) => {
    const savedUser = localStorage.getItem("userData");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    if (User.studentCode.length === 7 && User.uniqueCode.length === 7) {
      localStorage.setItem("userData", JSON.stringify(User));
      window.location.href = "/home";
      window.navigator.vibrate(1700)

    } else {
          window.navigator.vibrate(700)
              e.target.classList.add("error");
      setTimeout(() => {
        e.target.classList.remove("error");
      }, 700);
    }
  };
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
    <div className="signin">
      <Load />
      <div className="container">
        <div className="text">
          <img src={img} alt="img" width="100px" />
        </div>
        <div className="inputs">
          <label className={IsFocused ? "focused" : "unfocused"} sup_title="كود الطالب">
            <input
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              type="number"
              name="studentCode"
              value={User.studentCode}
              onChange={handleInputChange}
              min="1111111"
              max="9999999"
              placeholder="كود الطالب"
            />
          </label>
          <label className={IsFocused ? "focused" : "unfocused"} sup_title="الكود المميز">
            <input
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              type="number"
              name="uniqueCode"
              title="يمكنك اخذ الكود من إدارة المدرسة"
              value={User.uniqueCode}
              onChange={handleInputChange}
              min="1000000"
              max="9999999"
              placeholder="الكود المميز"
            />
          </label>

          <button onClick={handleSave}>
            <span>
              <svg
                viewBox="0 -6.5 36 36"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                width={"20px"}
              >
              </svg>
            </span>
            تسجيل الدخول
          </button>
        </div>
      </div>
    </div>
  );
};
