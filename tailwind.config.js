import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
        screens: {
            'phone': '480px',  // => @media (min-width: 480px) { ... }
            'tablet': '640px', // => @media (min-width: 640px) { ... }
            'laptop': '1024px',  // => @media (min-width: 1024px) { ... }
            'desktop': '1280px', // => @media (min-width: 1280px) { ... }
            'tv': '1920px',  // => @media (min-width: 1920px) { ... } (TV-specific breakpoint)
          },
          fontFamily: {
            Honk: ['"Honk"', 'sans-serif'],
            Prompt: ['"Prompt"', 'sans-serif'],
            
          },
          colors: {
            primary: {
              light: '#ECF1FF',
              DEFAULT: '#FAFAFA',
              dark: '#171819  ',
              light_button : '#d4d8e5',
              dark_button : '#000000',
            },
            secondary: {
              light: '#F7F7F7',
              DEFAULT: '#F7F7F7',
              dark: '#F7F7F7',
            },
            accent: {
              light: '#F7F7F7',
              DEFAULT: '#F7F7F7',
              dark: '#F7F7F7',
            },
            neutral: {
              light: '#F7F7F7',
              DEFAULT: '#F7F7F7',
              dark: '#F7F7F7',
            },
          },
    },
    plugins: [
        forms,
        require('@tailwindcss/typography')
    ],
};
