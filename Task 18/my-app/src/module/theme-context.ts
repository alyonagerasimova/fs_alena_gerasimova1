import React from "react";

export const themes = {
    light: {
        background: '#e6e6e6',
        borderColor: '#e0dddd'
    },
    dark: {
        background: '#7e8a9d',
        borderColor: '#616b7e',
    }
};

export const ThemeContext = React.createContext(
    themes.light
);
