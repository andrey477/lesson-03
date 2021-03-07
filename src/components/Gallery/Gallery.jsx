import block from 'bem-cn'
import React from 'react'
import { Button } from '../Button/Button'
import './Gallery.css'

const b = block('gallery')

export const Gallery = () => (
    <section className={b()}>
        <h1 className={b('title')}>
            Creative<br />
            Playground.
        </h1>
        <div className={b({ bg: true })}>
            <div className={b('container')}>
                <img src="/images/gallery-1.png" className={b('img')} alt="" />
                <img src="/images/gallery-2.png" className={b('img')} alt="" />
                <img src="/images/gallery-3.png" className={b('img')} alt="" />
                <img src="/images/gallery-4.png" className={b('img')} alt="" />
                <img src="/images/gallery-5.png" className={b('img')} alt="" />
                <img src="/images/gallery-6.png" className={b('img')} alt="" />
                <img src="/images/gallery-7.png" className={b('img')} alt="" />
            </div>
            <Button text="View explorations" />
        </div>
    </section>
)
