import './App.css';
import {AnimalsList} from "./components/AnimalsList"
import {useState} from "react";
import {Button} from 'antd';
import {AnimalsService} from "./services/animals-service";
import {Animal, AnimalType} from "./components/types";

const animalsService = new AnimalsService();
const animalsList = animalsService.getAnimalsData();

export function App() {

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
