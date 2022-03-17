import React from 'react';
import style from './Contacts.module.css'
import containerStyle from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${containerStyle.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.form}>
                    <input value={'phone number'}/>
                    <input value={'email'}/>
                    <textarea value={'Enter you message'}/>
                </form>
                <a href={'#'}>
                    Send
                </a>
            </div>

        </div>
    );
};
