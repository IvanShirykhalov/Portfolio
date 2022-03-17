import React from 'react';
import style from './Main.module.css'
import containerStyle from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${containerStyle.container} ${style.mainContainer}`}>
                    <div className={style.text}>
                        <span>Hello everyone</span>
                        <h1>My name is Ivan Ivanov</h1>
                        <p>I'm Frontend developer.</p>
                    </div>
                    <div className={style.photo}> </div>
            </div>
        </div>
    );
};
