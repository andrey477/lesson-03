import block from 'bem-cn'
import React from 'react'
import './Footer.css'

const b = block('footer')

export const Footer = () => (
    <footer className={b()}>
        <div className={b('contacts')}>
            <span className={b('copyright')}>© 2021 JOHN DOE</span>
            <ul className={b('list')}>
                <li className={b('item')}>
                    <a href="/" className={b('link')}>Work</a>
                </li>
                <li className={b('item')}>
                    <a href="/" className={b('link')}>Play</a>
                </li>
                <li className={b('item')}>
                    <a href="/" className={b('link')}>About</a>
                </li>
            </ul>
            <span className={b('social')}>Instagram</span>
        </div>
        <p className={b('text')}>
            Curious to learn more,<br/> collaborate or got a<br/> project in mind?
        </p>
        <a href="/" className={b('to-contact')}>Let's Talk</a>
        <div className={b('ending')}>
            thank you • thank you • thank you • thank you • thank you • thank you • thank you • thank you • thank you • thank you • thank you • thank you • thank you • thank you • thank you • thank you • thank you • thank you • thank you • thank you • thank you • thank you • thank you • thank you • thank you • thank you • thank you • thank you • thank you • thank you •
        </div>
    </footer>
)
