import React from 'react'
import Logo from "../media/soleado.png"

export const Footer = () => {
    return (
        <div className='Footer'>
            <img src={Logo} alt="logo" />
            <div>
                <a href="https://eltiempo.luc4s.dev"><h1>EL TIEMPO</h1></a>
                <a href='https://luc4s.dev' >By: Luc4s.Dev</a>
            </div>

        </div>
    )
}
