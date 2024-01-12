import React, { useState } from "react";
import "./RSVPForm.css";
import { Link } from "react-router-dom";

export default function RSVPForm() {
  const [eventId, setEventId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [RSVPResponse, setRSVPResponse] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const handleRSVPSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3000/api/rsvps", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          event_id: parseInt(eventId),
          first_name: firstName,
          last_name: lastName,
          phone_number: phoneNumber,
          email: email,
          rsvp_response: RSVPResponse,
        }),
      });
      if (res.status === 201) {
        setSuccessMessage("RSVP submitted!");
        setTimeout(window.location.replace("/community-page"), 4000);
      } else if (res.status === 500) {
        setError("Please complete all fields!");
      }
    } catch(err) {
      setError(error);
      setError("Something went wrong with form submission!");
    }
  };

  return (
    <>
      <div className="create-rsvp">
        <div className="rsvp-form-container">
          <form className="rsvp-form" onSubmit={handleRSVPSubmit}>
            <Link to="/community-page">
              <span className="exit"> X </span>
            </Link>
            <h2 className="rsvp-title">Register Here</h2>

            <div className="eventid-rsvp-container">
              <div className="eventId">
                <label> Event ID: </label>
                <input type="number" className="rsvp-input-boxes" value={eventId} onChange={(e) => setEventId(e.target.value)}/>
              </div>

              <div className='response-container'>
                  <label> RSVP: </label>
                      <select className = "rsvp-input-boxes" value={RSVPResponse} onChange={(e) => setRSVPResponse(e.target.value)}>
                          <option name=" " value=" " >  </option>
                          <option name="yes" value="yes" > Yes </option>
                          <option name="no" value="no" > No </option>
                          <option name="maybe" value="maybe" > Maybe </option>
                        </select>
                </div>
              </div>

            <div className="first-last-name-container">
              <div className="first-name">
                <label> First Name: </label>
                <input type="text" className="rsvp-input-boxes" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>

              <div className="last-name">
                <label> Last Name: </label>
                <input type="text" className="rsvp-input-boxes" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
            </div>

            <div className="phone-email-container">
              <div className="phone">
                <label> Phone #: </label>
                <input type="text" className="rsvp-input-boxes" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
              </div>

              <div className="email">
                <label> Email: </label>
                <input type="text" className="rsvp-input-boxes" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>

            <button type="submit" className="rsvp-submit-btn"> Register </button>
          </form>

          {error ? (
            <>
              {error && (
                <div role="alert" className="error-alert">
                  <div>{error}</div>
                </div>
              )}
            </>
          ) : (
            <>
              {successMessage && (
                <div role="alert" className="alert">
                  <div>{successMessage}</div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
