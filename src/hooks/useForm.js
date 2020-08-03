import { useState } from 'react';

function useForm(initialValue) {
  const [values, setValues] = useState(initialValue);

  function handleChange(e) {
      setValue(e);
  }

  function setValue(e) {
      setValues({
          ...values,
          [e.target.getAttribute('name')]: e.target.value
      })
  }

  function clearForm() {
      setValues(initialValue);
  }
  
  return {
      handleChange,
      clearForm,
      values
  }
}

export default useForm;