/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#C5F3ED",
                    100: "#B4F0E8",
                    200: "#93E9DE",
                    300: "#71E2D4",
                    400: "#4FDBC9",
                    500: "#2DD4BF",
                    600: "#22A796",
                    700: "#19786C",
                    800: "#0F4A42",
                    900: "#061B18",
                },
            },
        },
    },
    plugins: [],
}
