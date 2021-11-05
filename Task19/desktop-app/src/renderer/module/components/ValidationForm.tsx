import * as Yup from 'yup';

const dateNow: string = new Date().toISOString().substr(0, 10);

export const ValidationForm: any = Yup.object().shape({
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
