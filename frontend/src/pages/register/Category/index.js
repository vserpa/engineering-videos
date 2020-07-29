import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../templates/PageDefault'

function RegisterCategory() {
    return (
        <PageDefault>
            <h1>Register Category</h1>
            <Link to="/">
                Home
            </Link>
        </PageDefault>
    )
}

export default RegisterCategory