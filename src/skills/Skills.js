import React from 'react';
import style from './Skills.module.css'
import containerStyle from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${containerStyle.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>
                    Skills
                </h2>
                <div className={style.skills}>
                    <Skill title={'HTML & CSS'} discription={' bla bla bla bla bla bla bla bla bla bla bla bla'}/>
                    <Skill title={'JS'} discription={'bla bla'}/>
                    <Skill title={'React'}
                           discription={'bla bla bla bla bla bla  bla bla'}/>

                </div>
            </div>
        </div>
    );
};
