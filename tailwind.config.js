/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F7F2",
        fog: "#FBFBF8",
        ink: "#101010",
        muted: "#5B5B5B",
        line: "#E5E5DF",
        accent: "#E62B2D",
        accentDark: "#C52025",
        charcoal: "#0A0A0A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        display: [
          "var(--font-space)",
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
        ],
      },
      boxShadow: {
        soft: "0 20px 50px rgba(15, 15, 15, 0.08)",
        crisp: "0 1px 0 rgba(16, 16, 16, 0.04), 0 12px 30px rgba(16, 16, 16, 0.08)",
      },
      backgroundImage: {
        "hero-sheen":
          "radial-gradient(70% 80% at 70% 0%, rgba(230, 43, 45, 0.16) 0%, rgba(247, 247, 242, 0) 65%)",
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
