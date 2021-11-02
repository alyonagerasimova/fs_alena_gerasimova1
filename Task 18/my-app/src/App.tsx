import './App.css';
import React, {useState} from "react";
import {ThemeContext, themes} from "./module/theme-context";
import {AnimalsMenu} from './module/components/AnimalsMenu';

export function App() {

    const [theme, setTheme] = useState(themes.light);
    const toggleTheme = () => {
        setTheme(() => theme === themes.dark ? themes.light : themes.dark);
    }

    return (
        <ThemeContext.Provider value={theme}>
            <div className="App">
                <AnimalsMenu changeTheme={toggleTheme}/>
            </div>
        </ThemeContext.Provider>
    );
}
