/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      // ===========================
      // BRAND COLORS - LIGHT MODE
      // ===========================
      colors: {
        // Primary backgrounds (light theme)
        navy: {
          950: "#FFFFFF",
          900: "#F8FAFC",
          800: "#F1F5F9",
          700: "#E2E8F0",
          600: "#CBD5E1",
        },
        // Accent colors
        accent: {
          blue: "#0F62FE",
          cyan: "#0891B2",
          gold: "#D97706",
        },
        // Neutrals (inverted for light mode)
        cool: {
          50: "#0F172A",
          100: "#1E293B",
          200: "#334155",
          300: "#475569",
          400: "#64748B",
          500: "#94A3B8",
        },
      },

      // ===========================
      // TYPOGRAPHY
      // ===========================
      fontFamily: {
        heading: ["'Space Grotesk'", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "'Fira Code'", "monospace"],
      },
      fontSize: {
        // Hero sizes
        "hero": ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "hero-mobile": ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }],
        // Section heading
        "section": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "section-mobile": ["1.75rem", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "600" }],
        // Card heading
        "card-title": ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
        // Body variants
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        // Label
        "label": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.1em", fontWeight: "600" }],
      },

      // ===========================
      // SPACING
      // ===========================
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
        "section": "7.5rem",
        "section-mobile": "5rem",
      },

      // ===========================
      // SHADOWS
      // ===========================
      boxShadow: {
        "card": "0 4px 20px rgba(0,0,0,0.08)",
        "card-hover": "0 12px 40px rgba(0,0,0,0.12)",
        "glow-blue": "0 8px 32px rgba(15, 98, 254, 0.2)",
        "glow-blue-lg": "0 15px 45px rgba(15, 98, 254, 0.25)",
        "glow-cyan": "0 0 60px rgba(8, 145, 178, 0.1)",
        "btn": "0 4px 16px rgba(15, 98, 254, 0.25)",
        "btn-hover": "0 8px 24px rgba(15, 98, 254, 0.35)",
      },

      // ===========================
      // BORDER RADIUS
      // ===========================
      borderRadius: {
        "card": "1.25rem",
        "card-lg": "1.5rem",
        "btn": "0.75rem",
        "badge": "9999px",
      },

      // ===========================
      // ANIMATIONS
      // ===========================
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-down": "fadeInDown 0.6s ease-out forwards",
        "fade-in-left": "fadeInLeft 0.6s ease-out forwards",
        "fade-in-right": "fadeInRight 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.4s ease-out forwards",
        "slide-in-left": "slideInLeft 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
        "pulse-slower": "pulseSlow 6s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-up": "floatUp 20s linear infinite",
        "grid-fade": "gridFade 8s ease-in-out infinite",
        "bounce-subtle": "bounceSubtle 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "blink": "blink 1s step-end infinite",
        "spin-slow": "spin 8s linear infinite",
        "spin-slower": "spin 12s linear infinite reverse",
        "scroll-down": "scrollDown 1.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        floatUp: {
          "0%": { transform: "translateY(100vh)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-100vh)", opacity: "0" },
        },
        gridFade: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.6" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scrollDown: {
          "0%": { opacity: "0", transform: "translateY(0)" },
          "30%": { opacity: "1" },
          "60%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateY(8px)" },
        },
      },

      // ===========================
      // TRANSITIONS
      // ===========================
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.16, 1, 0.3, 1)",
        "bounce-soft": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },

      // ===========================
      // BACKDROP BLUR
      // ===========================
      backdropBlur: {
        xs: "2px",
      },

      // ===========================
      // GRADIENTS (via backgroundImage)
      // ===========================
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-hero": "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #F1F5F9 100%)",
        "gradient-accent": "linear-gradient(135deg, #0F62FE 0%, #0891B2 100%)",
        "gradient-card": "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)",
        "gradient-glow": "radial-gradient(ellipse at center, rgba(15,98,254,0.08) 0%, transparent 70%)",
        "grid-pattern": `
          linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
    },
  },
  plugins: [],
};
