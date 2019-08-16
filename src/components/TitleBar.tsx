import * as React from 'react';
import { ApplicationsMenu } from './ApplicationsMenu'
import { ProfileInfoMenu, ProfileInfoMenuProps } from './ProfileInfoMenu'
import { OrganizationSwitchMenu, OrganizationSwitchMenuProps } from './OrganizationSwitchMenu'
import { ReperioBar } from './ReperioBar';
import { User, Organization } from '@reperio/core-connector';

interface TitleBarProps {
    title?: JSX.Element | string,
    profile: ProfileInfoMenuProps,
    user?: User,
    applicationMenuItems: any[],
    isAuthenticated: boolean,
    organizations?: Organization[],
    selectedOrganization?: Organization,
    onSelectOrganization? (organization:Organization): void,
    supportNumber?: string
}

const TitleBar: React.SFC<TitleBarProps> = props => {
    return <div className="title-bar-container">
        <ReperioBar/>
        <div className="title-bar-content">
            <div className="title-bar-title">
                {props.title}
            </div>
            {props.isAuthenticated ?
                <div className="title-bar-right-items">
                    {props.supportNumber ?
                        <div className="title-bar-support-number">
                            Need help? Call: {props.supportNumber}
                        </div>
                        : null
                    }
                    {props.organizations ?
                        <OrganizationSwitchMenu organizations={props.organizations} selectedOrganization={props.selectedOrganization} onSelectOrganization={props.onSelectOrganization}/>
                        : null
                    }
                    {/* removed until we have more than one application */}
                    {/* <ApplicationsMenu>
                        {props.applicationMenuItems}
                    </ApplicationsMenu> */}
                    <ProfileInfoMenu onLogout={props.profile.onLogout} initials={props.profile.initials} name={props.profile.name} email={props.profile.email} />
                </div>
            : null}
        </div>
    </div >
}

export { TitleBar };