import React from 'react';

function FormField({ label, type, attr, value, onChange }) {
    
    if (type === "textarea") {
        return (
            <div>
                <label>
                    {label}:
                    <textarea 
                        name={attr}
                        value={value} 
                        onChange={onChange} />
                </label>
            </div>
        )
    } else {
        return (
            <div>
                <label>
                    {label}:
                    <input 
                        type={type} 
                        name={attr}
                        value={value} 
                        onChange={onChange} />
                </label>
            </div>
        )
    }
    
}

export default FormField;