import * as React from 'react';
import { Navbar as BsNavbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import Logo from '../assets/rep-logo-white.png';

interface NavbarProps {
    applicationName?: string
}

const Navbar: React.SFC<NavbarProps> = props => {
    return <div className="nav-menu-container">
        <BsNavbar className="navbar-fixed-left">
            <div id="navbarBrandingContainer">
                <div>
                    <img className="r-menu-header-icon" src={Logo} />
                </div>
                <div id='applicationName'>{props.applicationName}</div>
            </div>
            <Nav>
                {props.children}
            </Nav>
        </BsNavbar>
    </div >
}

export { Navbar, LinkContainer, NavItem };