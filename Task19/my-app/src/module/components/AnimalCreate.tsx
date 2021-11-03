import {AnimalGender, AnimalType} from "../types";
import {Formik, Form, Field} from 'formik';
import * as Yup from "yup";
import React from "react";
import {Link} from "react-router-dom";

const genders = [AnimalGender.FEMALE, AnimalGender.MALE];
const types = [AnimalType.CAT, AnimalType.DOG];
const dateNow: string = new Date().toISOString().substr(0, 10);

const SignupSchema = Yup.object().shape({
    animalName: Yup.string()
        .min(2, 'Слишком короткое!')
        .max(50, 'Слишком длинное!')
        .required('Обязательное поле'),
    breed: Yup.string()
        .min(2, 'Слишком короткое!')
        .max(50, 'Слишком длинное!')
        .required('Обязательное поле'),
    kindOfAnimal: Yup.string().required('Обязательное поле'),
    gender: Yup.string().required('Обязательное поле'),
    birthday: Yup.date().max(dateNow, 'Некорректное поле'),
});

export function AnimalCreate (props: any) {
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
                    id: props.animals.generateId()
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    console.log(values);
                    props.animals.getAnimalsData().push(values);
                }}
            >
                {({errors, touched}: any) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="name-input">Кличка</label>
                            <Field name="animalName" id="name-input" className="form-control" type="text"
                                   placeholder="Кличка"/>
                            {errors.animalName && touched.animalName ? (
                                <div className="validation">{errors.animalName}</div>
                            ) : null}
                        </div>

                        <div className="form-group">
                            <label htmlFor="breed-input">Порода</label>
                            <Field name="breed" id="breed-input" className="form-control" type="text"
                                   placeholder="Порода"/>
                            {errors.breed && touched.breed ? (
                                <div className="validation">{errors.breed}</div>
                            ) : null}
                        </div>

                        <div className="form-group">
                            <label>Тип животного</label>
                            <label>
                                <Field name="type" type="radio" value="cat"/>
                                {types[0]}
                            </label>
                            <label>
                                <Field name="kindOfAnimal" type="radio" value="dog"/>
                                {types[1]}
                            </label>
                            {errors.kindOfAnimal && touched.kindOfAnimal ? <div className="validation">{errors.kindOfAnimal}</div> : null}
                        </div>
                        <div className="form-group">
                            <label>Пол животного</label>
                            <label>
                                <Field name="gender" type="radio" value="Девочка"/>
                                {genders[0]}
                            </label>
                            <label>
                                <Field name="gender" type="radio" value="Мальчик"/>
                                {genders[1]}
                            </label>
                            {errors.gender && touched.gender ? <div className="validation">{errors.gender}</div> : null}
                        </div>

                        <div className="form-group">
                            <label htmlFor="birthday-input">Дата рождения</label>
                            <Field name="birthday" id="birthday-input" className="form-control" type="date"/>
                            {errors.birthday && touched.birthday ? (
                                <div className="validation">{errors.birthday}</div>
                            ) : null}
                        </div>

                        <div className="form-group">
                            <label htmlFor="hobby-input">Хобби, интересы </label>
                            <Field name="hobby" id="hobby-input" className="form-control" type="text"
                                   placeholder="Хобби, интересы"/>
                            {errors.hobby && touched.hobby ? (
                                <div className="validation">{errors.hobby}</div>
                            ) : null}
                        </div>

                        <div className="form-group">
                            <label htmlFor="features-input">Особенности</label>
                            <Field name="otherFeatures" id="features-input" className="form-control" type="text"
                                   placeholder="Особенности, другие характеристики"/>
                            {errors.otherFeatures && touched.otherFeatures ? (
                                <div className="validation">{errors.otherFeatures}</div>
                            ) : null}
                        </div>

                        <button type="submit" className="btn">
                           Добавить
                        </button>
                        <button type="button" className="btn">
                            <Link to="/">Закрыть</Link>
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
