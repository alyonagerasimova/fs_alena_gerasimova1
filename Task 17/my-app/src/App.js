import './App.css';
import {AnimalsService} from "./services/animals-service";
import {AnimalsList} from "./components/AnimalsList"
import {useState} from "react";

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
                <header className="App-header">
                </header>
                <main className="App__list">
                    <h1>Список животных</h1>
                    <div>
                        {isKittensHide
                            ? <button onClick={handleShowClick}>Показать котиков</button>
                            : <button onClick={handleHideClick}>Скрыть котиков</button>
                        }
                    </div>
                    <AnimalsList animals={animals}/>
                </main>
            </div>

        </div>
    );
}
