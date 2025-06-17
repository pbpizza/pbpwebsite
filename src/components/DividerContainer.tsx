import React from 'react'
import '../styles/components/DividerContainer.scss'

import divider_line from "../assets/image/divider_line.png"
import pizza_icon from "../assets/icon/pizza_icon.png"

type Props = {
    children: React.ReactNode;
    maxHeightInner: number | string;
    maxHeightOuter?: number | string;
}

export default function ({ children, maxHeightInner, maxHeightOuter }: Props) {
  return (
    <div className="DividerContainer" style={{ maxHeight: maxHeightOuter }}>
        <div className="divider_1">
            <img className="divider_line_1" src={divider_line.src} alt="" role="presentation" />
            <img src={pizza_icon.src} alt="" className="pizza_icon" role="presentation" />
            <img className="divider_line_1" src={divider_line.src} alt="" role="presentation" />
        </div>
        <div className="divider_content" style={{ maxHeight: maxHeightInner }}>
          {children}
        </div>
        <div className="divider_2">
            <img className="divider_line_2" src={divider_line.src} alt="" role="presentation" />
            <h5 aria-hidden="true" >PRETTYBOY</h5>
            <img className="divider_line_2" src={divider_line.src} alt="" role="presentation"/>
        </div>
    </div>
  )
}