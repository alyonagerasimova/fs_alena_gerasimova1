import {AnimalsService} from "../../services/animals-service";
import React, {useState} from "react";
import {Animal, AnimalType} from "../types";
import {Button} from "antd";
import {AnimalsList} from "./AnimalsList";
import {ThemeContext} from "../theme-context";

const animalsService = new AnimalsService();
const animalsList = animalsService.getAnimalsData();

export function AnimalsMenu(props: any) {

    const [animals, setAnimals] = useState<Animal[]>(animalsList);
    const [isKittensHide, setIsKittensHide] = useState<boolean>(false);

    const handleHideClick = () => {
        setAnimals(() => animalsService.filterAnimalsByType(AnimalType.CAT));
        setIsKittensHide(() => true);
    }

    const handleShowClick = () => {
        setAnimals(() => animalsList);
        setIsKittensHide(() => false);
    }


    return (
        <div className="App__content">
            <ThemeContext.Consumer>
                {theme => {
                    return (
                        <div className="App__content__animals-list" style={{
                            backgroundColor: theme.background,
                        }}>
                            <header className="App-header">
                                <h1 style={{color: theme.color}}>Список животных</h1>
                            </header>
                            <div>
                                {isKittensHide
                                    ? <Button type="primary" onClick={handleShowClick}>Показать котиков</Button>
                                    : <Button type="primary" onClick={handleHideClick}>Скрыть котиков</Button>
                                }
                            </div>
                            <AnimalsList animals={animals}/>
                            <Button onClick={props.changeTheme}>
                                Поменять тему
                            </Button>
                        </div>
                    );
                }
                }
            </ThemeContext.Consumer>

        </div>
    )
}
