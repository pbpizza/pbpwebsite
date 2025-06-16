import React from 'react'
import '../styles/components/DividerContainer.scss'

type Props = {
    children: React.ReactNode;
    maxHeightInner: number | string;
    maxHeightOuter?: number | string;
}

export default function ({ children, maxHeightInner, maxHeightOuter }: Props) {
  return (
    <div className="DividerContainer" style={{ maxHeight: maxHeightOuter }}>
        <div className="divider_1">
            <img className="divider_line_1" src="/src/assets/image/divider_line.png" />
            <img src="/src/assets/icon/pizza_icon.png" alt="Pizza Icon" className="pizza_icon" />
            <img className="divider_line_1" src="/src/assets/image/divider_line.png" />
        </div>
        <div className="divider_content" style={{ maxHeight: maxHeightInner }}>
          {children}
        </div>
        <div className="divider_2">
            <img className="divider_line_2" src="/src/assets/image/divider_line.png" />
            <h5>PRETTYBOY</h5>
            <img className="divider_line_2" src="/src/assets/image/divider_line.png" />
        </div>
    </div>
  )
}