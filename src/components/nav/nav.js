import React, { Component } from 'react';
import { get } from 'lodash';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = { "active" : false };
    this.listItems = this.listItems.bind(this);
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
    const currentState = this.state.active;
    this.setState({ active: !currentState });

    const hiddenList = document.querySelector('.recipe-list__navbar-list');

    if (currentState === true) {
      hiddenList.classList.toggle('recipe-list__navbar-list--visible');
    }
  }

  listItem(items) {
    return items.map((item, i) => {
      <li className="recipe-list__navbar-list-item" key={`listItem-${i}`}>{item.text}</li>;
    });
  }

  render() {
    const menuItems = get(this.props, 'menu.items');

    return (
      <nav className="recipe-list__navbar">
        <h1 className="recipe-list__navbar-title">Recipe List</h1>
        <button className="recipe-list__navbar-menu-button" onClick={this.toggleMenu} >menu</button>
        <ul className="recipe-list__navbar-list">
          {this.listItem(menuItems)}
        </ul>
      </nav>
    );
  }
}

export default Nav;