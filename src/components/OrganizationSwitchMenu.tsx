import * as React from 'react';
import * as classNames from 'classnames';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { Organization } from '@reperio/core-connector';

interface OrganizationSwitchMenuProps {
    organizations: Organization[],
    selectedOrganization: Organization,
    onSelectOrganization(organization: Organization): void
}

const OrganizationSwitchMenu: React.SFC<OrganizationSwitchMenuProps> = props => {
    return <DropdownButton pullRight className="r-org-switch-container"
        id="orgSwitcher"
        title={
            <div className="title-bar-organization-title">
                {props.selectedOrganization ? props.selectedOrganization.name : 'No Organization Selected'}
            </div>
        }
        onSelect={(e: any) => props.onSelectOrganization(e)}>
        {props.organizations.map((x: Organization) =>
            <MenuItem key={x.id} className={classNames({ "r-org-list-item": true, "r-org-list-item-active": props.selectedOrganization ? x.id === props.selectedOrganization.id : false})} eventKey={x}>{x.name}</MenuItem>
        )}
    </DropdownButton>;
}

export { OrganizationSwitchMenu, OrganizationSwitchMenuProps };