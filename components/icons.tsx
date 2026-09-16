type IconProps = {
  className?: string;
};

const base = {
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const Bed = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" {...base}>
    <path
      d="M2 19v-5a2 2 0 0 1 2-2h13a3 3 0 0 1 3 3v4M2 15h18M6 12V9.5A1.5 1.5 0 0 1 7.5 8h3A1.5 1.5 0 0 1 12 9.5V12"
      stroke="currentColor"
    />
  </svg>
);

export const Wifi = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 48 48" {...base}>
    <path
      d="M16.6865 29.1801C17.6182 28.181 18.7447 27.3834 19.9966 26.8365C21.2484 26.2895 22.5986 26.0048 23.9647 26C25.3308 25.9953 26.6835 26.2705 27.9392 26.8087C29.1948 27.3468 30.3271 28.1365 31.2658 29.1291M12.2988 23.0881C13.7895 21.4895 15.5919 20.2134 17.5949 19.3383C19.5979 18.4632 21.7587 18.0078 23.9445 18.0001C26.1302 17.9925 28.2942 18.4328 30.3033 19.2939C32.3123 20.1549 34.124 21.4185 35.6258 23.0066M6.44727 17.6321C8.6833 15.2342 11.3869 13.32 14.3914 12.0073C17.3958 10.6947 20.6376 10.0116 23.9162 10.0001C27.1948 9.9887 30.4409 10.6492 33.4544 11.9408C36.4679 13.2324 39.1846 15.1278 41.4373 17.51M24 38C22.8954 38 22 37.1046 22 36C22 34.8955 22.8954 34 24 34C25.1046 34 26 34.8955 26 36C26 37.1046 25.1046 38 24 38Z"
      stroke="currentColor"
      strokeWidth="2.5"
    />
  </svg>
);

export const Tv = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" {...base}>
    <rect x="2.5" y="5" width="19" height="13" rx="2" stroke="currentColor" />
    <path d="M8 21h8" stroke="currentColor" />
  </svg>
);

export const Sofa = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" {...base}>
    <path
      d="M4 11V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2M2 13.5a2 2 0 0 1 4 0V16h12v-2.5a2 2 0 0 1 4 0V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3.5Z"
      stroke="currentColor"
    />
  </svg>
);

export const Users = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" {...base}>
    <path
      d="M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 20v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
      stroke="currentColor"
    />
  </svg>
);

export const Sparkle = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" {...base}>
    <path
      d="M12 2.5 14 9l6.5 2-6.5 2-2 6.5-2-6.5L3.5 11 10 9l2-6.5Z"
      stroke="currentColor"
    />
  </svg>
);

export const Shield = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" {...base}>
    <path
      d="M12 3 5 6v5.2c0 4.3 2.9 7.5 7 8.8 4.1-1.3 7-4.5 7-8.8V6l-7-3Z"
      stroke="currentColor"
    />
    <path d="m9 12 2 2 4-4" stroke="currentColor" />
  </svg>
);

export const Leaf = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" {...base}>
    <path
      d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
      stroke="currentColor"
    />
    <path d="M2 21c0-3 1.85-5.36 5.08-6" stroke="currentColor" />
  </svg>
);

export const Car = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 48 48" {...base}>
    <path
      d="M6 22H42M40 34V23.3582C40 22.8511 40.0002 22.5977 39.9688 22.3484C39.9408 22.127 39.8941 21.9081 39.8297 21.6944C39.7571 21.4538 39.6539 21.2223 39.448 20.759L36.3555 13.8008C35.744 12.4251 35.4383 11.737 34.9551 11.2327C34.5279 10.7868 34.0041 10.446 33.4232 10.2367C32.766 10 32.0126 10 30.5071 10H17.4922C15.9867 10 15.2343 10 14.5771 10.2367C13.9963 10.446 13.4721 10.7868 13.0449 11.2327C12.5617 11.737 12.2557 12.4251 11.6443 13.8008L8.55176 20.759C8.34582 21.2223 8.24244 21.4538 8.16992 21.6944C8.10551 21.9081 8.05937 22.127 8.03144 22.3484C8 22.5977 8 22.8511 8 23.3582V34M40 34L8 34M40 34V36C40 38.2091 38.2091 40 36 40C33.7909 40 32 38.2091 32 36V34M8 34V36C8 38.2091 9.79086 40 12 40C14.2091 40 16 38.2091 16 36V34"
      stroke="currentColor"
      strokeWidth="2.5"
    />
  </svg>
);

export const Coffee = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 49 49" {...base}>
    <path
      d="M14.436 30.4659H35.7871M14.0917 26.4482H36.1315M36.8657 17.884L35.2581 36.6398C35.0803 38.7142 34.9913 39.7512 34.5303 40.5361C34.1243 41.2272 33.5216 41.7811 32.7983 42.1266C31.977 42.5189 30.936 42.519 28.8539 42.519H21.3708C19.2888 42.519 18.2471 42.5189 17.4257 42.1266C16.7024 41.7811 16.0994 41.2272 15.6934 40.536C15.2324 39.7512 15.1435 38.7142 14.9656 36.6398L13.358 17.884C13.2542 16.6733 13.2024 16.0678 13.4062 15.6007C13.5852 15.1903 13.8962 14.8516 14.2898 14.6381C14.7378 14.3952 15.3455 14.3952 16.5606 14.3952H33.6638C34.8789 14.3952 35.4868 14.3952 35.9348 14.6381C36.3284 14.8516 36.6386 15.1903 36.8177 15.6007C37.0214 16.0678 36.9695 16.6733 36.8657 17.884ZM35.6528 14.3952H14.5713C12.7602 14.3952 11.8546 14.3952 11.3286 14.0161C10.8648 13.6819 10.5656 13.1659 10.5055 12.5974C10.4374 11.9526 10.8871 11.1664 11.7857 9.59387C12.457 8.41909 12.7926 7.83169 13.2637 7.40376C13.6848 7.02119 14.1823 6.73239 14.7234 6.55655C15.3286 6.35986 16.005 6.35986 17.358 6.35986H32.8667C34.2198 6.35986 34.8963 6.35986 35.5015 6.55655C36.0427 6.73239 36.5397 7.02119 36.9609 7.40376C37.4319 7.83169 37.7676 8.41909 38.4389 9.59387C39.3375 11.1664 39.787 11.9526 39.7188 12.5974C39.6588 13.1659 39.36 13.6819 38.8962 14.0161C38.3701 14.3952 37.4639 14.3952 35.6528 14.3952Z"
      stroke="currentColor"
      strokeWidth="2.5"
    />
  </svg>
);

export const Mug = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" {...base}>
    <path
      d="M4 8h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8ZM16 9h1.5a2.5 2.5 0 0 1 0 5H16M6 3v2M10 3v2M14 3v2"
      stroke="currentColor"
    />
  </svg>
);

export const Washer = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" {...base}>
    <rect x="5" y="2.5" width="14" height="19" rx="2.5" stroke="currentColor" />
    <circle cx="12" cy="13.5" r="4" stroke="currentColor" />
    <path d="M5 7h14M8.5 4.5h.01M11 4.5h.01" stroke="currentColor" />
  </svg>
);

export const Tag = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" {...base}>
    <path
      d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7.2-7.2A2 2 0 0 1 2.8 12V5a2 2 0 0 1 2-2h7a2 2 0 0 1 1.4.6l7.4 7.4a2 2 0 0 1 0 2.8Z"
      stroke="currentColor"
    />
    <circle cx="7.5" cy="7.5" r="1.4" stroke="currentColor" />
  </svg>
);

export const ChefHat = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" {...base}>
    <path
      d="M7 21h10M7.5 21v-4.2M16.5 21v-4.2M7.5 16.8C5.3 16.8 3.5 15 3.5 12.8c0-2 1.5-3.6 3.4-3.9A4.6 4.6 0 0 1 12 5a4.6 4.6 0 0 1 5.1 3.9c1.9.3 3.4 1.9 3.4 3.9 0 2.2-1.8 4-4 4H7.5Z"
      stroke="currentColor"
    />
  </svg>
);

export const Heart = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" {...base}>
    <path
      d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"
      stroke="currentColor"
    />
  </svg>
);

export const Star = ({ className }: IconProps) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.2l5.9-.9L12 3Z" />
  </svg>
);

export const Phone = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" {...base}>
    <path
      d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z"
      stroke="currentColor"
    />
  </svg>
);

export const Pin = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" {...base}>
    <path
      d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z"
      stroke="currentColor"
    />
    <circle cx="12" cy="10" r="2.5" stroke="currentColor" />
  </svg>
);

export const ArrowRight = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" {...base}>
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" />
  </svg>
);

export const ArrowLeft = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" {...base}>
    <path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" />
  </svg>
);

export const Navigation = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" {...base}>
    <path d="m3 11 18-8-8 18-2-8-8-2Z" stroke="currentColor" />
  </svg>
);

export const Diamond = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" {...base}>
    <path d="M12 3 4.5 9 12 21 19.5 9 12 3Z" stroke="currentColor" />
  </svg>
);
