/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cyber: {
                    black: '#0a0a0a',
                    dark: '#121212',
                    cyan: '#00f3ff',
                    pink: '#ff00ff',
                    purple: '#bd00ff',
                    green: '#00ff9d',
                }
            },
            fontFamily: {
                mono: ['"Courier Prime"', 'monospace'],
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'glitch': 'glitch 1s linear infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                glitch: {
                    '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
                    '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
                    '62%': { transform: 'translate(0,0) skew(5deg)' },
                }
            }
        },
    },
    plugins: [],
}
