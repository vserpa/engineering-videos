import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../templates/PageDefault'

function RegisterCategory() {
    return (
        <PageDefault>
            <h1>Register Category</h1>
            <form>
                <label>
                    Category name:
                    <input type="text" />
                </label>
                <button>
                    Register
                </button>
            </form>
            <Link to="/">
                Home
            </Link>
        </PageDefault>
    )
}

export default RegisterCategory