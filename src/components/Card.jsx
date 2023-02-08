import React from "react";
function Card (props) {
    return(
        <>
        <div className="containerTwo">
            <div className="imageHome">
        <img src={`../../images/${props.item.image}`} className="images"/>
        </div>

        <div className="textHome">
        <img src={require("../components/location.png")} className="locationImage" />
         <p className="locationText">{props.item.location}</p>
         <a  className= "googleLink" href={props.item.googleMapsUrl}>View on Google maps </a>
        </div>
        <div className="textHomeTwo">
        <h1>{props.item.title}</h1>
        <p className="dates">{props.item.startDate}-{props.item.endDate}</p>
        <h2>{props.item.description}</h2>
        </div>
        </div>
        </>
    )
}
export default Card;