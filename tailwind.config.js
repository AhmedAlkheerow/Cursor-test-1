/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F1A",
        slate: "#121826",
        mist: "#F8FAFC",
        line: "rgba(148, 163, 184, 0.2)",
        brand: "#5B7CFF",
        glow: "#7BE7FF",
        accent: "#8EE6D0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-space)", "var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 23, 42, 0.35)",
        glow: "0 0 0 1px rgba(91, 124, 255, 0.3), 0 20px 60px rgba(91, 124, 255, 0.35)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(80% 80% at 50% 0%, rgba(91, 124, 255, 0.25) 0%, rgba(11, 15, 26, 0) 70%)",
        grid:
          "linear-gradient(to right, rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.08) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "float-slow": "float-slow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
