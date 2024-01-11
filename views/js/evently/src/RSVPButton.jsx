import React, {useState, useEffect} from 'react';
import './RSVPButton.css';
    
function RSVPButton() {
  const [eventData, setEventDetails]= useState([]);
   const getEvent = async (e) => {
    
   
    try {
      let res = await fetch("http://localhost:3000/api/event/5",  {
        method: "GET",
        mode: "cors",
      });
      if (res.status === 201) {
        let data = await res.json()
        setEventDetails(data)
        
       }
     }
     catch (err){
       console.log(err);
     }
   }
   useEffect(()=>{
    getEvent()
   }, [])
   console.log(eventData)

    return (
     <div className="rsvp-event">
            <div className="user-info">
                <h1 className="event-title">{eventData.event_title}</h1> 
                <div className="image-container">
                    <img
                        src={eventData.image_url}
                        alt="User inputted description"  
                        style={{
                          width: "100%",
                          height: "100%", 
                        }}
                    />
                </div>

                <div className="event-details">
                    <div className="location-description">
                      <p> 📍 {eventData.location}</p>
                      <p> {eventData.description}</p>
                    </div>

                    <div className="contact-container">
                    <p> Host Name: {eventData.host_name}</p>
                    <p>Contact: {eventData.contact_info}</p>
                    </div>
              
                    <div className="date-time-container">
                        <p> Date: {eventData.date}</p>
                        <p> Time: {eventData.time}</p>
                    </div>
                  

                    <div className="max-rsvp-container">
                      <p> Max Attendees: {eventData.max_attendees}</p>
                      <p> RSVPs: {eventData.num_of_RSVP}</p>
                    </div>
              
                </div >
                <button className="rsvp-button" onClick={getEvent}>
                  RSVP!
                </button>
            </div> 
        </div>
 )
};
export default RSVPButton;