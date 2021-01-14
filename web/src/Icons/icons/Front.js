import * as React from "react";

function SvgFront(props) {
  return (
    <svg
      width={25}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.784 11.223H18.12L11.857 4.96a1.294 1.294 0 01.415-2.1 1.279 1.279 0 011.394.277l8.459 8.458a1.279 1.279 0 010 1.81l-8.459 8.458a1.28 1.28 0 01-1.81-1.81l6.264-6.263H3.783A1.287 1.287 0 012.5 12.507c0-.706.578-1.284 1.284-1.284z"
        fill="#17171B"
      />
    </svg>
  );
}

export default SvgFront;
