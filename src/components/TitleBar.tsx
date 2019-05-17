import * as React from 'react';
import { ApplicationsMenu } from './ApplicationsMenu'
import { ProfileInfoMenu, ProfileInfoMenuProps } from './ProfileInfoMenu'
import { OrganizationSwitchMenu, OrganizationSwitchMenuProps } from './OrganizationSwitchMenu'
import { ReperioBar } from './ReperioBar';
import { User, UserOrganization } from '@reperio/core-connector';

interface TitleBarProps {
    title?: JSX.Element | string,
    profile: ProfileInfoMenuProps,
    user?: User,
    applicationMenuItems: any[],
    isAuthenticated: boolean,
    selectedOrganization?: UserOrganization,
    onSelectOrganization? (organization:UserOrganization): void
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
                    {props.user ?
                        <>
                        {props.selectedOrganization ? props.selectedOrganization.organization.name : null}
                            <OrganizationSwitchMenu user={props.user} selectedOrganization={props.selectedOrganization} onSelectOrganization={props.onSelectOrganization}/>
                        </>
                        : null
                    }
                    <ApplicationsMenu>
                        {props.applicationMenuItems}
                    </ApplicationsMenu>
                    <ProfileInfoMenu onLogout={props.profile.onLogout} initials={props.profile.initials} name={props.profile.name} accountName={props.profile.accountName} phone={props.profile.phone} email={props.profile.email} />
                </div>
            : null}
        </div>
    </div >
}

export { TitleBar };