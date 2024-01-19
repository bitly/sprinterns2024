import React, {useState} from 'react'
import './CreateHost.css'
import profileImage1 from "./profile_img.jpg"

function CreateHost() {
    const [Name, setName] = useState("");
    const [Phone, setPhone] = useState("");
    const [Email, setEmail] = useState("");
    const [Link, setLink] = useState("");
    const [ProfileImage, setProfileImage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          let res = await fetch("http://localhost:3000/api/events", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify({
              Name: Name, Phone: Phone, Email: Email
            }),
          });
        }
        catch (err){
          console.log(err);
        }
      }

    return (

 <div className='create-host-container'> 

     <div className='row'>

        <div className='column'>
            <div className='account-layout'>
                <img src={profileImage1}
                alt="Profile picture" className="profile-image" />
                <br />
                <label> Enter image url: </label>
                 <input type="text" className='image-input' value = {ProfileImage} onChange={(e) => setProfileImage(e.target.value)}/>
                 <br />
                <label>Do you want to add any links?</label>
                <br />
                <label> (Optional) </label>
                 <input type="text" className='link-input' value = {Link} onChange={(e) => setLink(e.target.value)}/>
                 <br />
                 <button className= "button" type="submit">Create account</button>
            </div>
        </div>
    
     
            <div className='column'>
                <div className='input-form'>
                    <h4>Are you an individual or an organization?</h4>
                    <select>
                        <option value="Individual">Individual</option>
                        <option value="Organization">Organization</option>
                    </select>
                    <br />
                    <label> Name: </label>
                    <input type="text" className='name-input' value = {Name} onChange={(e) => setName(e.target.value)}/>
                    <label> Phone Number: </label>
                    <input type="text" className='phone-input' value = {Phone} onChange={(e) => setPhone(e.target.value)}/>

                    <h4>Do you want to make your phone number public?</h4>
                    <select>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <br />
                    <label> Email: </label>
                    <input type="text" className='email-input' value = {Email} onChange={(e) => setEmail(e.target.value)}/>

                    <h4>Do you want to make your email public?</h4>
                    <select>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>

                </div>

            </div>

    </div>

</div>
      
    )
}

export default CreateHost;