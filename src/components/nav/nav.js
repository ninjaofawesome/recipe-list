import React, { Component } from 'react';



class Nav extends Component {

  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = { "active" : false };
  }

  componentDidMount() {
    this.toggleMenu();
  }

  toggleMenu() {
    const currentState = this.state.active;
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
          <li className="recipe-list__navbar-list-item">Favorites</li>
          <li className="recipe-list__navbar-list-item">Most Recent</li>
        </ul>
      </nav>
    );
  }
}

export default Nav;