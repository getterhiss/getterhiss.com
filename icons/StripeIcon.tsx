import { SVGProps, memo } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={105}
    height={42}
    viewBox="0 0 105 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.63 16.372c0-1.032 1.035-1.548 2.415-1.548 2.071 0 4.832.688 6.903 1.892V10.18c-2.243-.86-4.66-1.376-6.903-1.376-5.522 0-9.32 2.924-9.32 7.912 0 7.568 10.356 6.192 10.356 9.632 0 1.202-1.036 1.72-2.589 1.72-2.244 0-5.177-1.034-7.421-2.238v6.538c2.589 1.032 5.005 1.548 7.421 1.548 5.695 0 9.492-2.752 9.492-7.74.172-8.256-10.355-6.708-10.355-9.804ZM50.601 33.4h6.903V9.32h-6.903V33.4ZM27.13 3.644 20.4 5.02v21.672c0 4.128 3.107 7.054 7.076 7.054 2.243 0 3.97-.344 4.832-.86v-5.504c-.863.344-5.177 1.548-5.177-2.408v-9.806h5.177V9.32h-5.177V3.644Zm14.496 7.74-.172-2.064h-6.213V33.4h6.903V17.06c1.726-2.064 4.66-1.72 5.523-1.376V9.32c-.863-.344-4.315-.86-6.04 2.064Zm8.975-3.956 6.903-1.376V.376l-6.903 1.376v5.676Zm53.845 13.932c0-7.052-3.452-12.556-10.01-12.556S83.91 14.308 83.91 21.36c0 8.256 4.66 12.384 11.39 12.384 3.279 0 5.695-.688 7.594-1.894v-5.33c-1.901 1.032-3.97 1.548-6.731 1.548-2.761 0-5.003-1.034-5.35-4.3h13.461c.173-.344.173-1.72.173-2.408Zm-13.634-2.58c0-3.096 1.898-4.3 3.624-4.3 1.726 0 3.452 1.204 3.452 4.3h-7.076ZM72.692 8.804c-2.761 0-4.315 1.204-5.35 2.236l-.173-1.72h-6.212v31.82l6.903-1.204v-7.74c1.035.688 2.414 1.72 4.832 1.72 5.003 0 9.492-3.956 9.492-12.728-.173-7.912-4.66-12.384-9.492-12.384Zm-1.726 18.92c-1.553 0-2.589-.516-3.279-1.376V16.2c.69-.86 1.726-1.376 3.28-1.376 2.588 0 4.314 2.752 4.314 6.364 0 3.784-1.726 6.536-4.315 6.536Z"
      fill={props.color || '#808080'}
    />
  </svg>
);

const Memo = memo(SvgComponent);
export default Memo;