import * as React from "react";

function SvgSearch(props) {
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
        d="M15.235 17.029a8.027 8.027 0 111.794-1.794c.126.062.244.146.35.251l4.73 4.73a1.338 1.338 0 01-1.893 1.892l-4.73-4.73a1.335 1.335 0 01-.251-.35zm.643-6.502a5.351 5.351 0 11-10.702 0 5.351 5.351 0 0110.702 0z"
        fill="#17171B"
      />
    </svg>
  );
}

export default SvgSearch;
