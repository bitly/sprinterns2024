import React from 'react'
import './RSVPButton.css'
    
function RSVPButton() {
    return (
     <div>
            <head>
                <meta charset="UTF-8" />
                <meta name="author" content="Vid&Safiya" />
                <meta name="description" content="This page creates the RVSP Button"/>
                <title>RVSP</title>
                <link rel="icon" href="html5.png" type="image/x-icon"/>
                <link rel="stylesheet" href="RSVPButton.css" type="text/css"/>
            </head>

     <body>
        <h1>"Event Name: ___"</h1> 
        <h2> "Location:___"</h2>
        <h2> "Description:___"</h2>  {/* Is this the same description as the one the user is suppose to enter? It might be too long for the design */}

        <div className="UserInfo">
          <form action="action_page.php">
            <div className="row">
              <div className="col-25">
                <label htmlFor="Email">Email</label>
              </div>
              <div className="col-75">
                <input type="text" id="Email" name="Email" placeholder="Enter your email..." />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="phoneNum">Phone Number</label>
              </div>
              <div className="col-75">
                <input type="text" id="phoneNum" name="Phone #" placeholder="Enter your phone number..." />
              </div>
            </div>
          </form>
        </div>

        <div className="button">
            <p>RSVP Here!</p>
        </div>
     </body>
    </div>
 )
};
export default RSVPButton;