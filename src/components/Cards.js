import  React from "react"

export default function Cards(props){
    let badgetext
    if(props.openSpots===0)
        badgetext = "SOLD OUT"
    else if(props.location==="Online")
        badgetext = "ONLINE"
    return (
        <div className="card">
            {badgetext && <div className="card--badge">{badgetext}</div>}
            <img src={process.env.PUBLIC_URL + `/images/${props.coverImg}`} className="card--img" />
            <div className="card--stats">
                <img src={process.env.PUBLIC_URL + "/images/Star.png"} className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray" >({props.stats.reviewCount}) • </span>
                <span className="gray" >{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><b>From ${props.price}</b> / person</p>
        </div>
    )
}