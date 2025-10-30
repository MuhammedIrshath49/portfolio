import React from 'react'

import style from './InputField.module.css';

function InputField({ width , height , type , value , name , placeholder , label }) {
    return (
        <div style={{ maxWidth: width}} className={style["input-field"]}>
            <label>
                {label} 
            </label>
            <input 
                style={{
                    height: height
                }}
                type={type}  
                value={value}
                name={name}
                placeholder={placeholder}
                required
            />
        </div>
    );
}

export default InputField;