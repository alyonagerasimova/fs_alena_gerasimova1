import {AnimalGender, AnimalType} from "../types";
import {Formik, Form} from 'formik';
import {Link, useNavigate} from "react-router-dom";
import {Validation} from "./Validation";
import {AnimalForm} from "./AnimalForm";
import {appAnimalsService} from "../../services/animals-service";

const genders = [AnimalGender.FEMALE, AnimalGender.MALE];
const types = [AnimalType.CAT, AnimalType.DOG];
const dateNow: string = new Date().toISOString().substr(0, 10);

export function AnimalCreate() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Новое животное</h1>
            <Formik
                initialValues={{
                    animalName: '',
                    breed: '',
                    kindOfAnimal: types[0],
                    gender: genders[0],
                    birthday: dateNow,
                    hobby: '',
                    otherFeatures: '',
                    id: appAnimalsService.generateId()
                }}
                validationSchema={Validation}
                onSubmit={values => {
                    appAnimalsService.getAnimalsData().push(values);
                    navigate("/");
                }}
            >
                {({errors, touched}: any) => (
                    <Form>
                        <AnimalForm errors={errors} touched={touched}/>
                        <div>
                            <button type="submit" className="btn">
                                Добавить
                            </button>
                            <button type="button" className="btn">
                                <Link to="/">Закрыть</Link>
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
