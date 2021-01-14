import * as React from "react";

function SvgCircle(props) {
  return (
    <svg
      width={75}
      height={75}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.5 75C58.21 75 75 58.21 75 37.5S58.21 0 37.5 0 0 16.79 0 37.5 16.79 75 37.5 75zm0-3C56.554 72 72 56.554 72 37.5 72 18.446 56.554 3 37.5 3 18.446 3 3 18.446 3 37.5 3 56.554 18.446 72 37.5 72z"
        fill="#17171B"
      />
    </svg>
  );
}

export default SvgCircle;
