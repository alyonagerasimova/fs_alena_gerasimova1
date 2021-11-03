import './App.css';
import './module/components/forms.css';
import React, {useState} from "react";
import {ThemeContext, themes} from "./module/theme-context";
import {AnimalsMenu} from './module/components/AnimalsMenu';
import {AnimalCreate} from "./module/components/AnimalCreate";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export function App() {

    return (
        <Router>
            <div>
                <Link to="/">Список животных</Link>
            </div>
            <div>
                <Link to="/create">Добавить животного</Link>
            </div>
            <div>
                <Link to="/edit">Редактировать животного</Link>
            </div>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/create">
                    <div className="container">
                        <div className="content">
                            <AnimalCreate/>
                        </div>
                    </div>
                </Route>
                <Route exact path="/edit">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
}

function Home() {

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
