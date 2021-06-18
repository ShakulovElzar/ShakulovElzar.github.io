import React from 'react';
import s from './Header.module.css';

export default function Header() {
    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.wrapper}>
                    <img className={s.logo} src="https://image.flaticon.com/icons/png/512/23/23338.png" alt="logo"/>
                </div>
            </div>
        </header>
    );
}