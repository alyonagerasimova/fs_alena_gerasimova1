import {Field} from "formik";
import {AnimalGender, AnimalType} from "../types";

export function AnimalForm({errors, touched}: any) {
    const genders = [AnimalGender.FEMALE, AnimalGender.MALE];
    const types = [AnimalType.CAT, AnimalType.DOG];
    return (
        <div>
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
                <label htmlFor="type-select">Тип животного</label>
                <div className="form-select-control" id="type-select">
                    <label>
                        <Field name="kindOfAnimal" type="radio" value="cat"/>
                        <span className="form-select-control">{types[0]}</span>
                    </label>
                    <label>
                        <Field name="kindOfAnimal" type="radio" value="dog"/>
                        <span className="form-select-control">{types[1]}</span>
                    </label>
                </div>
                {errors.kindOfAnimal && touched.kindOfAnimal ?
                    <div className="validation">{errors.kindOfAnimal}</div> : null}
            </div>

            <div className="form-group">
                <label htmlFor="gender-select">Пол животного</label>
                <div className="form-select-control" id="gender-select">
                    <label>
                        <Field name="gender" type="radio" value="Девочка"/>
                        <span className="form-select-control">{genders[0]}</span>
                    </label>
                    <label>
                        <Field name="gender" type="radio" value="Мальчик"/>
                        <span className="form-select-control">{genders[1]}</span>
                    </label>
                </div>
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
        </div>
    )
}
