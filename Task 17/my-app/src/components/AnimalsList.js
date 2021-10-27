import {Collapse} from "antd";
import React from "react";
import {DetailsOfAnimal} from "./DetailsOfAnimal";

const { Panel } = Collapse;

export function AnimalsList({animals}) {

    const animalsListItem = animals.map((animal) =>
            <Panel key={animal.id}
                   header={animal.kindOfAnimal + ': ' + animal.animalName}>
                <DetailsOfAnimal animal={animal}/>
            </Panel>
        );
        return (
            <div>
                <Collapse>
                    {animalsListItem}
                </Collapse>
            </div>
        );
}
