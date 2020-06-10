import React from 'react'
import { Exercise } from '../Exercise'

export const Workout: React.FC = () => {
    return (
        <section>
            <header>
                <h2>Workout #</h2>
                <div>Date</div>{/* TODO: Date component*/}
            </header>
            <Exercise />
        </section>
    )
}