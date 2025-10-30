import React from 'react'

import style from './DownloadButton.module.css';

function DownloadButton({ width , height , onClick , children }) {
    return (
        <button className={style.button} onClick={onClick} style={{
            width: {width} ,
            height: {height},
        }}>
            <span className={style["button-content"]}>{children}</span>
        </button>
    );
}

export default DownloadButton;