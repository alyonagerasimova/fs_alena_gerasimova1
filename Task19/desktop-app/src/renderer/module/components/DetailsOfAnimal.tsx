import { Row, Col } from 'antd';
import React from 'react';
import { ThemeContext } from '../theme-context';

function DetailsOfAnimal(props: any) {
  return (
    <ThemeContext.Consumer>
      {(theme) => {
        return (
          <div
            className="App__content__animals-list-item"
            style={{
              backgroundColor: theme.background,
              borderColor: theme.borderColor,
              color: theme.color,
            }}
          >
            <Row gutter={[8, 4]}>
              <Col span={12}>Дата рождения:</Col>
              <Col span={12}>{props.animal.birthday}</Col>

              <Col span={12}>Порода:</Col>
              <Col span={12}>{props.animal.breed}</Col>

              <Col span={12}>Пол:</Col>
              <Col span={12}>{props.animal.gender}</Col>

              <Col span={12}>Любимое занятие:</Col>
              <Col span={12}>{props.animal.hobby}</Col>

              <Col span={12}>Особенности:</Col>
              <Col span={12}>{props.animal.otherFeatures}</Col>
            </Row>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export const DetailsOfAnimalMemo = React.memo(DetailsOfAnimal);
