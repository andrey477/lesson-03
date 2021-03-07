import block from 'bem-cn'
import React from 'react'
import './Button.css'

const b = block('button')

export const Button = ({text}) => (
    <div className={b()}>
        <button className={b('btn')}>
            {text}
        </button>
    </div>
)
