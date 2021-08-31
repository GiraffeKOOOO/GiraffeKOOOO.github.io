// import react
import React from 'react';
// import necessary components
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
// import styling
import '../../css/Header/HeaderButton.css';
// import media

function HeaderButton(props) {
    return (
      <div id="button-wrapper">
          <Link to={'/'+props.location}>
              <Button variant="outline" id="button-component">
                {props.name}
              </Button>
            </Link>
      </div>
    );
}

export default HeaderButton;