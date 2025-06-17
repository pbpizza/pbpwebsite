import React, { useState } from 'react'
import '../styles/components/MobileNavigation.scss'
import DividerContainer from './DividerContainer';

import logo from "../assets/image/pbp_logo.png"
import close_icon_dark from "../assets/icon/close_icon_dark.png"
import menu_icon from "../assets/icon/menu_icon.png"
import pizza_icon from "../assets/icon/pizza_icon.png"
import divider_line from "../assets/image/divider_line.png"

type Props = {
    pathname: string;
}

const paths = [ "home", "menu", "order", "about" ]

export default function MobileNavigation({ pathname }: Props) {
    const [ isOpen, setIsOpen ] = useState<boolean>(false)

  return (
    <div className={'MobileNavigation' + ( isOpen ? ' isOpen' : ' isClosed') }>
        {
            pathname === "/" &&
                <img className="logo" src={logo.src} alt="Prettyboy Pizza" aria-hidden="true" />
        }
        <div className={'container' + ( isOpen ? ' containerIsOpen' : ' containerIsClosed') } style={ pathname !== '/' ? { top: "20px", width: "87%"} : { top: "80px"} }>
                <div className={'inner_border' + ( isOpen ? ' inner_border_is_open' : ' inner_border_is_closed') }>
                    <div className="selection_area">
                        <h3 className="selected_option" style={ pathname === "/" ? {marginLeft: "50px"} : {}}>{ pathname === '/' ? "HOME" : pathname.slice(1).slice(0, -1).toLocaleUpperCase()}</h3>
                        <div className="menu_button" onClick={() => setIsOpen(!isOpen)}>
                            <img className="menu_icon" alt="Toggle navigation menu." role="button" src={ isOpen ? close_icon_dark.src : menu_icon.src }  />
                        </div>
                    </div>
                    {
                        isOpen &&
                                <div className='open_container'>
                                    <div className="divider_1">
                                        <img className="divider_line_1" src={divider_line.src} alt="" role="presentation" />
                                        <img src={pizza_icon.src} alt="" role="presentation" className="pizza_icon" />
                                        <img className="divider_line_1" src={divider_line.src} alt="" role="presentation" />
                                    </div>
                                    <div className="options_container">
                                    {
                                        paths.filter((path) => (pathname === "/") ? (path !== "home") : (path !== pathname) ).map((path, index) => {
                                            return (
                                                <a key={index} href={ path === "home" ? "/" : `/${path}`}>
                                                    <div className="nav_option">
                                                        <h3 className="option_text">{path.toLocaleUpperCase()}</h3>
                                                    </div>
                                                </a>
                                            )
                                        })
                                    }
                                    </div>
                                    <div className="phone" onClick={() => window.location.href = 'tel:+15035555555'} >
                                        <h5>PHONE:</h5>
                                        <h5>(503) 555-5555</h5>
                                    </div>
                                    <div className="divider_2">
                                        <img className="divider_line_2" src={divider_line.src} alt="" role="presentation" />
                                        <h5 aria-hidden="true">PRETTYBOY</h5>
                                        <img className="divider_line_2" src={divider_line.src} alt="" role="presentation" />
                                    </div>
                                </div>
                    }
                </div>
        </div>
    </div>
  )
}