import { forwardRef, memo, Ref, SVGProps } from 'react'

const SvgElement = (Props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg
      width="157"
      height="36"
      viewBox="0 0 157 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...Props}
      ref={ref}
    >
      <path
        d="M70.9892 24.716C69.7047 24.716 68.5403 24.4392 67.4959 23.8857C66.4636 23.32 65.6473 22.5438 65.047 21.557C64.4588 20.5582 64.1647 19.433 64.1647 18.1814C64.1647 16.9298 64.4588 15.8106 65.047 14.8238C65.6473 13.8249 66.4636 13.0487 67.4959 12.4951C68.5403 11.9295 69.7107 11.6467 71.0072 11.6467C72.0996 11.6467 73.0839 11.8393 73.9602 12.2244C74.8485 12.6095 75.5928 13.1631 76.193 13.8851L74.3203 15.6181C73.468 14.6312 72.4117 14.1378 71.1512 14.1378C70.3709 14.1378 69.6747 14.3123 69.0625 14.6613C68.4503 14.9983 67.9701 15.4737 67.622 16.0874C67.2858 16.7012 67.1178 17.3991 67.1178 18.1814C67.1178 18.9636 67.2858 19.6616 67.622 20.2754C67.9701 20.8891 68.4503 21.3705 69.0625 21.7195C69.6747 22.0564 70.3709 22.2249 71.1512 22.2249C72.4117 22.2249 73.468 21.7255 74.3203 20.7266L76.193 22.4596C75.5928 23.1937 74.8485 23.7533 73.9602 24.1384C73.0719 24.5235 72.0815 24.716 70.9892 24.716Z"
        fill="white"
      />
      <path
        d="M83.6574 24.716C81.8567 24.716 80.4522 24.2166 79.4439 23.2178C78.4475 22.2189 77.9493 20.7928 77.9493 18.9395V11.8633H80.8664V18.8312C80.8664 21.0937 81.8027 22.2249 83.6754 22.2249C84.5877 22.2249 85.2839 21.9541 85.7641 21.4126C86.2443 20.859 86.4844 19.9986 86.4844 18.8312V11.8633H89.3654V18.9395C89.3654 20.7928 88.8612 22.2189 87.8529 23.2178C86.8565 24.2166 85.458 24.716 83.6574 24.716Z"
        fill="white"
      />
      <path
        d="M101.503 17.9287C102.224 18.1573 102.788 18.5424 103.196 19.084C103.604 19.6135 103.808 20.2693 103.808 21.0516C103.808 22.1587 103.376 23.0132 102.512 23.6149C101.659 24.2046 100.411 24.4994 98.7663 24.4994H92.248V11.8633H98.4062C99.9427 11.8633 101.119 12.1582 101.935 12.7479C102.764 13.3376 103.178 14.1378 103.178 15.1487C103.178 15.7625 103.028 16.31 102.728 16.7914C102.44 17.2728 102.031 17.6519 101.503 17.9287ZM95.147 14.0656V17.0441H98.046C98.7663 17.0441 99.3125 16.9178 99.6846 16.6651C100.057 16.4123 100.243 16.0393 100.243 15.5459C100.243 15.0524 100.057 14.6854 99.6846 14.4447C99.3125 14.192 98.7663 14.0656 98.046 14.0656H95.147ZM98.5502 22.2971C99.3185 22.2971 99.8947 22.1708 100.279 21.918C100.675 21.6653 100.873 21.2742 100.873 20.7447C100.873 19.6977 100.099 19.1742 98.5502 19.1742H95.147V22.2971H98.5502Z"
        fill="white"
      />
      <path
        d="M114.317 21.7917H108.465L107.349 24.4994H104.36L109.978 11.8633H112.859L118.495 24.4994H115.434L114.317 21.7917ZM113.399 19.5713L111.4 14.7335L109.402 19.5713H113.399Z"
        fill="white"
      />
      <path
        d="M121.781 14.2461H117.747V11.8633H128.731V14.2461H124.698V24.4994H121.781V14.2461Z"
        fill="white"
      />
      <path
        d="M136.229 24.716C134.92 24.716 133.738 24.4332 132.682 23.8676C131.637 23.302 130.815 22.5258 130.215 21.539C129.627 20.5401 129.332 19.4209 129.332 18.1814C129.332 16.9418 129.627 15.8287 130.215 14.8418C130.815 13.843 131.637 13.0608 132.682 12.4951C133.738 11.9295 134.92 11.6467 136.229 11.6467C137.537 11.6467 138.714 11.9295 139.758 12.4951C140.802 13.0608 141.625 13.843 142.225 14.8418C142.825 15.8287 143.125 16.9418 143.125 18.1814C143.125 19.4209 142.825 20.5401 142.225 21.539C141.625 22.5258 140.802 23.302 139.758 23.8676C138.714 24.4332 137.537 24.716 136.229 24.716ZM136.229 22.2249C136.973 22.2249 137.645 22.0564 138.246 21.7195C138.846 21.3705 139.314 20.8891 139.65 20.2754C139.998 19.6616 140.172 18.9636 140.172 18.1814C140.172 17.3991 139.998 16.7012 139.65 16.0874C139.314 15.4737 138.846 14.9983 138.246 14.6613C137.645 14.3123 136.973 14.1378 136.229 14.1378C135.485 14.1378 134.812 14.3123 134.212 14.6613C133.612 14.9983 133.138 15.4737 132.79 16.0874C132.454 16.7012 132.285 17.3991 132.285 18.1814C132.285 18.9636 132.454 19.6616 132.79 20.2754C133.138 20.8891 133.612 21.3705 134.212 21.7195C134.812 22.0564 135.485 22.2249 136.229 22.2249Z"
        fill="white"
      />
      <path
        d="M153.348 24.4994L150.918 20.9794H150.774H148.235V24.4994H145.318V11.8633H150.774C151.89 11.8633 152.856 12.0499 153.673 12.4229C154.501 12.796 155.137 13.3255 155.581 14.0115C156.025 14.6974 156.247 15.5098 156.247 16.4484C156.247 17.3871 156.019 18.1994 155.563 18.8854C155.119 19.5593 154.483 20.0768 153.655 20.4378L156.482 24.4994H153.348ZM153.294 16.4484C153.294 15.7384 153.066 15.1969 152.61 14.8238C152.154 14.4387 151.488 14.2461 150.611 14.2461H148.235V18.6507H150.611C151.488 18.6507 152.154 18.4582 152.61 18.0731C153.066 17.688 153.294 17.1464 153.294 16.4484Z"
        fill="white"
      />
      <path d="M0 11.8784H2.91247V24.4725H0V11.8784Z" fill="white" />
      <path
        d="M8.50595 14.2533H4.47883V11.8784H15.4455V14.2533H11.4184V24.4725H8.50595V14.2533Z"
        fill="white"
      />
      <path d="M33.7413 11.8784H36.6578V24.4725H33.7413V11.8784Z" fill="white" />
      <path
        d="M51.2066 11.8784V24.4725H48.8122L42.5291 16.8261V24.4725H39.6486V11.8784H42.061L48.3261 19.5248V11.8784H51.2066Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.987 6.53491C36.0696 6.53491 36.9474 7.41271 36.9474 8.49531C36.9474 9.5779 36.0696 10.4557 34.987 10.4557C33.9044 10.4557 33.0266 9.5779 33.0266 8.49531C33.0266 7.41271 33.9044 6.53491 34.987 6.53491Z"
        fill="#F23D61"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.4921 16.0371C20.6078 16.0371 21.512 16.9146 21.512 17.9975C21.512 19.0804 20.6078 19.9579 19.4921 19.9579C18.3765 19.9579 17.4724 19.0804 17.4724 17.9975C17.4724 16.9146 18.3765 16.0371 19.4921 16.0371Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.4778 34.5C51.5905 34.5 58.9778 27.1127 58.9778 18C58.9778 8.8873 51.5905 1.5 42.4778 1.5C33.3651 1.5 25.9778 8.8873 25.9778 18C25.9778 27.1127 33.3651 34.5 42.4778 34.5ZM42.4778 36C52.419 36 60.4778 27.9411 60.4778 18C60.4778 8.05887 52.419 0 42.4778 0C32.5367 0 24.4778 8.05887 24.4778 18C24.4778 27.9411 32.5367 36 42.4778 36Z"
        fill="white"
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgElement)

export default memo(ForwardRef)
