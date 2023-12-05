import React from "react";
import {
  Link
} from "react-router-dom";
import './App.css'
import './HomePage.css'
import CreateEvent from './CreateEvent.jsx'
import CommunityPage from './CommunityPage.jsx'

const HomePage: React.FC = () => {
    return (
        <div className = "HomePage">
            <div className = "col-xs-8 col-xs-offset-2 jumbotron text-center" id="MainText">
                <h2 className = "Text">Host your events here!</h2>
                <Link to="/create-event" class="buttons">Get Started</Link>
                <b></b>
                <h2 className = "Text">Find an event!</h2>
                <Link to="/community-page" class="buttons">Browse</Link>
            </div>
        </div>
    );
}

export default HomePage