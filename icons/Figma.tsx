import { SVGProps, memo } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={56}
    height={56}
    viewBox="0 0 39 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.5 57c5.244 0 9.5-4.256 9.5-9.5V38H9.5C4.256 38 0 42.256 0 47.5S4.256 57 9.5 57Z"
      fill="#0ACF83"
    />
    <path
      d="M0 28.503c0-5.244 4.256-9.5 9.5-9.5H19v19H9.5c-5.244 0-9.5-4.255-9.5-9.5Z"
      fill="#A259FF"
    />
    <path
      d="M0 9.5C0 4.256 4.256 0 9.5 0H19v19H9.5C4.256 19 0 14.744 0 9.5Z"
      fill="#F24E1E"
    />
    <path
      d="M19.01 0h9.5c5.245 0 9.5 4.256 9.5 9.5s-4.255 9.5-9.5 9.5h-9.5V0Z"
      fill="#FF7262"
    />
    <path
      d="M38.01 28.503c0 5.245-4.255 9.5-9.5 9.5-5.244 0-9.5-4.255-9.5-9.5 0-5.244 4.256-9.5 9.5-9.5 5.245 0 9.5 4.256 9.5 9.5Z"
      fill="#1ABCFE"
    />
  </svg>
);

const Memo = memo(SvgComponent);
export default Memo;
