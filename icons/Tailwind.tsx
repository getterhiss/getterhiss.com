import { SVGProps, memo } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={66}
    height={66}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M32.307 14.949c-10.66.339-13.827 7.953-14.553 12.078.946-1.53 3.927-4.884 8.316-4.884 5.115 0 9.009 5.709 11.385 7.491 2.887 2.165 8.687 5.024 16.302 2.706 6.072-1.848 8.888-8.294 9.504-11.352-2.937 3.993-7.392 6.391-12.903 3.564-3.795-1.947-6.633-9.966-18.051-9.603ZM17.226 33.066C6.567 33.405 3.4 41.019 2.673 45.144c.946-1.53 3.927-4.884 8.316-4.884 5.115 0 9.01 5.709 11.385 7.491 2.887 2.165 8.687 5.024 16.302 2.706 6.072-1.848 8.888-8.294 9.504-11.352-2.937 3.993-7.392 6.391-12.903 3.564-3.795-1.947-6.633-9.966-18.05-9.603Z"
      fill="#07B6D5"
    />
  </svg>
);

const Memo = memo(SvgComponent);
export default Memo;