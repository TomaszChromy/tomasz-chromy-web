import React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  as?: "button" | "a";
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: `
    bg-gradient-to-r from-accent-blue to-blue-600
    text-white font-semibold
    shadow-btn
    hover:-translate-y-0.5 hover:shadow-btn-hover
  `,
  secondary: `
    bg-white border border-cool-500/20
    text-cool-100 font-semibold
    shadow-card
    hover:bg-navy-800 hover:border-cool-500/30 hover:-translate-y-0.5 hover:shadow-card-hover
  `,
  ghost: `
    bg-transparent
    text-accent-blue font-medium
    hover:text-cool-100
  `,
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm rounded-lg gap-2",
  md: "px-8 py-4 text-[15px] rounded-xl gap-2.5",
  lg: "px-10 py-5 text-base rounded-xl gap-3",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  fullWidth = false,
  as = "button",
  href,
  className = "",
  ...props
}) => {
  const baseClasses = `
    inline-flex items-center justify-center
    tracking-wide
    transition-all duration-300 ease-smooth
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
  `;

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `.trim().replace(/\s+/g, " ");

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1">
          {icon}
        </span>
      )}
      {variant === "ghost" && !icon && (
        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
      )}
    </>
  );

  if (as === "a" && href) {
    return (
      <a href={href} className={`group ${classes}`} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button className={`group ${classes}`} {...props}>
      {content}
    </button>
  );
};

export default Button;

