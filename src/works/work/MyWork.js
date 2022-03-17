import React from 'react';
import style from './MyWork.module.css'

export const MyWork = (props) => {
    return (
        <div className={style.work}>
            <div className={style.imgContainer}>
                <div className={style.view}><a href={'#'}>View</a></div>
            </div>
            <h3>{props.title}</h3>
            <span>{props.discription}</span>
        </div>
    );
};
