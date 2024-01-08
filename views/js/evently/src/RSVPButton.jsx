import React from 'react'
import './RSVPButton.css'
    
function RSVPButton() {
    return (
     <div className="rsvp-event">
       
    
        {/*<h1>"Event Name: ___"</h1> 
        <h2> "Location:___"</h2>
        <h2> "Description:___"</h2>  {/*Is this the same description as the one the user is suppose to enter? It might be too long for the design */}

        <div className="UserInfo">
          <h1>"Event Name: ___"</h1> 
          <h2> "Location:___"</h2>
          <h2> "Description:___"</h2> 
          <form action="action_page.php">
            <div className="row">
              <div className="col-25">
                <label htmlFor="Email">Email</label>
              </div>
              <div className="col-75">
                <input type="text" id="Email" name="Email" placeholder="Enter your email..." />
              </div>
              <br />
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="phoneNum">Phone Number</label>
              </div>
              <div className="col-75">
                <input type="text" id="phoneNum" name="Phone #" placeholder="Enter your phone number..." />
              </div>
              <br />
            </div>
          </form>
          <br />
          <div className="button">
            <p>RSVP Here!</p>
          </div>
        </div>

     
    </div>
 )
};
export default RSVPButton;