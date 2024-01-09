import React from 'react'
import './AboutUs.css'
import profileImage1 from './profile_img.jpg'; // Import your profile images
import profileImage2 from './profile_img.jpg';
import profileImage3 from './profile_img.jpg';
import profileImage4 from './profile_img.jpg';


function AboutUs() {
    return (
        <div className="AboutUs">
            <div className= "header">
                <h1>Our Mission</h1>
            </div>
            
            <div className="missionStatement">
                <p>Our mission is to curate unforgettable experiences by seamlessly connecting individuals and communities through innovative and diverse events. We strive to inspire and empower event organizers, fostering a platform that celebrates creativity, fosters meaningful connections, and leaves a lasting impact on every participant.</p>
            </div>
            {/* <div className="profileImages">
                <img src={profileImage1} alt="Profile 1" />
                <img src={profileImage2} alt="Profile 2" />
                <img src={profileImage3} alt="Profile 3" />
                <img src={profileImage4} alt="Profile 4" />
            </div> */}
            
            <div className="personInfo">
                {/* Information about each person */}
                <div className="person">
                    <div className="profileImages">
                        <img src={profileImage1} alt="Person 1" />
                    </div>
                    <h2>Name 1</h2>
                    <p>Information about person 1...</p>
                    <div className="socialMediaLinks">
                        <a href="#">Social Media 1</a>
                    </div>    
                </div>
                <div className="person">
                    <div className="profileImages">
                        <img src={profileImage2} alt="Person 2" />
                    </div>
                    <h2>Name 2</h2>
                    <p>Information about person 2...</p>
                    <div className="socialMediaLinks">
                        <a href="#">Social Media 2</a>
                    </div> 
                </div>
                <div className="person">
                    <div className="profileImages">
                        <img src={profileImage3} alt="Person 3" />
                    </div>
                    <h2>Name 3</h2>
                    <p>Information about person 3...</p>
                    <div className="socialMediaLinks">
                        <a href="#">Social Media 3</a>
                    </div> 
                </div>
                <div className="person">
                    <div className="profileImages">
                        <img src={profileImage4} alt="Person 4" />
                    </div>
                    <h2>Name 4</h2>
                    <p>Information about person 4...</p>
                    <div className="socialMediaLinks">
                        <a href="#">Social Media 4</a>
                    </div> 
                </div>
                <div className="person">
                    <div className="profileImages">
                        <img src={profileImage1} alt="Person 5" />
                    </div>
                    <h2>Name 5</h2>
                    <p>Information about person 5...</p>
                    <div className="socialMediaLinks">
                        <a href="#">Social Media 5</a>
                    </div> 
                </div>
            </div>
        </div>
        
    )
};

export default AboutUs;