import React, { useState } from 'react';
import { Axios, db } from '../firebase/firebaseConfig';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(3, "Name's too short!")
        .max(20, "Name field's up to 20 characters!'")
        .required('Required!'),
      email: Yup.string()
        .email('That email looks weird...')
        .required('Required!'),
      message: Yup.string()
        .min(10, 'Please write more than 10 characters!')
        .max(800, 'Please not more than 800 characters!')
        .required('Required!'),
    }),
    onSubmit: (values) => {
      sendEmail(values);
    },
  });

  const sendEmail = (values) => {
    const asyncSendEmail = async () => {
      try {
        const res = await Axios.post(
          'https://us-central1-jaguardev1985.cloudfunctions.net/submit',
          values
        );
        if (res.status === 200) {
          alert('Message sent! Thank you');
          formik.handleReset();
          //save to db
          db.collection('emails').add({
            name: values.name,
            email: values.email,
            message: values.message,
            time: new Date(),
          });
        }
      } catch (e) {
        console.log(e);
        setError(e);
        alert(
          `Something went wrong. Please try again or try another contact method! Error message: ${error}`
        );
      }
      setError('');
    };
    asyncSendEmail();
  };

  return (
    <div className='contact-form d-flex flex-column justify-content-end col-md-4 my-5'>
      <h3 className='my-4'>Message me!</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-group mb-4'>
          <input
            className='form-control'
            type='text'
            name='name'
            placeholder='Name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className='error'>{formik.errors.name}</div>
          ) : null}
        </div>
        <div className='form-group mb-4'>
          <input
            className='form-control'
            type='email'
            name='email'
            placeholder='Email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className='error'>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className='form-group mb-4'>
          <textarea
            className='form-control'
            type='text'
            name='message'
            placeholder='Message'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <div className='error'>{formik.errors.message}</div>
          ) : null}
        </div>
        <div className='form-group text-center'>
          <button type='submit' className=' btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
