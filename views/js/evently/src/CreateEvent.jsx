import React, {useState} from 'react';
import './CreateEvent.css';

function CreateEvent() {
  const [file, setFile] = useState();
  const [EventTitle, setEventTitle ] = useState("");
  const [DateForm, setDateForm] = useState("");
  const [TimeForm, setTimeForm] = useState("");
  const [LocationForm, setLocationForm] = useState("");
  const [DescriptionForm, setDescriptionForm] = useState("");
  const [AttendeesForm, setAttendeesForm] = useState("");
  const [PublicPrivate, setPublicPrivate] = useState("");
  const [HostName, setHostName] = useState("");
  const [ContactForm, setContactForm] = useState("");
  function handleChange (e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
const handleSubmit = async (e) => {
  console.log("Hello")
  e.preventDefault()
try {
var res = await fetch("http://localhost:3000/api/events", {
  method: "POST",
  //headers: { 'Content-Type': 'application/json' },
  mode: "cors",
  body: JSON.stringify({
    event_title: EventTitle, date: DateForm, time: TimeForm, location: LocationForm, host_name: HostName, description: DescriptionForm, contact_info: ContactForm, public_private: "public", max_attendees: parseInt(AttendeesForm) 
  }),
});
console.log(res)
}
 catch (err){console.log(err);}
let resJson = await res.json()
if (res.status === 201) window.location.replace("/view-event/"+resJson.event_id)
}
console.log("EventTitle", EventTitle)
    return(
      <div className="wrapper"> 
        <div className = "container">
          <div className = "form-container">
            <h2> Enter the details of your event:</h2>

            <form onSubmit={handleSubmit}> 
            {/* Event title form */}
            <fieldset className = "input-box-fieldset"> {/* Creates box around the text and input box */}
              <h4>Event title</h4>
              <input value={EventTitle} className = "input-boxes" onChange={(e) => {
                console.log(e.target.value)
                setEventTitle(e.target.value)}}/> {/* Creates a box that takes an input, saves it into title */}
            </fieldset> <br></br>

            {/* Date form */}
            <fieldset className = "input-box-fieldset"> 
              <h4>Date</h4>
              <input value={DateForm} className = "input-boxes" placeholder='(mm/dd/yyyy)' onChange={(e) => setDateForm(e.target.value)}/> 
            </fieldset> <br></br>

            {/* Time form */}
            <fieldset className = "input-box-fieldset">
                <h4>Time</h4>
                <input value={TimeForm} className = "input-boxes" onChange={(e) => setTimeForm(e.target.value)}/>
            </fieldset> <br></br>

            {/* Location form */}
            <fieldset className = "input-box-fieldset">
                <h4>Location</h4>
                <input value={LocationForm} className = "input-boxes" onChange={(e) => setLocationForm(e.target.value)}/>
            </fieldset> <br></br>

            {/* Description form */}
            <fieldset className = "input-box-fieldset">
                <h4>Description</h4>
                <input value={DescriptionForm} className = "input-boxes" onChange={(e) => setDescriptionForm(e.target.value)}/>
            </fieldset> <br></br>


            {/* Max # of attendees form */}
            <fieldset className = "input-box-fieldset">
                <h4>Max number of attendees</h4>
                <input value={AttendeesForm} className = "input-boxes" onChange={(e) => setAttendeesForm(e.target.value)}/>
            </fieldset> <br></br>

            {/* public/private form */}
            <fieldset className = "pub-priv-box-fieldset">
                <h4>Public/Private</h4>
                <select value={PublicPrivate} onChange={(e) => setPublicPrivate(e.target.value)}>
                 <option name="public" value="public" > public</option>
                 <option name="private" value="private" >private</option>
                </select>
                
            </fieldset> <br></br>

            {/* Host name form */}
            <fieldset className = "input-box-fieldset">
                <h4>Host name</h4>
                <input value={HostName} className = "input-boxes" onChange={(e) => setHostName(e.target.value)}/>
            </fieldset> <br></br>

            {/* Contact info form */}
            <fieldset className = "input-box-fieldset">
                <h4>Contact info</h4>
                <input value={ContactForm} className = "input-boxes" onChange={(e) => setContactForm(e.target.value)}/>
            </fieldset> <br></br><br></br>
            <button type="submit" className="save-button">Publish</button>
            </form>
          </div>

          <div className='upload-container'>
            {/* Upload an image */}
            {/* fieldset style creates a gray box */}
            <fieldset style={{ backgroundColor: 'rgba(217, 217, 217)', padding: '200px'}}> 
              <h2> Choose an image:</h2>
              {/* Takes a file as input; onChange passes value to handleChange */}
              <input type = "file" onChange={handleChange} />
              <img src = {file} />
            </fieldset>
            <br></br><br></br> 
          </div>
        </div>
      </div>
    )
  }

export default CreateEvent;
