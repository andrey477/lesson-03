import block from 'bem-cn'
import React from 'react'
import { Button } from '../Button/Button'
import { WorkItem } from '../WorkItem/WorkItem'
import './Work.css'

const b = block('work')

export const Work = () => (
    <section className={b()}>
        <div className={b('container')}>
            <div className={b('col')}>
                <h1 className={b('title')}>Work.</h1>
                <WorkItem
                    title="Ground Zero"
                    src="/images/work-1.png"
                    desc="Identity, Web Design+Development"
                />
                <WorkItem
                    title="Summerhaze"
                    src="/images/work-2.png"
                    desc="Identity update, Illustration"
                />
            </div>
            <div className={b('col')}>
                <WorkItem
                    title="CloeArt"
                    src="/images/work-3.png"
                    desc="Illustration, Motion/Animation"
                />
                <WorkItem
                    title="UX Methods"
                    src="/images/work-4.png"
                    desc="Illustration, Motion - Animation"
                />
            </div>
        </div>
        <Button text="View more" />
    </section>
)
