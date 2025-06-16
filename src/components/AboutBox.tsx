import React from 'react'
import DividerContainer from './DividerContainer';
import '../styles/components/AboutBox.scss'

type Props = {
    title: React.ReactNode;
    child_1?: React.ReactNode;
    child_2: React.ReactNode;
    currentValue: number;
    setCurrentValue: Function;
}

export default function AboutBox({ title, child_1, child_2 }: Props) {

  return (
    <div className='AboutBox'>
        {title}
        <div className="top_container">
            {child_1}
        </div>
        <div className='bottom_container'>
            <DividerContainer maxHeightOuter={"40vh"} maxHeightInner={"50%"}>
                {child_2}
            </DividerContainer>
        </div>
    </div>
  )
}