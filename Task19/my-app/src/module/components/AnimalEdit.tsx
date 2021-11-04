import {Form, Formik} from 'formik';
import React from "react";
import {appAnimalsService} from "../../services/animals-service";
import {AnimalForm} from "./AnimalForm";
import {Validation} from "./Validation";
import {Link, Outlet, useNavigate, useParams} from "react-router-dom";

export function AnimalEdit() {
    let {id}:any = useParams();
    const animalSelectedId = appAnimalsService.getAnimalById(+id);
    const navigate = useNavigate();
    return (
        <div>
            <h1>Редактировать животного</h1>
            <Formik
                initialValues={{
                    animalName: animalSelectedId.animalName,
                    breed: animalSelectedId.breed,
                    kindOfAnimal: animalSelectedId.kindOfAnimal,
                    gender: animalSelectedId.gender,
                    birthday: animalSelectedId.birthday,
                    hobby: animalSelectedId.hobby,
                    otherFeatures: animalSelectedId.otherFeatures,
                    id: id
                }}
                validationSchema={Validation}
                onSubmit={values => {
                    appAnimalsService.updateAnimal(values);
                    navigate("/");
                }}
            >
                {({errors, touched}: any) => (
                    <Form>
                        <AnimalForm errors={errors} touched={touched}/>
                        <div>
                            <button type="submit" className="btn">
                                    Сохранить
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
