import * as React from 'react';
import {DropdownButton, Dropdown} from 'react-bootstrap';

interface ProfileInfoMenuProps {
    initials: string,
    name: string,
    accountName: string,
    phone: string,
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
            {props.accountName}<br />
            {props.phone}<br />
            {props.email}<br />
        </span>
        <Dropdown.Item divider />
        <Dropdown.Item eventKey='3' onClick={props.onLogout}><i className="fa fa-sign-out fa-fw"></i> Logout</Dropdown.Item>
    </DropdownButton>
}

export { ProfileInfoMenu, ProfileInfoMenuProps }; 
