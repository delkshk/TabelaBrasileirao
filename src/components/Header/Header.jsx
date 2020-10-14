import React, { Component } from 'react';
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
class Header extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="header">
            <FontAwesomeIcon icon={faTrophy} />
        </div> 
        );
    }
}
 
export default Header;