import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faChess } from "@fortawesome/free-solid-svg-icons";

const Header = ({headerSelButton}) => {

const [btnState1,setBtnState1] = useState('nav-link active'); // btnState = '', setBtnState = function('');
const [btnState2,setBtnState2] = useState('nav-link'); // btnState = '', setBtnState = function('');

const HandlerButton = (e) => {
    setBtnState1('nav-link');    
    setBtnState2('nav-link');
    headerSelButton(e.target.textContent);
    switch (e.target.textContent) {
        case 'Show Rank':
            setBtnState1('nav-link active');
            headerSelButton(e.target.textContent);
            break;
        case 'Show Games':
            setBtnState2('nav-link active');
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
            <span className="fs-2 m-2">
              <FontAwesomeIcon icon={faChess} />
            </span>
            <span className="fs-2">Top Chess Worldwide</span>
          </a>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="#" className={btnState1} onClick={HandlerButton}> 
                Show Rank
                </a>
            </li>
            <li className="nav-item">
              <a href="#" className={btnState2} onClick={HandlerButton}>
                Show Games
              </a>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};

export default Header;
