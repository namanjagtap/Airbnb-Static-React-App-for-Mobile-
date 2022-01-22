import React from "react"

export default function Navbar(){
    return(
        <nav>
            <img src={process.env.PUBLIC_URL + "/images/airbnb_logo.png"} />
        </nav>
    )
}