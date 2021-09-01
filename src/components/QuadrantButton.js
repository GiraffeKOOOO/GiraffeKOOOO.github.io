// import react
import React from 'react';
// import necessary components
import { Container, Col, Row } from 'react-bootstrap';
import { Book, Briefcase, Envelope, JournalCode, QuestionCircle } from 'react-bootstrap-icons';
// import styling
import '../css/QuadrantButton.css';
// import media

function IconSwitch(iconName) {
    switch(iconName) {
        case "Projects":
            return <JournalCode className="quadrant-button-icon" size={100}/>
        case "Work Experience":
            return <Briefcase className="quadrant-button-icon" size={100}/>
        case "Academia":
            return <Book className="quadrant-button-icon" size={100}/>
        case "Contact":
            return <Envelope className="quadrant-button-icon" size={100}/>
        default:
            return <QuestionCircle className="quadrant-button-icon" />
    }
}

function QuadrantButton(props) {
    return (
        <div id="quadrant-button-wrapper" style={{backgroundColor: props.colour}} onClick={()=> console.log("something")}>
            {{/** the div on click needs to take the user to the location on the page */}}
            <Container>
                <Row>
                    <Col id="row-quadrant-button-icon" xs={1} md={1} lg={1} xl={1} xxl={1}>
                        {IconSwitch(props.name)}
                    </Col>
                    <Col id="row-quadrant-button-name" xs={11} md={11} lg={11} xl={11} xxl={11}>
                        <p id="quadrant-button-label">{props.name}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default QuadrantButton;