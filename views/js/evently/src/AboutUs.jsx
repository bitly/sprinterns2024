import React from 'react'
import './AboutUs.css'

function AboutUs() {
    return (
        <div className="AboutUs">
            <h1>The team:</h1>
            <div>
                <ul>
                    <li>Laurent Benjamin</li>
                    <li>Noshin Ahmed</li>
                    <li>Sharron Qian</li>
                    <li>Tiffany Zhu</li>
                    <li>Umida Ravshanova</li>
                </ul>
            </div>
            <h1>Special thanks to:</h1>
            <div>
                <ul>
                    <li>Diana Bishop</li>
                    <li>Ange Louis</li>
                    <li>Grace McGrath</li>
                    <li>Makayla Clausen</li>
                </ul>
            </div>
            <h1>and everyone at Bitly who guided us on his project!</h1>
        </div>
    )
};

export default AboutUs;