import React from 'react'
import soleado from '../media/soleado.png'
import normal from '../media/normal.png'
import nublado from '../media/nublado.png'
import hielp from '../media/hielo.png'

export const Home = ({ data }) => {

    let temp

    if(data.temp >= -30 && data.temp <= 0){ temp = hielp }
    if(data.temp >= 1 && data.temp <= 15){ temp = nublado }
    if(data.temp >= 16 && data.temp <= 25){ temp = normal }
    if(data.temp >= 26 && data.temp <= 55){ temp = soleado }
    return (
        <>
            <img className='img' src={temp} alt="soleado" />
            <div className='Info'>
                <h1>{data.temp}<span style={{ opacity: "50%" }}>°C</span></h1>
                <h2>{data.city} <span style={{ opacity: "70%", fontSize: "30px" }}>{data.country}</span></h2>
            </div>
        </>
    )
}
