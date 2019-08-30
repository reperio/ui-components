import * as React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

interface ProfileInfoMenuProps {
    initials: string,
    name: string,
    email: string
    onLogout?(event: any): void
}

const ProfileInfoMenu: React.SFC<ProfileInfoMenuProps> = props => {
    return <DropdownButton pullRight className="r-profile-container"
        id="profileInfo"
        title={
            <div className="r-profile">
                <div className="r-profile-initials">{props.initials}</div>
            </div>
        }
        noCaret>
        <span className="r-profile-content">
            {props.name}<br />
            {props.email}<br />
        </span>
        <MenuItem divider />
        <MenuItem eventKey='3' className="logout-menu-item" onClick={props.onLogout}><i className="fa fa-sign-out fa-fw"></i> Logout</MenuItem>
    </DropdownButton>
}

export { ProfileInfoMenu, ProfileInfoMenuProps }; 
