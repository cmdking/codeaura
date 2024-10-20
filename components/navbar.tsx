import Link from 'next/link';
import React from 'react';

interface BackArrowSvgProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Optional color property
}

const BackArrowSvg: React.FC<BackArrowSvgProps> = ({ color = 'white', ...props }) => (
  <Link href="/" className="back-arrow-link">
    <svg
      width="25"
      height="20"
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.499 0.498047L0.5 3.50005L3.5 6.50005"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 9.5H10.5C12.5 9.5 13.5 8.5 13.5 6.5C13.5 3.5 12.5 3.5 10.5 3.5H0.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Link>
);

export default BackArrowSvg;
