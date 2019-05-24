import * as React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { Organization } from '@reperio/core-connector';

interface OrganizationSwitchMenuProps {
    organizations: Organization[],
    selectedOrganization: Organization,
    onSelectOrganization(organization: Organization): void
}

const OrganizationSwitchMenu: React.SFC<OrganizationSwitchMenuProps> = props => {
    return <DropdownButton pullRight className="r-org-switch-container"
        bsPrefix='r-'
        id="orgSwitcher"
        title={
            <div className="title-bar-organization-title">
                {props.selectedOrganization ? props.selectedOrganization.name : 'No Organization Selected'}
            </div>
        }
        onSelect={(e: any) => props.onSelectOrganization(e)}>
        {props.organizations.map((x: Organization) =>
            <Dropdown.Item key={x.id} className="r-org-list-item" eventKey={x}>{x.name}</Dropdown.Item>
        )}
    </DropdownButton>;
}

export { OrganizationSwitchMenu, OrganizationSwitchMenuProps };