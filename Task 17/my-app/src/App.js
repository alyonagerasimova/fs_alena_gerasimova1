import './App.css';
import {AnimalsService} from "./services/animals-service"
import React from "react";
import {Collapse} from 'antd';

const {Panel} = Collapse;

const animalsService = new AnimalsService();
const animalsList = animalsService.getAnimalsData();

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
        this.animals = props.animalsList;
    }

    render() {
        const animalsListItem = this.animals.map((animal) =>
            <Panel key={animal.id}
                   header={animal.kindOfAnimal + ': ' + animal.animalName}>
                <DetailsOfAnimal animal={animal}/>
            </Panel>
        );

        return (
            <div>
                <ShowOrHideKittens animalsList={this.animals}/>
                <Collapse>
                    {animalsListItem}
                </Collapse>
            </div>
        );
    }
}

function ShowKittenButton(props) {
    return (
        <button onClick={props.onClick}>
           Показать котиков
        </button>
    );
}

function HideKittenButton(props) {
    return (
        <button onClick={props.onClick}>
            Скрыть котиков
        </button>
    );
}

class ShowOrHideKittens extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isKittensShow: false};
        this.animals = props.animalsList;
        this.handleHideClick = this.handleHideClick.bind(this);
        this.handleShowClick = this.handleShowClick.bind(this);
    }

    handleHideClick() {
        this.setState({isKittensShow: false});
        this.animals = animalsService.filterAnimalsByType('cat');
    }

    handleShowClick(){
        this.setState({isKittensShow: true});
        this.animals = animalsList;
    }

    render() {
        const isKittensShow = this.state.isKittensShow;
        let button;
        if (isKittensShow) {
            button = <ShowKittenButton onClick={this.handleHideClick} />;
        } else {
            button = <HideKittenButton onClick={this.handleShowClick} />;
        }
        return (
            <div>
                {button}
            </div>
        )
    }
}

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
