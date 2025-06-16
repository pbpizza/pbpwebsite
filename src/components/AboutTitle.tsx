import React from 'react'
import '../styles/components/AboutTitle.scss'

type Props = {
    state: number;
    setState: Function;
}

export default function AboutTitle({ state, setState }: Props) {

    const handleIncrement = () => {
        if ( (state + 1) < 3 ) {
            setState( state + 1 )
        } else {
            setState( 0 )
        }
    }
    
    const handleDecrement = () => {
        if ( (state - 1) >= 0 ) {
            setState( state - 1 )
        } else {
            setState( 2 )
        }
    }

    return (
        <div className="AboutTitle">
            <div className="inactive_title" onClick={handleDecrement}>
                <h4 className="inactive_1">{ state === 0 ? "OUR FOOD" : state === 1 ? "FAQs" : "ABOUT US" }</h4>
            </div>
            <h3 className="title">{ state === 0 ? "FAQs" : state === 1 ? "ABOUT US" : "OUR FOOD" }</h3>
            <div className="inactive_title" onClick={handleIncrement}>
                <h4 className="inactive_2">{ state === 0 ? "ABOUT US" : state === 1 ? "OUR FOOD" : "FAQs" }</h4>
            </div>          
        </div>
    )
}