import React from "react";

type BadgeVariant = "default" | "cyan" | "blue" | "gold" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-cool-500/10 text-cool-200 border-cool-500/20",
  cyan: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20",
  blue: "bg-accent-blue/10 text-accent-blue border-accent-blue/20",
  gold: "bg-accent-gold/10 text-accent-gold border-accent-gold/20",
  outline: "bg-transparent text-cool-300 border-cool-500/20",
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "cyan",
  className = "",
}) => {
  return (
    <span
      className={`
        inline-flex items-center
        px-3 py-1
        rounded-full
        text-xs font-medium tracking-wider uppercase
        border
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

// ========================
// LABEL COMPONENT
// ========================

interface LabelProps {
  children: React.ReactNode;
  className?: string;
}

export const Label: React.FC<LabelProps> = ({ children, className = "" }) => {
  return (
    <span
      className={`
        inline-flex items-center
        text-xs font-semibold
        uppercase tracking-[0.25em]
        text-accent-blue
        ${className}
      `}
    >
      {children}
    </span>
  );
};

// ========================
// SECTION HEADER COMPONENT
// ========================

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  subtitle,
  align = "left",
  className = "",
}) => {
  const alignClasses = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 mb-12 ${alignClasses} ${className}`}>
      {label && <Label>{label}</Label>}
      <h2 className="text-section-mobile md:text-section font-heading text-cool-50">
        {title}
      </h2>
      {subtitle && (
        <p className="text-body-lg text-cool-400 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Badge;

