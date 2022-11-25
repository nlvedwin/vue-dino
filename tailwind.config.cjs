/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#8BEDFD",
                    100: "#77EAFC",
                    200: "#4FE3FC",
                    300: "#27DDFB",
                    400: "#05D3F4",
                    500: "#04B0CC",
                    600: "#038195",
                    700: "#02515E",
                    800: "#012227",
                    900: "#000000",
                },
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
}
