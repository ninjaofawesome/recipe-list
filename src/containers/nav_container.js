import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as menuActions from '../actions/index';
import Nav from "../components/nav/nav";

function mapStateToProps(state) {
  return {
    menu: state.menu
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(menuActions, dispatch);
}

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps)(Nav);

export default NavContainer;