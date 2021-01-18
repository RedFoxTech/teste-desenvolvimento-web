import * as React from "react";

function SvgCloud(props) {
  return (
    <svg
      width={50}
      height={50}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#cloud_svg__clip0)">
        <path
          d="M42.474 22.175c-.657-4.203-4.3-7.429-8.685-7.429-1.65 0-3.234.456-4.609 1.308a11.633 11.633 0 00-10.04-5.702c-6.461 0-11.718 5.257-11.718 11.718l.001.122C3.271 22.892 0 26.512 0 30.859c0 4.847 4.04 8.79 8.887 8.79h32.226c4.847 0 8.887-3.943 8.887-8.79 0-4.384-3.323-8.028-7.526-8.684z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="cloud_svg__clip0">
          <path fill="#fff" d="M0 0h50v50H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgCloud;
