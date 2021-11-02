import {AnimalGender, AnimalType} from "../types";
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";

export function AnimalCreate() {

    const genders = [AnimalGender.FEMALE, AnimalGender.MALE];
    const types = [AnimalType.CAT, AnimalType.DOG];
    const dateNow: string = new Date().toISOString().substr(0, 10);

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });

    const ValidationSchemaExample = () => (
        <div>
            <h1>Signup</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            > {({ errors, touched }) => (
                <Form>
                    <Field name="firstName" />
                    {errors.firstName && touched.firstName ? (
                        <div>{errors.firstName}</div>
                    ) : null}
                    <Field name="lastName" />
                    {errors.lastName && touched.lastName ? (
                        <div>{errors.lastName}</div>
                    ) : null}
                    <Field name="email" type="email" />
                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
                    <button type="submit">Submit</button>
                </Form>
            )}
            </Formik>
        </div>
    );

    return (
        <div>
            {ValidationSchemaExample}
            <div className="container">
                <div className="content">
                    <form>
                        <h1>Новое животное</h1>
                        <div className="form-group">
                            <label htmlFor="name-input">Кличка</label>
                            <input id="name-input" className="form-control" type="text" placeholder="Кличка"/>
                            <div className="validation">
                                Обязательное поле, не короче 2 символов
                            </div>

                        </div>

                        <div className="form-group">
                            <label htmlFor="breed-input">Порода</label>
                            <input id="breed-input" className="form-control" type="text" placeholder="Порода"
                                   required/>
                            <div className="validation">
                                Обязательное поле, не короче 2 символов
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="type-select">Тип животного</label>
                            <select id="type-select" className="form-control" required>
                                <option>{{types}}</option>
                            </select>
                            <div className="validation">
                                Некорректное поле
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="gender-select">Пол животного</label>
                            <select id="gender-select" className="form-control" required>
                                <option>{{genders}}</option>
                            </select>
                            <div className="validation">
                                Некорректное поле
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="birthday-input">Дата рождения</label>
                            <input id="birthday-input" className="form-control" type="date" required/>
                            <div className="validation">
                                Некорректное поле
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="hobby-input">Хобби, интересы </label>
                            <input id="hobby-input" className="form-control" type="text"
                                   placeholder="Хобби, интересы"/>
                            <div className="validation">
                                Некорректное поле
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="features-input">Особенности, другие характеристики</label>
                            <input id="features-input" className="form-control" type="text"
                                   placeholder="Особенности, другие характеристики"/>
                            <div className="validation">
                                Некорректное поле
                            </div>
                        </div>

                        {/*<button type="button" className="btn" onClick="addNewAnimal(animal); submitForm(animalsForm)">*/}
                        {/*    Добавить*/}
                        {/*</button>*/}
                        {/*<button type="button" className="btn" onClick="closeForm()">*/}
                        {/*    Закрыть*/}
                        {/*</button>*/}
                    </form>
                </div>
            </div>
        </div>
    );
}
