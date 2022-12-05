import React from "react"
import TravelCard from "./components/TravelCards"
import Navbar from "./components/Navbar"
import data from "./data"

export default function App() {

  const cards = data.map(function(item){
    return  <TravelCard 
              title={item.title}
              location={item.location}
              googleMapsUrl={item.googleMapsUrl}
              startdate={item.startDate} 
              endDate={item.endDate} 
              description={item.description}
              imageURL={item.imageUrl}/>
      })
  return (
      <div>
          <Navbar />
          <div className="cards-list">
           {cards}
          </div>
      </div>
       
      
  )
}
