import React, {useState, useEffect} from 'react';
import './HostProfilePage.css';
import profileImage1 from './profile_img.jpg';
    
function HostProfilePage() {
  const [eventData, setEventDetails]= useState([]);
   const getEvent = async (e) => {
 
    try {
      let res = await fetch("http://localhost:3000/api/event/6",  {
        method: "GET",
        mode: "cors",
      });
      if (res.status === 200) {
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

    return(
        <div className="profile-page">
            <div className="row">
                <div className="prof-header">
                    <div className="prof-img-container">
                        <img
                        src={profileImage1}
                        alt="Description of the host."
                        />
                    </div>
                    <div className="host-info">
                        <h3> {eventData.host_name}</h3>
                        <h3> {eventData.contact_info}</h3>
                    </div>
                </div>
                
            </div>
            <div className="row">
                <div className="pin-event">
                    <div className="row">
                        <div className="pin-img-container"> 
                            <img
                            src={eventData.image_url}
                            alt="Description of party."
                            />
                        </div>
                        <div className="pin-event-info">
                            <div className="pin-header">
                                <h3> {eventData.event_title} in X days! Don't miss it!</h3>
                            </div>
                            <h3>Description: {eventData.description}</h3>
                            <h3>Date: {eventData.date}</h3>
                            <h3>Time: {eventData.time}</h3>
                        </div> 
                    </div>
                </div> 
            </div>
           
            <div className="list-events">
                <h2> Upcoming Events!</h2>
                <ol> 
                    <li><div className="row">
                            <div className="img-container"> 
                                <img
                                src={eventData.image_url}
                                alt="Description of party."
                                />
                            </div>
                            <div className="event-info">
                                <h3>Description: {eventData.description}</h3>
                                <h3>Date: {eventData.date}</h3>
                                <h3>Time: {eventData.time}</h3>
                            </div> 
                        </div></li>
                        <li><div className="row">
                            <div className="img-container"> 
                                <img
                                src={eventData.image_url}
                                alt="Description of party."
                                />
                            </div>
                            <div className="event-info">
                                <h3>Description: {eventData.description}</h3>
                                <h3>Date: {eventData.date}</h3>
                                <h3>Time: {eventData.time}</h3>
                            </div> 
                        </div></li>
                        <li><div className="row">
                            <div className="img-container"> 
                                <img
                                src={eventData.image_url}
                                alt="Description of party."
                                />
                            </div>
                            <div className="event-info">
                                <h3>Description: {eventData.description}</h3>
                                <h3>Date: {eventData.date}</h3>
                                <h3>Time: {eventData.time}</h3>
                            </div> 
                        </div></li>
                </ol>

            </div>
           
            
            

           



        </div>
       



        
    




    )
};
export default HostProfilePage;
