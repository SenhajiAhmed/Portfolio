/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                // We can add custom colors here if needed to match the starry theme perfectly,
                // but default palette is usually sufficient for basics.
            }
        },
    },
    plugins: [],
}
