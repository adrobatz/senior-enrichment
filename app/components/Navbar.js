import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render () {
    return (
      <nav>
        <Link to ="/"><h3>Home</h3></Link>
        <button><Link to="/students">Students</Link></button>
        <button><Link to="/campuses">Campuses</Link></button>
      </nav>
    );
  }
}
