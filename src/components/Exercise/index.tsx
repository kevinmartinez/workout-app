import React, { useState } from 'react'
import { Reps } from '../Reps'

interface Props {
    reps: Reps;
}

export const Exercise: React.FC<Props> = ({ reps }) => {
    const [seconds, setCountdown] = useState(reps);
    return (
        <section>
            <header>
                <h3>Squats</h3>
            </header>
            <div>
                Set 1
                <div>5</div>
            </div>
            <div>
                Set 2
                <Reps reps={reps}/>
            </div>
        </section>
    )
}
