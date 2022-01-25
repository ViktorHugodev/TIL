import React from 'react';
import { Formik, FormikProps, Field, FormikValues, Form, ErrorMessage } from 'formik'
import schema from './schema'

import './App.css';

interface FormProps {
  name: string
  email: string
  cep: string
  street: string
  number: string
  district: string
  state: string
  city: string
}

function App() {
  function onSubmit(values: FormikValues) {
    console.log('submit', values)
  }


  function getCep(event: any, setFieldValue: any) {
    const { value } = event.target

    const cep = value?.replace(/[^0-9]/g, '');

    if (cep?.length !== 8) return

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        setFieldValue('street', data.logradouro)
        setFieldValue('district', data.bairro)
        setFieldValue('city', data.localidade)
        setFieldValue('state', data.uf)
      })
  }

  return (
    <div className="App">
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        initialValues={{
          name: '',
          email: '',
          cep: '',
          street: '',
          number: '',
          district: '',
          state: '',
          city: '',

        }}
        render={({ values, errors, setFieldValue }: FormikProps<FormProps>) => (
          <Form >

            <div className="form-control-group">
              <label>CEP</label>
              <Field type="text"
                onBlur={(event: any) => getCep(event, setFieldValue)}
                //Ja vem com onChange{} e value{}
                name="cep"
                placeholder="CEP - Just numbers" />
              <ErrorMessage
                name='name'
              />
            </div>
            <div className="form-street">

              <div className="form-control-street">
                <label>Stret:</label>
                <Field type="text"
                  name="street"
                  placeholder="Street address" />

              </div>
              <div className="form-control-number">
                <label>N:</label>
                <Field type="text"
                  name="number"
                  placeholder="Street address" />

              </div>
            </div>
            <div className="form-control-group">
              <label>District:</label>
              <Field type="text"
                name="district"
                placeholder="district address" />
            </div>

            <div className="form-control-group">
              <label>City:</label>
              <Field type="text"
                name="city"
                placeholder="City address" />
            </div>

            <div className="form-control-group">
              <label>State:</label>
              <Field type="text"
                name="state" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      ></Formik>

    </div>
  );
}

export default App;
