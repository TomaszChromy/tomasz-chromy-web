import React from "react";
import profileImg from "../../assets/images/about-profile.png";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "full" | "icon" | "text";
  className?: string;
}

const sizes = {
  sm: { icon: 40, text: "text-sm" },
  md: { icon: 48, text: "text-base" },
  lg: { icon: 56, text: "text-lg" },
  xl: { icon: 72, text: "text-2xl" },
};

export const Logo: React.FC<LogoProps> = ({
  size = "md",
  variant = "full",
  className = "",
}) => {
  const { icon: iconSize, text: textSize } = sizes[size];

  const LogoIcon = () => (
    <img
      src={profileImg}
      alt="Tomasz Chromy"
      width={iconSize}
      height={iconSize}
      className="flex-shrink-0 rounded-full object-cover border-2 border-accent-blue/30 shadow-lg"
      style={{ width: iconSize, height: iconSize }}
    />
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

