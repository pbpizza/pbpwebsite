import React from 'react'
import Accordion from './Accordion'
import '../styles/components/FAQs.scss'
import DividerContainer from './DividerContainer'
import AboutTitle from './AboutTitle'

type Props = {
    FAQs: string[][]
    state: number;
    setState: Function;
}

export default function FAQs({ FAQs, state, setState }: Props) {
  return (
    <div className="FAQs">
        <AboutTitle state={state} setState={setState} />
        <DividerContainer maxHeightOuter={"70vh"} maxHeightInner={"100%"}>
          <div className='list'>
            {
                FAQs.map((faq, index) => {
                    return <Accordion title={faq[0].toLocaleUpperCase()} text={faq[1]} key={index} />
                })
            }
          </div>
        </DividerContainer>
    </div>
  )
}