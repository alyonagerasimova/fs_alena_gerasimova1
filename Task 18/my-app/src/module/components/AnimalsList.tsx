import {Collapse} from "antd";
import React, {useContext, useMemo} from "react";
import {Animal, AppProps} from "../types";
import {DetailsOfAnimalMemo} from "./DetailsOfAnimal";
import {ThemeContext} from "../theme-context";

const {Panel} = Collapse;

export function AnimalsList({animals}: AppProps) {

    let theme = useContext(ThemeContext);
    const styleOfTheme = {
        backgroundColor: theme.background,
        borderColor: theme.borderColor
    }

    const animalsListItem = useMemo(() => animals?.map((animal: Animal) =>
        <Panel key={animal.id}
               header={animal.kindOfAnimal + ': ' + animal.animalName}>
            <DetailsOfAnimalMemo className="details_list" animal={animal}/>
        </Panel>
    ), [animals]);

    return (
        <Collapse style={styleOfTheme}>
            {animalsListItem}
        </Collapse>
    );
}
