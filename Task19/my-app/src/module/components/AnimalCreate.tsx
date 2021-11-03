import {AnimalGender, AnimalType} from "../types";
import {Formik, Form, Field} from 'formik';
import * as Yup from "yup";
import React from "react";

const genders = [AnimalGender.FEMALE, AnimalGender.MALE];
const types = [AnimalType.CAT, AnimalType.DOG];
const dateNow: string = new Date().toISOString().substr(0, 10);

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Слишком короткое!')
        .max(50, 'Слишком длинное!')
        .required('Обязательное поле'),
    breed: Yup.string()
        .min(2, 'Слишком короткое!')
        .max(50, 'Слишком длинное!')
        .required('Обязательное поле'),
    type: Yup.string().required('Обязательное поле'),
    gender: Yup.string().required('Обязательное поле'),
    birthday: Yup.date().max(dateNow, 'Некорректное поле'),
});

export const AnimalCreate = () => (
    <div>
        <h1>Новое животное</h1>
        <Formik
            initialValues={{
                name: '',
                breed: '',
                type: types[0],
                gender: genders[0],
                birthday: dateNow,
                hobby: '',
                features: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {({errors, touched}:any) => (
            <Form>
                <div className="form-group">
                    <label htmlFor="name-input">Кличка</label>
                    <Field name="name" id="name-input" className="form-control" type="text" placeholder="Кличка"/>
                    {errors.name && touched.name ? (
                        <div className="validation">{errors.name}</div>
                    ) : null}
                </div>

                <div className="form-group">
                    <label htmlFor="breed-input">Порода</label>
                    <Field name="breed" id="breed-input" className="form-control" type="text" placeholder="Порода"/>
                    {errors.breed && touched.breed ? (
                        <div className="validation">{errors.breed}</div>
                    ) : null}
                </div>

                <div className="form-group">
                    <label>Тип животного</label>
                    <label>
                        <Field name="type" type="radio" value="types[0]"/>
                        {types[0]}
                    </label>
                    <label>
                        <Field name="type" type="radio" value="types[1]"/>
                        {types[1]}
                    </label>
                    {errors.type && touched.type ? <div className="validation">{errors.type}</div> : null}
                </div>
                <div className="form-group">
                    <label>Пол животного</label>
                    <label>
                        <Field name="gender" type="radio" value="genders[0]"/>
                        {genders[0]}
                    </label>
                    <label>
                        <Field name="gender" type="radio" value="genders[1]"/>
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
                    <Field name="features" id="features-input" className="form-control" type="text"
                           placeholder="Особенности, другие характеристики"/>
                    {errors.features && touched.features ? (
                        <div className="validation">{errors.features}</div>
                    ) : null}
                </div>

                {/*<button type="button" className="btn" onClick="addNewAnimal(animal); submitForm(animalsForm)">*/}
                {/*    Добавить*/}
                {/*</button>*/}
                {/*<button type="button" className="btn" onClick="closeForm()">*/}
                {/*    Закрыть*/}
                {/*</button>*/}
                <button type="submit">Submit</button>
            </Form>
        )}
        </Formik>
    </div>
);
