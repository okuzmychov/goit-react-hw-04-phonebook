import { FormStyled, LabelSt, ErrorMsg } from './ContactForm.styled';
import { Formik, Field } from 'formik';
import { ButtonSubmit } from 'components/Section/Section.styled';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
    name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
    'Name may contain only letters, apostrophe, dash and spaces')
    .required('Required'),
    number: Yup.string().length(13, `Number must have 13 symbol`).matches(
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
)
    .required('Required'),
});

export const ContactForm = ({ onSubmit }) => {

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
          values.id = 'id-' + nanoid(3);
          onSubmit(values);
          actions.resetForm();
        }}
      >
        <FormStyled>
            <LabelSt htmlFor="name">Name</LabelSt>
            <Field name="name" type="text" />
            <ErrorMsg name="name" component="div" />

          <LabelSt htmlFor="number">Number</LabelSt>
            <Field name="number" type="tel" />
            <ErrorMsg name="number" component="div" />

          <ButtonSubmit type="submit">Add contact</ButtonSubmit>
          </FormStyled>
    </Formik>
    );
};
