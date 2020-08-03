import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../templates/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';

function RegisterCategory() {
    const initialValue = {
        name: '',
        description: '',
        color: '#000000'
    }
    
    const { handleChange, clearForm, values } = useForm(initialValue);
    const [categories, setCategories] = useState([]);
    
    function handleSubmit(e) {
        e.preventDefault();
        setCategories([...categories, values]);
        clearForm();
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
    }, []);

    return (
        <PageDefault>
            <h1>Register Category: {values.name}</h1>
            <form onSubmit={handleSubmit}>
                <FormField label="Name" type="text" attr="name" value={values.name} onChange={handleChange} />
                <FormField label="Description" type="textarea" attr="description" value={values.description} onChange={handleChange} />
                <FormField label="Color" type="color" attr="color" value={values.color} onChange={handleChange} />
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