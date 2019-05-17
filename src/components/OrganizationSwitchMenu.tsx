import * as React from 'react';
import { DropdownButton } from 'react-bootstrap';
import MenuIcon from '../assets/organization-menu.png';
import { User, UserOrganization } from '@reperio/core-connector';

interface OrganizationSwitchMenuProps {
    user: User,
    selectedOrganization: UserOrganization,
    onSelectOrganization? (organization:UserOrganization): void
}

const OrganizationSwitchMenu : React.SFC<OrganizationSwitchMenuProps> = props => {
    return <DropdownButton pullRight className="r-org-switch-container"
        id="orgSwitcher"
        title={
            <div className="r-org-switcher">
                <img className="r-org-switcher-icon" src={MenuIcon} />
            </div>
        }
        noCaret>
        <div className="r-org-list-container">
            {props.user.userOrganizations ? props.user.userOrganizations.map((x: UserOrganization)=>
                <div key={x.organizationId} className="r-org-list-item" onClick={() => props.onSelectOrganization(x)}>{x.organization.name}</div>
            ) : null}
        </div>
    </DropdownButton>;
}

export {OrganizationSwitchMenu, OrganizationSwitchMenuProps};