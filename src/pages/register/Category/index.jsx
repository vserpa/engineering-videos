import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        const URL = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080/categories'
        : 'https://engineering-videos.herokuapp.com/categories';
        fetch(URL)
            .then(async (response) => {
                const responseJson = await response.json();
                setCategories([...responseJson]);
            });
    }, [
        values.name
    ]);

    return (
        <PageDefault>
            <h1>Register Category: {values.name}</h1>
            <form onSubmit={handleSubmit}>
                <FormField label="Name" type="text" attr="name" value={values.name} onChange={setValue} />
                <FormField label="Description" type="textarea" attr="description" value={values.description} onChange={setValue} />
                <FormField label="Color" type="color" attr="color" value={values.color} onChange={setValue} />
                <button>
                    Register
                </button>
            </form>

            {categories.length === 0 && (
                <div>
                    Loading...
                </div>
            )}

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