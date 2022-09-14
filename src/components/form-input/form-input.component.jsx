import React from 'react';

const FormInput = ({label ,...otherProps}) => {
    return (
        <div>
            <input {...otherProps}/>
            {label && (
                <label shirnk = { otherProps.value.length}>
                    {label}
                </label>
            )}
        </div>
    );
};

export default FormInput;