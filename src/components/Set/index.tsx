import React, { useState } from 'react'
import { Reps } from '../Reps'

const initialState = 5;

export const Set: React.FC = () => {
    const [reps, setReps] = useState(initialState)

    const countdownReps = (currentRep: Reps) => {
        console.log(currentRep)
        if (!currentRep) { // If currentRep is not 0
            return
        } else {
            currentRep -= 1
        }
        setReps(currentRep)
    }

    return (
        <Reps countdownReps={countdownReps} reps={reps} />
    )
}