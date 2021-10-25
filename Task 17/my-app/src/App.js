import './App.css';
import {AnimalsService} from "./services/animals-service"
import React from "react";
import {Collapse} from 'antd';

const {Panel} = Collapse;

function DetailsOfAnimal({animal}) {
    return <div>
        <div>{animal.birthday}</div>
        <div>{animal.breed}</div>
        <div>{animal.gender}</div>
        <div>{animal.hobby}</div>
        <div>{animal.otherFeatures}</div>
    </div>
}

class AnimalsList extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.state = {isOpen: false};
        this.animals = props.animalsList;
    }

    handleItemClick() {
        this.setState(state => ({isOpen: !state.isOpen}));
    }


    render() {
        const animalsListItem = this.animals.map((animal) =>
            <Panel key={animal.id}
                header={animal.kindOfAnimal + ': ' + animal.animalName}>
               <DetailsOfAnimal animal={animal}/>
            </Panel>
        );

        return (
            <Collapse>
                {animalsListItem}
            </Collapse>
        );
    }
}


// hideKittens() {
//     this._isKittensShow = false;
//     this._animals = this.animalsService.filterAnimalsByType(AnimalType.CAT);
// }
//
// showKittens() {
//     this._isKittensShow = true;
//     this._animals = this.animalsService.getAnimalsData();
// }

const animalsService = new AnimalsService();
const animalsList = animalsService.getAnimalsData();

export function App() {
    return (
        <div className="App">
            <div className="App__content">
                <header className="App-header">
                </header>
                <main className="App__list">
                    <h1>Список животных</h1>
                    <AnimalsList animalsList={animalsList}/>
                </main>
            </div>

        </div>
    );
}
