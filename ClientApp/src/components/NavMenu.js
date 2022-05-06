import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import LoginButton from './Auth0Comps/LoginButton';
import LogoutButton from './Auth0Comps/LogoutButton';
import Profile from './Auth0Comps/Profile';




export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  

  render() {
    
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container fluid>
            <NavbarBrand tag={Link} to="/">WebbProjekt_yr3</NavbarBrand>
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch Weather data</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/ProductList">ProductList</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/Details">Details</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/Profile">Profile</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" >Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">Logout</NavLink>
                </NavItem>
                <LoginButton></LoginButton>
                <LogoutButton></LogoutButton>
                <Profile></Profile>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>

    );
  }
}
