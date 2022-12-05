import React from "react";


export default function TravelCard(props){
    return(
        <div className="card">
            <img className="card--img" src={props.imageURL} alt="" />
            <div className="card--des">
                <div className="card--location">
                    <span className="card--locationIcon"><i className="fa-sharp fa-solid fa-location-dot"></i></span>
                    <span className="card--locationName">{props.location}</span>
                    <a href={props.googleMapsUrl} className="card--googleMap">View on Google Maps</a>
                </div>
                <h2 className="card--title">{props.title}</h2>
                <p className="card--date">{props.startdate} - {props.endDate}</p>
                <p className="card--details">{props.description}
                  </p>

            </div>
        </div>
    )
}