// import react
import React from 'react';
// import styling
import '../css/SegmentTitle.css';

function SegmentTitle(props) {
    return (
        <div id="segment-title-wrapper">
            <p id="segment-title">{props.title}</p>
            <div id="segment-title-underline"/>
        </div>
    );
}

export default SegmentTitle;