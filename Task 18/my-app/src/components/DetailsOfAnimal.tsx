import {Row, Col} from 'antd';
import {AppProps} from "./types";

export function DetailsOfAnimal({animal}: AppProps) {
    return (
        <div className="App__content__animals-list-item">
            <Row gutter={[8, 4]}>
                <Col span={12}>Дата рождения:</Col>
                <Col span={12}>{animal?.birthday}</Col>

                <Col span={12}>Порода:</Col>
                <Col span={12}>{animal?.breed}</Col>

                <Col span={12}>Пол:</Col>
                <Col span={12}>{animal?.gender}</Col>

                <Col span={12}>Любимое занятие:</Col>
                <Col span={12}>{animal?.hobby}</Col>

                <Col span={12}>Особенности, умения:</Col>
                <Col span={12}>{animal?.otherFeatures}</Col>
            </Row>
        </div>
    )
}
