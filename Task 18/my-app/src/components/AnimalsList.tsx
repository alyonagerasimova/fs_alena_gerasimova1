import {Collapse} from "antd";
import React from "react";
import {DetailsOfAnimal} from "./DetailsOfAnimal";
import {Animal, AppProps} from "./types";

const {Panel} = Collapse;

export function AnimalsList({animals}: AppProps) {

    const animalsListItem = animals?.map((animal: Animal) =>
        <Panel key={animal.id}
               header={animal.kindOfAnimal + ': ' + animal.animalName}>
            <DetailsOfAnimal className="details_list" animal={animal} />
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
