import React, {useState, useEffect} from 'react'
import './CommunityPage.css'

function CommunityPage() {
    const [eventData, setEventDetails]= useState([]);
    const getEvent = async (e) => {
    
    try {
      let res = await fetch("http://localhost:3000/api/event/6",  {
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
        <div className="event-nav-container">
            <h2> Browse Events</h2>
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
            </div>
            <div className="link-container">
              {/*add a filter to filter event tags */}
              <button className="btn"> All Events </button>
              <button className="btn"> Birthday </button>
              <button className="btn"> Wedding </button>
              <button className="btn"> Graduation </button>
              <button className="btn"> Anniversary </button>
            </div>

            <div className="filter-btn">
            </div>

              {/* row 1  */}
            <div className="row"> 

              {/* column 1  */}

              <div className="column"> 
                <div className="event-img">
                  <img 
                  src={eventData.image_url}
                  alt="User inputted description."
                  style={{
                    width: "700px",
                    height: "450px",
                   
                  }}
                  />
                    <div className="event-info"> 
                      <h4> {eventData.event_title}</h4>
                      <div className="date-time-container">
                        <h4> Date: {eventData.date}</h4>
                        <h4> Time: {eventData.time}</h4>
                      </div>
                    </div>
                </div>
              </div>

                  {/* column 2  */}
              <div className="column"> 
                <div className="event-img">
                  <img 
                  src={eventData.image_url}
                  alt="User inputted description."
                  style={{
                    width: "700px",
                    height: "450px",
                  }}
                  />
                    <div className="event-info"> 
                      <h4> {eventData.event_title}</h4>
                      <div className="date-time-container">
                        <h4> Date: {eventData.date}</h4>
                        <h4> Time: {eventData.time}</h4>
                      </div>
                    </div>
                 </div>
              </div>
                {/* column 3  */}
                <div className="column"> 
                  <div className="event-img">
                    <img 
                    src={eventData.image_url}
                    alt="User inputted description."
                    style={{
                      width: "700px",
                      height: "450px",
                    }}
                    />
                      <div className="event-info"> 
                        <h4> {eventData.event_title}</h4>
                        <div className="date-time-container">
                          <h4> Date: {eventData.date}</h4>
                          <h4> Time: {eventData.time}</h4>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </div>
    )
};

export default CommunityPage;