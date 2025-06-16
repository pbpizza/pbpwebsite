import React, {useState} from 'react'
import AboutBox from './AboutBox'
import DividerContainer from './DividerContainer'
import FAQs from './FAQs'
import '../styles/pages/about.scss'
import AboutTitle from './AboutTitle'

type Props = {}

function AboutContainer({}: Props) {
    const [ state, setState ] = useState<number>(0)

    const food_imgs = ( 
                        <div className="food_imgs">
                            <img className='food_box' src="/src/assets/image/food_1.jpg" />
                            <img className='food_box' src="/src/assets/image/food_2.jpg" />
                            <img className='food_box' src="/src/assets/image/food_3.jpg" />
                            <img className='food_box' src="/src/assets/image/food_4.jpg" />
                        </div> 
    )
    const about_us_text = <p>Prettyboy Pizza was born out of a love for silliness, lightheartedness, and having fun in the genre of pizza. My “career” began with a harmless lie I told my wife when we first met—bragging that I made homemade pizzas, despite never having touched dough in my life. The result? Not the “Prettyboys” you know today, but rather one “pretty boy” who became the butt of an ongoing inside joke for years to come.

Like a supervillain on a redemption arc (or maybe just a guy with a point to prove), I’ve spent the last 8+ years working in pizza shops up and down the West Coast, honing my craft to silence the haters—namely, my incredibly supportive and lovingly relentless wife.

What emerged from this journey is our pizza: a style that isn’t quite grandma, not quite Detroit, not quite focaccia—but a party pizza all its own. It’s made to be devoured fresh out of the oven or straight from the fridge at 2AM—whatever the vibe calls for. While we take our craft seriously, we know pizza is meant to be fun. It’s food for friends, road trips, hangouts, and celebrations. So come grab a tray and see what we’re all about.</p>
    const our_food_text = <p>Like a reverse mullet, our pizza is party in the front, business in the back. That greasy, crispy, cheesy goodness up top? It’s backed by a meticulous 48-hour poolish dough, topped with diced Italian cheese and a line-up of house-made sauces.

All our sauces are vegan and free from most common allergens—because we believe everyone should be able to join the party. Every tray is made with love, care, and obsessive attention to detail—exactly what your perfect party pizza deserves.</p>
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
                                            <img src="/src/assets/image/pbp_logo.png" className="about_logo"/> 
                                        : state === 2 ?
                                            food_imgs
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