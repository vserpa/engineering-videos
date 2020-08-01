import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`

`;

function FormField({
  label, type, attr, value, onChange,
}) {
  const fieldId = `id_${attr}`;
  const tag = type === 'textarea' ? 'textarea' : 'input';

  return (
    <div>
      <label htmlFor={fieldId}>
        {label}
        :
        <Input
          as={tag}
          id={fieldId}
          type={type}
          name={attr}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  attr: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
