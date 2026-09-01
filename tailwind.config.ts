import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0B0E1A",
          elevated: "#12162A",
          card: "#161B33",
          line: "#232945",
        },
        ink: {
          DEFAULT: "#EDEEF3",
          muted: "#8B92AE",
          faint: "#5C6383",
        },
        gold: {
          DEFAULT: "#E7A94C",
          soft: "#F2C983",
          dim: "#8A6B37",
        },
        violet: {
          DEFAULT: "#7C6FF2",
          soft: "#A79CFB",
          dim: "#4A4394",
        },
        light: {
          DEFAULT: "#FBF9F5",
          elevated: "#FFFFFF",
          card: "#F3F1EC",
          line: "#E3DFD4",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "twilight-glow":
          "radial-gradient(60% 50% at 80% 20%, rgba(124,111,242,0.20) 0%, rgba(124,111,242,0) 100%), radial-gradient(45% 40% at 15% 85%, rgba(231,169,76,0.14) 0%, rgba(231,169,76,0) 100%)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
