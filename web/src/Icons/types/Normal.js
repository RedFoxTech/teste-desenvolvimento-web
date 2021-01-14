import * as React from "react";

function SvgNormal(props) {
  return (
    <svg
      width={25}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 12.5C25 19.404 19.404 25 12.5 25S0 19.404 0 12.5 5.596 0 12.5 0 25 5.596 25 12.5zm-5.357 0a7.143 7.143 0 11-14.286 0 7.143 7.143 0 0114.286 0z"
        fill="#17171B"
      />
    </svg>
  );
}

export default SvgNormal;
