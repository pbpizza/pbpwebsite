import React, { useState } from 'react'
import '../styles/components/Accordion.scss'

import arrow_up from "../assets/icon/arrow_up_icon.png"
import arrow_down from "../assets/icon/arrow_down_icon.png"

type Props = {
    title: string;
    text: string;
}

export default function Accordion({ title, text }: Props) {
    const [ isOpen, setIsOpen ] = useState<boolean>(false)
  return (
    <div className="Accordion" >
        <div className="accordion_top" onClick={() => setIsOpen(!isOpen)}>
            <h4>{title}</h4>
            <img className="icon" src={ isOpen ? arrow_up.src : arrow_down.src } alt="Toggle accordion." role="button"/>
        </div>
        <div className="accordion_bottom" style={{ display: isOpen ? "flex" : "none" }}>
            <p>{text}</p>
        </div>
    </div>
  )
}