import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../templates/PageDefault'

function RegisterCategory() {

    const value = {
        name: '',
        description: '',
        color: '#000000'
    }

    const [values, setValues] = useState(value);
    const [categories, setCategories] = useState([]);


    function setValue(e) {
        setValues({
            ...values,
            [e.target.getAttribute('name')]: e.target.value
        })
    }

    return (
        <PageDefault>
            <h1>Register Category: {values.name}</h1>
            <form style={{ background: values.color }} onSubmit={function handleSubmit(e) {
                e.preventDefault();
                setCategories([...categories, values]);
                setValues(value);
            }}>
                <div>
                    <label>
                        Name:
                        <input 
                            type="text" 
                            name="name"
                            value={values.name} 
                            onChange={setValue} />
                    </label>
                    <label>
                        Description:
                        <textarea 
                            type="text"
                            name="description" 
                            value={values.description} 
                            onChange={setValue} />
                    </label>
                    <label>
                        Color:
                        <input 
                            type="color" 
                            name="color"
                            value={values.color} 
                            onChange={setValue} />
                    </label>
                </div>
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