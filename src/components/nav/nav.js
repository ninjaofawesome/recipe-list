import React, { Component } from 'react';
import { get } from 'lodash';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = { "active" : false };
  }

  componentDidMount() {
    this.setCSS();
    this.toggleMenu();
  }

  setCSS() {
    const nav = document.querySelector('.recipe-list__navbar');

    nav.style.position = "fixed";
  }

  toggleMenu() {
    const currentState = get(this.state, 'active');
    this.setState({ active: !currentState });

    const hiddenList = document.querySelector('.recipe-list__navbar-list');

    if (currentState === true) {
      hiddenList.classList.toggle('recipe-list__navbar-list--visible');
    }
  }

  render() {
    return (
      <nav className="recipe-list__navbar">
        <h1 className="recipe-list__navbar-title">Recipe List</h1>
        <button className="recipe-list__navbar-menu-button" onClick={this.toggleMenu} >menu</button>
        <ul className="recipe-list__navbar-list">
          <li className="recipe-list__navbar-list-item"><button className="recipe-list__navbar-list-button" onClick={this.props.favoriteCards} >Favorites</button>
          </li>
          <li className="recipe-list__navbar-list-item">
            <button className="recipe-list__navbar-list-button" onClick={this.props.arrangeCards} >Most Recent</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;