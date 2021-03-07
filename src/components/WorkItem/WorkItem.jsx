import block from 'bem-cn'
import React from 'react'
import './WorkItem.css'

const b = block('work-item')

export const WorkItem = ({title, src, desc}) => (
    <article className={b()}>
        <img src={src} className={b('img')} alt=""/>
        <h2 className={b('title')}>{title}</h2>
        <p className={b('desc')}>{desc}</p>
    </article>
)
