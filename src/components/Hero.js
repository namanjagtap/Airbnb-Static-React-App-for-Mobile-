import React from "react"

export default function Hero(){
    return(
        <section className="hero">
            <img src={process.env.PUBLIC_URL + "/images/hero_image.png"} className="hero--img" />
            <h2 className="hero--title" >Online Experiences</h2>
            <p className="hero--text">Join unique interactive activities leb by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}