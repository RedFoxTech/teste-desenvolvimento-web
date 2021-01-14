import * as React from "react";

function SvgBack(props) {
  return (
    <svg
      width={25}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.216 11.223H6.88l6.263-6.263a1.294 1.294 0 00-.415-2.1 1.279 1.279 0 00-1.394.277l-8.459 8.458a1.279 1.279 0 000 1.81l8.459 8.458a1.28 1.28 0 001.81-1.81L6.88 13.79h14.336c.706 0 1.284-.577 1.284-1.283s-.578-1.284-1.284-1.284z"
        fill="#17171B"
      />
    </svg>
  );
}

export default SvgBack;
