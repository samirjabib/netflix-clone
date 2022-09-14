import React from 'react';

const FormInput = ({label ,...otherProps}) => {
    return (
        <div>
            <input {...otherProps}/>
        </div>
    );
};

export default FormInput;