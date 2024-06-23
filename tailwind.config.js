/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-yellow': '#E7F133',
                'color-hover': 'rgba(231, 241, 51, .85)',
                'paragraph': 'rgba(255,255,255,0.8)',
            },
        },
    },
    plugins: [],
}

