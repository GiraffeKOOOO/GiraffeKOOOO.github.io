// import react
import React from 'react';
// import necessary components
import { ArrowRight, QuestionCircle } from 'react-bootstrap-icons';
// import styling
import '../css/QuadrantButton.css';
// import media

function IconSwitch(iconName) {
    switch(iconName) {
        case "cogwheel":
            <ArrowRight/>
            break;
        case "something2":
            break;
        default: 
            <QuestionCircle/>
            break;
    }
}

function QuadrantButton(props) {
    return (
        <div id="quadrant-button-wrapper" style={{backgroundColor: props.colour}} onClick={()=> console.log("poop")}>
            {IconSwitch(props.icon)}
            <p id="quadrant-button-label">{props.name}</p>
        </div>
    );
}

export default QuadrantButton;