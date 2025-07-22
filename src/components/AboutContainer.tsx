import React, {useState} from 'react'
import AboutBox from './AboutBox'
import DividerContainer from './DividerContainer'
import FAQs from './FAQs'
import '../styles/pages/about.scss'
import AboutTitle from './AboutTitle'

import logo from "../assets/image/pbp_logo.png"

type Props = {
    children?: React.ReactNode;
}

function AboutContainer({ children }: Props) {
    const [ state, setState ] = useState<number>(0)

    const about_us_text = <p>Prettyboy Pizza has always been built on being silly, lighthearted and fun in the genre of pizza. My “career” in pizza started with a fib I told my wife when I first met her, foolishly boasting a history of making home made pizzas when I had never once tried my hand at the craft. The result was not the “prettyboys” you see today but rather a “pretty boy” that she would playfully ridicule me about for years to come. Like a super villain on an arc towards revenge, I have spent the last 8+ years working in shops up the west coast honing my craft to show the haters (my unwaveringly supportive wife) what I’m made of. A culmination of working in different kitchens with different styles of pizza have landed me HERE crafting a not quite grandmother, not quite Detroit, not quite focaccia, party pizza. Designed with the sole purpose of feeding your pals pizza hot from the oven or cold from the fridge and hitting the spot every time. While the craft behind our product is serious, the pizza itself is a fun food made to share with friends at parties or even with friends on tour. Come get a tray and see for yourself!</p>
    const our_food_text = <p>Like a reverse mullet, our food is party in the front and business in the back. The greasy, cheesy, crispy exterior can only exist with the aid of a meticulous 48 hour poolish dough covered in diced Italian cheese and an array of house made sauces. All our sauces are made vegan and free of most common allergens that way all of our friends can get in on the action. Everything is made with the love, care and attention to detail we feel your perfect party pizza deserves. </p>
    const questions = [ ["Do you have gluten free options?", "We do! We make our own gluten-free dough in-house."], 
                        [" Are there restrooms available?", "Yep—two of them."], 
                        ["Can I apply to work here?", "Always! Drop off a resume anytime."], 
                        ["Do you have indoor and outdoor seating?", "Both! But the patio is the crown jewel of the space."], 
                        ["Are there vegan options?", "Definitely. All our dough and sauces are made vegan in-house. Just swap out the cheese and meat for vegan alternatives and we’re good to go." ], 
                        ["Do you sell pizza by the slice?", "Not quite—we serve 5x7 personal pizzas called “Hunks,” cut into two slices each."], 
                        ["How many people does one pizza feed?", "Our 10x14 tray is cut into 8 smaller slices. It’s perfect for one (very) hungry person or up to four folks with lighter appetites."], 
                        ["Is there Wi-Fi?", "Yep! Free Wi-Fi is available in the beer garden."], 
                        ["Are there power outlets available?", "There’s one public outlet in the space—perfect for a quick charge."], 
                        ["Do you take reservations?", "We don’t take reservations, but come on in—we’ll get you set up with some pizza."], 
                        ["Do you offer takeout or delivery?", "Sure do! Order takeout through our website or in person. For delivery, hit us up on DoorDash."], 
                        ["Is the restaurant family-friendly?", "Absolutely! Kids are welcome anywhere—just not at the bar itself."], 
                        ["Can I bring my dog?", "Friendly pets are welcome on the patio!"], 
                        ["Can you accommodate food allergies?", "It depends on the severity, but we can safely accommodate gluten and dairy allergies. Come by, talk to us—we’ll do our best to get you a pizza that works for you."] 
    ]

  return (
    <div className='AboutContainer'>
        <div className='about_content'>
        {
            state === 1 || state === 2 ?
                <AboutBox   title={<AboutTitle state={state} setState={setState}/>}
                            child_1={   state === 1 ? 
                                            <img src={ logo.src } className="about_logo" alt="Prettyboy Pizza" aria-hidden="true"/> 
                                        : state === 2 ?
                                            <div className='food_imgs'>
                                                {children}
                                            </div>
                                        :
                                            null
                            }
                            child_2={ state === 1 ? about_us_text : our_food_text  }
                            currentValue={state}
                            setCurrentValue={setState}
                />
            :
                <FAQs FAQs={questions} state={state} setState={setState} />
        }
        </div>
        <div className="state_buttons">
            <button className={ state === 0 ? "button_active" : "button_inactive" } onClick={() => setState(0)}>FAQs</button>
            <button className={ state === 1 ? "button_active" : "button_inactive" } onClick={() => setState(1)}>About Us</button>
            <button className={ state === 2 ? "button_active" : "button_inactive" } onClick={() => setState(2)}>Our Food</button>
        </div>  
    </div>
  )
}

export default AboutContainer