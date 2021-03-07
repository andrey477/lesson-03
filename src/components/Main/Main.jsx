import block from 'bem-cn'
import React from 'react'
import { Quote } from '../Quote/Quote'
import './Main.css'

const b = block('main')

export const Main = () => (
    <main className={b()}>
        <Quote />
    </main>
)