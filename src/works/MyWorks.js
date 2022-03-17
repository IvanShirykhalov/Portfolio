import React from 'react';
import style from './MyWorks.module.css'
import {MyWork} from "./work/MyWork";
import containerStyle from "../common/styles/Container.module.css";

export const MyWorks = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${containerStyle.container} ${style.worksContainer}`}>
                <h2 className={style.title}>
                    My Works
                </h2>
                <div className={style.works}>
                    <MyWork title={'project1'} discription={'bla bla bla bla bla bla bla bla bla'}/>
                    <MyWork title={'project2'} discription={'bla bla'}/>
                </div>
            </div>
        </div>
    );
};
