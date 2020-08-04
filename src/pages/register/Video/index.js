import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../templates/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function RegisterVideo() {
  const history = useHistory();
  const [category, setCategories] = useState([]);
  const categoryNames = category.map(({ name }) => name);
  const { handleChange, values } = useForm({
    name: 'Default video',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    category: 'Front End',
  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategories(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Register Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        
        const selectedCategory = category.find((category) => {
          return category.name === values.category;
        });        

        videosRepository.create({
          name: values.name,
          url: values.url,
          categoryId: selectedCategory.id,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >
        {
        <>
            <FormField
                label="Title"
                name="name"
                value={values.name}
                onChange={handleChange}
                attr="name"
            />

            <FormField
                label="URL"
                name="url"
                value={values.url}
                onChange={handleChange}
                attr="url"
            />

            <FormField
                label="Category"
                name="category"
                value={values.category}
                onChange={handleChange}
                suggestions={categoryNames}
                attr="category"
            />
        </>
        }

        <Button type="submit">
          Save
        </Button>
      </form>

      <br />
      <br />

      <Link to="/register/category">
        Register Category
      </Link>
    </PageDefault>
  );
}

export default RegisterVideo;