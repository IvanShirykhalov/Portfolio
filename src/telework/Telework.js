import React from 'react';
import style from './Telework.module.css'
import containerStyle from "../common/styles/Container.module.css";

export const Telework = () => {
    return (<div className={style.teleworkBlock}>
        <div className={`${containerStyle.container} ${style.teleworkContainer}`}>
            <h3 className={style.title}>
                I don't considering remote work
            </h3>
        </div>
    </div>);
};