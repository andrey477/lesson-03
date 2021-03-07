import block from 'bem-cn'
import React from 'react'
import './Navigation.css'

const b = block('nav')

export const Navigation = () => (
    <nav className={b()}>
        <li className={b('item')}>
            <a href="/" className={b('link')}>Work</a>
        </li>
        <li className={b('item')}>
            <a href="/" className={b('link')}>Play</a>
        </li>
        <li className={b('item')}>
            <a href="/" className={b('link')}>About</a>
        </li>
        <li className={b('item')}>
            <a href="/" className={b('link')}>Contact</a>
        </li>
    </nav>
)