import React from "react";
import './App.css'
import './RSVP.css'
import logo from './bitly-logo.png';


function RSVP() {
    return(
    <div>
        <img src={logo} alt="Bitly Logo"></img>
        <h1 class = "Title">Event.ly</h1>
        <h2 class = "rsvp">RSVP</h2>
        <form class = "form-inline">
            <label>Name:</label>
            <input type="text" className="Name:" 
                required
            />

            <label>Email:</label>
            <input type="text" className="Email:"
                required
            />

            <label>Are you coming?</label>
                <select className="dropdown">
                    
                    <option>
                        yes </option>
                    <option>
                        no </option>
                    <option>
                        maybe </option>
                </select>
             
            <label>Comments:</label>
            <input type="text" className="Comments" />
          
        

            <button>Submit</button>
          


        </form>
    </div>

    );
}


export default RSVP;

