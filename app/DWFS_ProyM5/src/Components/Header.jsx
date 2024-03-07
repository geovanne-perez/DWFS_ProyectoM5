import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faChess } from "@fortawesome/free-solid-svg-icons";

const Header = () => {

// Hook State
// Use State returns an array with two elements:
// 1. The current state value
// 2. A function that lets you update it

const [btnState1,setBtnState1] = useState('nav-link'); // btnState = '', setBtnState = function('');
const [btnState2,setBtnState2] = useState('nav-link'); // btnState = '', setBtnState = function('');
const [btnState3,setBtnState3] = useState('nav-link'); // btnState = '', setBtnState = function('');
const [btnState4,setBtnState4] = useState('nav-link'); // btnState = '', setBtnState = function('');

// HandlerButton function
// This function will be called when the user clicks on the button
// It will change the value of btnState to 'nav-link active'
// This will change the style of the button
// The button will be highlighted
const HandlerButton = (e) => {
    setBtnState1('nav-link');    
    setBtnState2('nav-link');
    setBtnState3('nav-link');
    setBtnState4('nav-link');
    switch (e.target.textContent) {
        case 'Top by Rate':
            setBtnState1('nav-link active');
            break;
        case 'Top by Win Count':
            setBtnState2('nav-link active');
            break;
        case 'Top by Country':
            setBtnState3('nav-link active');
            break;
        case 'Top Avatars':
            setBtnState4('nav-link active');
            break;
        default:
            break;
    }
}

  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href=""
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <span class="fs-2 m-2">
              <FontAwesomeIcon icon={faChess} />
            </span>
            <span class="fs-2">Top Chess Worldwide</span>
          </a>
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a href="#" class={btnState1} onClick={HandlerButton}> 
                Top by Rate
                </a>
            </li>
            <li class="nav-item">
              <a href="#" class={btnState2} onClick={HandlerButton}>
                Top by Win Count
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class={btnState3} onClick={HandlerButton}>
                Top by Country
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class={btnState4} onClick={HandlerButton}>
                Top Avatars
              </a>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};

export default Header;
