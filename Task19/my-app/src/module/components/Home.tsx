import React, {useState} from "react";
import {ThemeContext, themes} from "../theme-context";
import {AnimalsMainComponent} from "./AnimalsMainComponent";

export function Home() {
    const [theme, setTheme] = useState(themes.light);
    const toggleTheme = () => {
        setTheme(() => theme === themes.dark ? themes.light : themes.dark);
    }
    return (
        <ThemeContext.Provider value={theme}>
        <div className="App">
        <AnimalsMainComponent changeTheme={toggleTheme}/>
    </div>
    </ThemeContext.Provider>
);
}
