import React from 'react'

import style from './TextAreaField.module.css'

function TextAreaField({ width , height , type , value , name , placeholder , label }) {
    return (
        <div style={{ maxWidth: width}} className={style["text-area-field"]}>
            <label>
                {label} 
            </label>
            <textarea 
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

export default TextAreaField;