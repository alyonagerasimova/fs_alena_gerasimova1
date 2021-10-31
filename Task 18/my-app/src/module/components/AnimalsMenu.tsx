import {AnimalsService} from "../../services/animals-service";
import React, {useContext, useState} from "react";
import {Animal, AnimalType} from "../types";
import {Button} from "antd";
import {AnimalsList} from "./AnimalsList";
import {ThemeContext} from "../theme-context";

const animalsService = new AnimalsService();
const animalsList = animalsService.getAnimalsData();

export function AnimalsMenu(props: any ) {

    let theme = useContext(ThemeContext);
    const [animals, setAnimals] = useState<Animal[]>(animalsList);
    const [isKittensHide, setIsKittensHide] = useState<boolean>(false);
    const styleOfTheme = {
        backgroundColor: theme.background,
    };

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
            <div className="App__content__animals-list" style={styleOfTheme}>
                <header className="App-header">
                    <h1>Список животных</h1>
                </header>
                <div>
                    {isKittensHide
                        ? <Button type="primary" onClick={handleShowClick}>Показать котиков</Button>
                        : <Button type="primary" onClick={handleHideClick}>Скрыть котиков</Button>
                    }
                </div>
                <AnimalsList animals={animals} />
                <Button onClick={props.changeTheme}>
                    Поменять тему
                </Button>
            </div>
        </div>
    )
}
