import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = true,
  glow = false,
}) => {
  return (
    <div
      className={`
        relative overflow-hidden
        rounded-[1.5rem]
        border border-white/[0.06]
        bg-gradient-to-br from-white/[0.03] to-white/[0.01]
        p-8
        backdrop-blur-sm
        ${hover ? "transition-all duration-400 ease-smooth hover:-translate-y-2 hover:border-accent-cyan/30 hover:shadow-card-hover" : ""}
        ${glow ? "glow-cyan" : ""}
        ${className}
      `}
    >
      {/* Hover glow overlay */}
      {hover && (
        <div
          className="absolute inset-0 rounded-[1.5rem] opacity-0 transition-opacity duration-400 pointer-events-none
            hover-parent:opacity-100"
          style={{
            background: "linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(15,98,254,0.04) 100%)",
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// ========================
// SERVICE CARD COMPONENT
// ========================

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  className = "",
}) => {
  return (
    <Card className={className}>
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center text-white mb-6 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-3 font-heading">
        {title}
      </h3>

      {/* Description */}
      <p className="text-cool-300 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Features list */}
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-cool-400">
              <span className="text-accent-cyan mt-0.5">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

// ========================
// METRIC CARD COMPONENT
// ========================

interface MetricCardProps {
  value: string;
  label: string;
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  value,
  label,
  className = "",
}) => {
  return (
    <div
      className={`
        group relative text-center px-4 py-5 sm:px-6 sm:py-7
        rounded-2xl border border-sky-200/70
        bg-sky-50/60 backdrop-blur
        shadow-sm transition-all duration-300
        hover:-translate-y-0.5 hover:shadow-md
        ${className}
      `}
    >
      {/* Subtle accent bar at top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 rounded-t-2xl bg-sky-400/70" />

      {/* Value - hero element with strong contrast */}
      <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-sky-600">
        {value}
      </div>

      {/* Label - calm, non-competing */}
      <div className="mt-1 text-xs sm:text-sm font-medium text-slate-600 leading-tight">
        {label}
      </div>
    </div>
  );
};

export default Card;

