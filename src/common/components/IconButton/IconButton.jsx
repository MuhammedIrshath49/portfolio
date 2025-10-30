import React from 'react'

import style from './IconButton.module.css'

function IconButton({ width , height , icon , children , color , backgroundColor , link }){
    return (
        <a href={link} target="_blank">
            <button className={style.button}
                style={{
                    width: width,
                    height: height,
                    backgroundColor: backgroundColor,
                    color: color
                }}
            >
                <div className={style.text}>{children}</div>
                <div className={style.icon}>{icon}</div>
            </button>
        </a>
    )
}

export default IconButton;