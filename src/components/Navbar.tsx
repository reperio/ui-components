import * as React from 'react';
import { Navbar as BsNavbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import { ApplicationsMenu } from './ApplicationsMenu'
import { ProfileInfoMenu, ProfileInfoMenuProps } from './ProfileInfoMenu'
import { ReperioBar } from './ReperioBar';
const reperio = require('../assets/reperio-rAsset-31.png');

interface NavbarProps {
    linkContainers: any[],
    applicationMenuItems: any[],
    profile: ProfileInfoMenuProps,
    authenticated: boolean
}

const Navbar: React.SFC<NavbarProps> = props => {
    return <div className="nav-menu-container">
        <BsNavbar collapseOnSelect>
            <BsNavbar.Header>
                <BsNavbar.Brand>
                    <img className="r-menu-header-icon" src={reperio} />
                </BsNavbar.Brand>
            </BsNavbar.Header>
            <Nav>
                {props.linkContainers}
            </Nav>
            {props.authenticated ? 
                <Nav pullRight>
                    <ApplicationsMenu>
                        {props.applicationMenuItems}
                    </ApplicationsMenu>
                <ProfileInfoMenu initials={props.profile.initials} name={props.profile.name} accountName={props.profile.accountName} phone={props.profile.phone} email={props.profile.email} />
                </Nav> 
            : null}
        </BsNavbar>
        <ReperioBar/>
    </div >
}

export { Navbar, LinkContainer, NavItem };