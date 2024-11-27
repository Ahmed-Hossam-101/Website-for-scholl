import * as React from "react";
const InfoIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <circle
        opacity={0.5}
        cx={12}
        cy={12}
        r={10}
        stroke="#1C274C"
        strokeWidth={1.5}
      />
      <path
        d="M12 17V11"
        stroke="#1C274C"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <circle
        cx={1}
        cy={1}
        r={1}
        transform="matrix(1 0 0 -1 11 9)"
        fill="#1C274C"
      />
    </g>
  </svg>
);
export default InfoIcon;
