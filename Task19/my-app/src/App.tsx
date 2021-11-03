import './App.css';
import './module/components/forms.css';
import React, {useState} from "react";
import {ThemeContext, themes} from "./module/theme-context";
import {AnimalsMenu} from './module/components/AnimalsMenu';
import {AnimalCreate} from "./module/components/AnimalCreate";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {AnimalsService} from "./services/animals-service";
import {AnimalEdit} from "./module/components/AnimalEdit";
import {DetailsOfAnimalMemo} from "./module/components/DetailsOfAnimal";

export function App() {

    const animalsService = new AnimalsService();

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/create">
                    <div className="container">
                        <div className="content">
                            <AnimalCreate animals={animalsService}/>
                        </div>
                    </div>
                </Route>
                <Route exact path="/edit">
                    <div className="container">
                        <div className="content">
                            <AnimalEdit/>
                        </div>
                    </div>
                </Route>
                <Route path='/pet/:id' render={
                    ({match}) => {
                        const {id} = match.params;
                        return <DetailsOfAnimalMemo className="details_list" petId={id}/>
                    }
                }/>
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

// <Link key={animal.id}
//       to={{pathname: `/pet/${animal.id}`}}>
// </Link>
// <Route path='/pet/:id' render={
//     ({match}) => {
//         const {id} = match.params;
//
//         return <DetailsOfAnimalMemo className="details_list" animal={animal} petId={id}/>
//     }
// } />
