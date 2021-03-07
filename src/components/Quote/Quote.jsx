import block from 'bem-cn'
import React from 'react'
import './Quote.css'

const b = block('quote')


export const Quote = () => (
    <section className={b()}>
        <figure>
            <figcaption className={b('author')}>
                John Doe - 
            </figcaption>
            <blockquote className={b('text')}>
                <span className={b('text', {shadow: true})}>Creative</span> based in World
            </blockquote>
            <span className={b('copyright')}>© 2021</span>
        </figure>
        <img src="/images/pick-1.png" className={b('img')} alt=""/>
    </section>
)
