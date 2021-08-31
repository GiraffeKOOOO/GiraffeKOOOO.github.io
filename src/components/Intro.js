// import react
import React from 'react';
// import necessary components

// import styling
import '../css/Intro.css';
// import media
import facePicture from '../media/face.png';

function Intro() {
    return (
        <div id="intro-wrapper">
            <img
                id="face-img"
                alt="face picture"
                src={facePicture}
            />
            <div id="intro-text-wrapper">
                <p id="intro-name">Paskal Stepien</p>
                <p id="intro-occupation">Junior Software Engineer</p>
                <p id="intro-academic-title">First Class Graduate with Honors in Software Engineering</p>
            </div>
        </div>
    );
}

export default Intro;