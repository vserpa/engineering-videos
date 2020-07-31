import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../templates/PageDefault';
import FormField from '../../../components/FormField';

function RegisterCategory() {

    const initialValue = {
        name: '',
        description: '',
        color: '#000000'
    }

    const [values, setValues] = useState(initialValue);
    const [categories, setCategories] = useState([]);


    function setValue(e) {
        setValues({
            ...values,
            [e.target.getAttribute('name')]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        setCategories([...categories, values]);
        setValues(initialValue);
    }

    return (
        <PageDefault>
            <h1>Register Category: {values.name}</h1>
            <form style={{ background: values.color }} onSubmit={handleSubmit}>
                <FormField label="Name" type="text" attr="name" value={values.name} onChange={setValue} />
                <FormField label="Description" type="textarea" attr="description" value={values.description} onChange={setValue} />
                <FormField label="Color" type="color" attr="color" value={values.color} onChange={setValue} />
                <button>
                    Register
                </button>
            </form>

            <ul>
                {categories.map((category, index) => {
                    return (
                        <li key={`${category.name}${index}`}>
                            {category.name}
                        </li>
                    );
                })}
            </ul>

            <Link to="/">
                Home
            </Link>
        </PageDefault>
    )
}

export default RegisterCategory