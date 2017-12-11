import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render () {
    return (
      <header id="navContainer">
        <Link to ="/"><img src="https://vignette.wikia.nocookie.net/jspotter/images/1/18/Hogwarts_Crest_1.png/revision/latest?cb=20140720035204" alt="logo" id="logo"/></Link>
        <nav>
          <Link className="navbarLink" to="/students">Students</Link>
          <Link className="navbarLink" to="/campuses">Campuses</Link>
        </nav>
      </header>
    );
  }
}
