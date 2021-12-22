import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherProbs}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProbs}/>
        {
            label ? (
            <label className={`${otherProbs.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>)
             : null
        }
    </div>
);

export default FormInput;