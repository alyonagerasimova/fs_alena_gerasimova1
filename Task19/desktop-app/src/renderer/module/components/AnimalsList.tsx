import { Button, Collapse } from 'antd';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Animal, AppProps } from '../types';
import { DetailsOfAnimalMemo } from './DetailsOfAnimal';
import { ThemeContext } from '../theme-context';

const { Panel } = Collapse;

export function AnimalsList({ animals }: AppProps) {
  const animalsListItem = useMemo(
    () =>
      animals?.map((animal: Animal) => (
        <Panel
          key={animal.id}
          header={
            <ThemeContext.Consumer>
              {(theme) => {
                return (
                  <span style={{ color: theme.color }}>
                    {`${animal.kindOfAnimal}: ${animal.animalName}`}
                    <Button shape="round" className="buttonEdit">
                      <Link
                        key={animal.id}
                        to={{ pathname: `/pet/${animal.id}` }}
                      >
                        Редактировать животного
                      </Link>
                    </Button>
                  </span>
                );
              }}
            </ThemeContext.Consumer>
          }
        >
          <DetailsOfAnimalMemo className="details_list" animal={animal} />
        </Panel>
      )),
    [animals]
  );

  return (
    <ThemeContext.Consumer>
      {(theme) => {
        return (
          <Collapse
            style={{
              backgroundColor: theme.background,
              borderColor: theme.borderColor,
              color: theme.color,
            }}
          >
            {animalsListItem}
          </Collapse>
        );
      }}
    </ThemeContext.Consumer>
  );
}
