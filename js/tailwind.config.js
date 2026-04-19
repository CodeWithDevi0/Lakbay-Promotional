tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out infinite 1s",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "cursor-drift": "cursorDrift 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        cursorDrift: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(24px, -16px)" },
          "50%": { transform: "translate(-8px, 12px)" },
          "75%": { transform: "translate(16px, 8px)" },
        },
      },
    },
  },
};
