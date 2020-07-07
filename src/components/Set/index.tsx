import React, { useState } from 'react'
import { Reps } from '../Reps'

const initialState = -1

export const Set: React.FC = () => {
  const [reps, setReps] = useState<number>(initialState)

  const countdownReps = (currentRep: Reps) => {
    if (currentRep < 0) {
      // If currentRep is 0
      console.log('start timer')
      currentRep = 3
    } else if (!currentRep) {
      currentRep = -1 // If clicked when 0 reps - reset counter
    } else {
      currentRep -= 1
    }
    setReps(currentRep)
  }

  return <Reps countdownReps={countdownReps} reps={reps} />
}
