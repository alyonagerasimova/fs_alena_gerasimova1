import {Collapse} from "antd";
import React, {useMemo} from "react";
import {Animal, AppProps} from "../types";
import {DetailsOfAnimalMemo} from "./DetailsOfAnimal";
import {ThemeContext} from "../theme-context";

const {Panel} = Collapse;

export function AnimalsList({animals}: AppProps) {

    const animalsListItem = useMemo(() => animals?.map((animal: Animal) =>
        <Panel key={animal.id}
               header={<ThemeContext.Consumer>
                   {theme => {
                       return (
                           <span style={{color: theme.color}}>
                               {animal.kindOfAnimal + ': ' + animal.animalName}
                               {/*<Button>*/}
                               {/*  <Link to="/edit">Редактировать животного</Link>*/}
                               {/*</Button>*/}
                           </span>
                       )
                   }
                   }
               </ThemeContext.Consumer>}
        >
            <DetailsOfAnimalMemo className="details_list" animal={animal}/>
        </Panel>
    ), [animals]);

    return (
        <ThemeContext.Consumer>
            {theme => {
                return (
                    <Collapse style={{
                        backgroundColor: theme.background,
                        borderColor: theme.borderColor,
                        color: theme.color
                    }}>
                        {animalsListItem}
                    </Collapse>
                )
            }}
        </ThemeContext.Consumer>
    );
}
