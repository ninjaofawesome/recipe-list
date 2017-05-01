import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav className="recipe-list__navbar">
        <h1 className="recipe-list__navbar-title">Recipe List</h1>
        <button className="recipe-list__navbar-menu-button">menu</button>
        <ul className="recipe-list__navbar-list">
          <li className="recipe-list__navbar-list-item">Favorites</li>
          <li className="recipe-list__navbar-list-item">Most Recent</li>
        </ul>
      </nav>
    );
  }
}

export default Nav;