import React from 'react';
import {Nav, Navbar, NavItem } from 'react-bootstrap';
import github from '../contact/github.png';
import linkedin from '../contact/linkedin.png';
import { Link, animateScroll as scroll } from "react-scroll";


class Navigation extends React.Component {
  render() {
    return (
      
       <Navbar inverse fixedTop>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#landing">Stephanie Akpakoun</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#about">
       <Link className="navlink"
                to="about"
                spy={true}
                smooth={true}
                offset={20}
                duration={500}>
                 About
              </Link>
      </NavItem>
      <NavItem eventKey={2}  href="#resume">
        <Link className="navlink"
                to="resume"
                spy={true}
                smooth={true}
                offset={20}
                duration={500}>
                 Resume
              </Link>
      </NavItem>
      <NavItem eventKey={2}  href="#skills">
        <Link className="navlink"
                to="skills"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}>
                 Skills
              </Link>
      </NavItem>
    </Nav>
    <Nav pullRight>
    <NavItem eventKey={3}  href="#contact">
        <a href="https://github.com/sakpakoun"> <img className="navIcon" src={github} alt="github"/></a>&nbsp;&nbsp;
    <a href="https://www.linkedin.com/in/stephanie-akpakoun/"><img className="navIcon"  src={linkedin}alt="linkedin"/></a>
    
      </NavItem> 
    </Nav>
</Navbar>

    );
  }
}

export default Navigation;