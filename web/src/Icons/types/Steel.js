import * as React from "react";

function SvgSteel(props) {
  return (
    <svg
      width={25}
      height={25}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.002 12.515a.018.018 0 010-.018L6.29 1.757a.018.018 0 01.016-.01h12.46c.006 0 .012.004.015.01l6.217 10.74a.018.018 0 010 .018L18.78 23.244a.018.018 0 01-.016.009H6.304a.018.018 0 01-.015-.01L.002 12.516zm18.29-.015a5.79 5.79 0 11-11.58 0 5.79 5.79 0 0111.58 0z"
      />
    </svg>
  );
}

export default SvgSteel;
