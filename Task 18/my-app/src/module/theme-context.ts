import React from "react";

export const themes = {
    light: {
        background: '#e6e6e6',
        borderColor: '#e0dddd',
        color: '#2a2a2a',
        filter: 'invert(0%)'
    },
    dark: {
        background: '#444444',
        borderColor: '#343434',
        color: '#e6e6e6',
        filter: 'invert(100%)'
    }
};

export const ThemeContext = React.createContext(
    themes.light
);
