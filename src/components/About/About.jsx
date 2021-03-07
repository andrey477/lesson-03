import block from 'bem-cn'
import React from 'react'
import './About.css'

const b = block('about')

export const About = () => (
    <section className={b()}>
        <p className={b('text')}>
            Die-hard creative with a deep passion for collaborating with businesses
            and individuals who are fired up about personalizing their brand and digital experiences.
        </p>
        <hr className={b('line')}/>
        <h3 className={b('title')}>Favorite kind of projects</h3>
        <div className="row">
            <span>Visual and Ui/Ux web design</span>
            <span>Animation/Motion</span>
        </div>
        <div className={b('row')}>
            <span>Interactive Web Development (webflow)</span>
            <span>Illustration</span>
        </div>
    </section>
)
