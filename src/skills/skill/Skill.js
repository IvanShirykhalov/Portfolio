import React from 'react';
import style from './Skill.module.css'

export const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <span>{props.discription}</span>
        </div>
    );
};
