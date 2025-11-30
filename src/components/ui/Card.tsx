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
    <div className={`text-center p-6 rounded-xl bg-accent-cyan/[0.06] border border-accent-cyan/20 ${className}`}>
      <div
        className="text-3xl md:text-4xl font-bold font-heading"
        style={{
          background: "linear-gradient(135deg, #FFFFFF 0%, #00D4FF 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {value}
      </div>
      <div className="text-sm text-cool-400 mt-1">{label}</div>
    </div>
  );
};

export default Card;

