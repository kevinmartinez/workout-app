import React from 'react'
import { Exercise } from '../Exercise'

interface Props {
    reps: Reps;
}

export const Workout: React.FC<Props> = ({ reps }) => (
    <section>
        <header>
            <h2>Workout #</h2>
            <div>Date</div>{/* TODO: Date component*/}
        </header>
        <Exercise reps={reps} />
    </section>
)