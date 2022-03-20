import { Form, Formik } from 'formik';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { appAnimalsService } from '../../services/animals-service';
import { AnimalForm } from './AnimalForm';
import { ValidationForm } from './ValidationForm';

// eslint-disable-next-line import/prefer-default-export
export function AnimalEdit() {
  const { id }: any = useParams();
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
          id,
        }}
        validationSchema={ValidationForm}
        onSubmit={(values) => {
          appAnimalsService.updateAnimal(values);
          navigate('/');
        }}
      >
        {({ errors, touched }: any) => (
          <Form>
            <AnimalForm errors={errors} touched={touched} />
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
