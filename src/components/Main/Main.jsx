import block from 'bem-cn'
import React from 'react'
import { About } from '../About/About'
import { Gallery } from '../Gallery/Gallery'
import { Quote } from '../Quote/Quote'
import { Work } from '../Work/Work'
import './Main.css'

const b = block('main')

export const Main = () => (
    <main className={b()}>
        <Quote />
        <About />
        <Work />
        <Gallery />
    </main>
)