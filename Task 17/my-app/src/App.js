import './App.css';
import {AnimalsService} from "./services/animals-service";
import {AnimalsList} from "./components/AnimalsList"
import {useState} from "react";
import { Button } from 'antd';

const animalsService = new AnimalsService();
const animalsList = animalsService.getAnimalsData();

export function App() {

    const [animals, setAnimals] = useState(animalsList);
    const [isKittensHide, setIsKittensHide] = useState(false);

    const handleHideClick = () => {
        setAnimals(() => animalsService.filterAnimalsByType('cat'));
        setIsKittensHide(() => true);
    }
    const handleShowClick = () => {
        setAnimals(() => animalsList);
        setIsKittensHide(() => false);
    }

    return (
        <div className="App">
            <div className="App__content">
                <div className="App__content__animals-list">
                    <header className="App-header">
                        <h1>Список животных</h1>
                    </header>
                    <div>
                        {isKittensHide
                            ? <Button type="primary" onClick={handleShowClick}>Показать котиков</Button>
                            : <Button type="primary" onClick={handleHideClick}>Скрыть котиков</Button>
                        }
                    </div>
                    <AnimalsList animals={animals}/>
                </div>
            </div>

        </div>
    );
}
