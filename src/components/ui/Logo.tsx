import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "full" | "icon" | "text";
  className?: string;
}

const sizes = {
  sm: { icon: 36, text: "text-sm" },
  md: { icon: 44, text: "text-base" },
  lg: { icon: 52, text: "text-lg" },
  xl: { icon: 68, text: "text-2xl" },
};

export const Logo: React.FC<LogoProps> = ({
  size = "md",
  variant = "full",
  className = "",
}) => {
  const { icon: iconSize, text: textSize } = sizes[size];

  const LogoIcon = () => (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <defs>
        {/* Main gradient */}
        <linearGradient id="logoGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0F62FE" />
          <stop offset="50%" stopColor="#0891B2" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        {/* Chart line gradient */}
        <linearGradient id="chartLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
        {/* Glow effect */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        {/* Area fill gradient */}
        <linearGradient id="areaFill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Background rounded square */}
      <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#logoGradient)" />

      {/* Subtle grid lines */}
      <line x1="12" y1="48" x2="52" y2="48" stroke="white" strokeOpacity="0.15" strokeWidth="0.5" />
      <line x1="12" y1="38" x2="52" y2="38" stroke="white" strokeOpacity="0.1" strokeWidth="0.5" />
      <line x1="12" y1="28" x2="52" y2="28" stroke="white" strokeOpacity="0.1" strokeWidth="0.5" />

      {/* Area under chart */}
      <path
        d="M12 48 L18 42 L26 38 L34 32 L42 24 L50 14 L50 48 Z"
        fill="url(#areaFill)"
      />

      {/* Growth chart line */}
      <path
        d="M12 48 L18 42 L26 38 L34 32 L42 24 L50 14"
        stroke="url(#chartLineGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#glow)"
      />

      {/* Data points */}
      <circle cx="18" cy="42" r="2.5" fill="white" />
      <circle cx="34" cy="32" r="2.5" fill="white" />
      <circle cx="50" cy="14" r="3.5" fill="white" filter="url(#glow)" />

      {/* Arrow pointing up at the end */}
      <path
        d="M50 14 L46 20 M50 14 L54 18"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* Decorative accent */}
      <circle cx="50" cy="14" r="5" fill="none" stroke="white" strokeOpacity="0.3" strokeWidth="1" />
    </svg>
  );

  const LogoText = () => (
    <div className="flex flex-col">
      <span className={`font-heading font-bold text-cool-50 ${textSize} tracking-wide`}>
        TOMASZ CHROMY
      </span>
      <span className="text-[11px] text-cool-400 tracking-wider">
        Strategic Growth Partner
      </span>
    </div>
  );

  if (variant === "icon") {
    return <LogoIcon />;
  }

  if (variant === "text") {
    return <LogoText />;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoIcon />
      <LogoText />
    </div>
  );
};

// Footer logo with different styling
export const FooterLogo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex flex-col items-start ${className}`}>
    {/* POWERED BY TOMASZ CHROMY - styled like TomSoft/WEBSITE */}
    <div className="mb-2">
      <span className="text-xs text-cool-400 tracking-widest uppercase block">
        POWERED BY
      </span>
      <span className="text-base font-semibold text-orange-500">
        TOMASZ CHROMY
      </span>
    </div>

    {/* Collaboration symbol */}
    <span className="text-xl text-cool-500 my-1">&</span>

    <a
      href="https://tomsoft-website.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-start group transition-all duration-300 hover:opacity-90 mt-1"
    >
      <span className="text-base font-semibold text-orange-500 group-hover:text-orange-400 transition-colors">
        TomSoft
      </span>
      <span className="text-xs text-cool-400 tracking-widest uppercase">
        WEBSITE
      </span>
    </a>
  </div>
);

export default Logo;

