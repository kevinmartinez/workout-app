import React, { useState } from 'react'
import { Set } from '../Set'
interface State {
    setCount: SetCount
}

export const Exercise: React.FC = () => {
    const[sets] = useState<State>({
        setCount: [1, 2 ,3 ,4 ,5]
    })

    return (
        <section>
            <header>
                <h3>Squats</h3>
            </header>
            {sets.setCount.map((set) => <Set key={set} />)}
        </section>
    )
}
