import * as React from "react";

function SvgFighting(props) {
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
        d="M4.312 2.078a2.759 2.759 0 014.982-.828h.806a2.758 2.758 0 014.509.833h.675a2.758 2.758 0 013.992 1.25h1.835c.016 0 .03.005.043.012a2.758 2.758 0 013.012 2.746v8.419c0 .05 0 .1-.003.15C23.997 20.396 18.839 25 12.5 25 6.057 25 .833 20.243.833 14.375c0-2.832 1.217-5.406 3.201-7.31-.005 2.76.042 5.615.257 5.566.576-.13.126-8.684.02-10.553z"
      />
    </svg>
  );
}

export default SvgFighting;
