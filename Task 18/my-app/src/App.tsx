import './App.css';
import React, {useState} from "react";
import {ThemeContext, themes} from "./module/theme-context";
import { AnimalsMenu } from './module/components/AnimalsMenu';

export function App() {

    const [theme, setTheme] = useState(themes.light);
    const toggleTheme = () => {
        setTheme(() => theme === themes.dark ? themes.light : themes.dark);
    }

    return (
        <div className="App">
            <ThemeContext.Provider value={theme}>
                <AnimalsMenu changeTheme={toggleTheme}/>
            </ThemeContext.Provider>
        </div>
    );
}
