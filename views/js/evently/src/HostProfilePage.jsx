import React, {useState, useEffect} from 'react';
import './HostProfilePage.css';
import profileImage1 from './profile_img.jpg';
import axios from 'axios';
    
function HostProfilePage() {
  const [eventData, setEventDetails]= useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  useEffect(() => {
    const getEvents = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('http://localhost:3000/api/public-events');
        if (response.status === 200) {
          setEventDetails(response.data);
        }
        setIsLoading(false);
      } catch (err) {
        setError('Error fetching events. Please try again.');
        setIsLoading(false);
        console.error(err);
      }
    };

    getEvents();
  }, []);

  const pinnedEvent = eventData.length > 0 ? eventData[0] : null;
  const hostInfo = {
    host_name: 'Name of the Host',
    contact_info: 'Contact info of host',
  }

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
                        <h3> {hostInfo.host_name}</h3>
                        <h3> {hostInfo.contact_info}</h3>
                    </div>
                </div>
                
            </div>
            <div className="row">
                <div className="pin-event">
                    <div className="row">
                        {pinnedEvent && (
                        <div key={pinnedEvent.event_id} className="pin-img-container">
                            <img src={pinnedEvent.image_url} alt="Description of pinned event." />
                        </div>
                    )}
                        <div className="pin-event-info">
                            {pinnedEvent ? (
                                <div>
                            <div className="pin-header">
                                <h3>{pinnedEvent.event_title} in X days! Don't miss it!</h3>
                            </div>
                            <h3>Description: {pinnedEvent.description}</h3>
                            <h3>Date: {pinnedEvent.date}</h3>
                            <h3>Time: {pinnedEvent.time}</h3>
                        </div>
                    ) : (
                        <p> Event couldn't load sorry!</p>
                    )}
                    </div>
                    </div>
                </div>
            </div>
           
            <div className="list-events">
                <h2> Upcoming Events!</h2>
                <ol className="list-events"> 
                    {eventData.map((event) => (
                        <li key={event.event_id}>
                            <div className="row">
                                <div className="img-container"> 
                                    <img
                                    src={event.image_url}
                                    alt="Description of party."
                                    />
                                </div>
                                <div className="event-info">
                                    <h3>Description: {event.description}</h3>
                                    <h3>Date: {event.date}</h3>
                                    <h3>Time: {event.time}</h3>
                                 </div> 
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
export default HostProfilePage;
