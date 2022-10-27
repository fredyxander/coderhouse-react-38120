// Inicio del código
import React, { useState } from 'react';

export default function App() {
  const [form, setForm] = useState({
    name: '',
    surname: '',
    age: '',
    location: '',
  });

  function onChangeForm(evt) {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    });
  }

  const formFields = [
    { name: 'Nombre', nameField: 'name' },
    { name: 'Apellido', nameField: 'surname' },
    { name: 'Edad', nameField: 'age' },
    { name: 'Ubicacion', nameField: 'location' },
  ];

  function onSubmit() {
    const { name, surname, age, location } = form;
    console.log(
      `Your name is ${name} ${surname} and you have ${age} years and your location is ${location}`
    );
  }

  return (
    <div>
      <>
        {formFields.map((elm) => (
          <div style={{ display: 'flex', marginBottom: 8 }}>
            <label style={{ marginRight: 4 }}>{elm.name}</label>
            <input
              type="text"
              name={elm.nameField}
              onChange={(evt) => onChangeForm(evt)}
            />
          </div>
        ))}
      </>
      <button
        type="submit"
        // disabled={
        //   !(form.name !== '' && form.surname !== '' && form.age !== '')
        // }
        onClick={(evt) => onSubmit(evt)}
      >
        Crear orden
      </button>
    </div>
  );
}
