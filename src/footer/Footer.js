import React from 'react';
import style from './Footer.module.css'
import containerStyle from "../common/styles/Container.module.css";
import {SomeField} from "./someField/SomeField";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${containerStyle.container} ${style.footerContainer}`}>
                <h2>Ivan Ivanov</h2>
                <div className={style.someFields}>
                    <SomeField/>
                    <SomeField/>
                    <SomeField/>
                    <SomeField/>
                </div>
                <h3>
                    ⓒ All rights reserved, maybe
                </h3>
            </div>

        </div>
    );
};
