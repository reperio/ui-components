import * as React from 'react';
import { ApplicationsMenu } from './ApplicationsMenu'
import { ProfileInfoMenu, ProfileInfoMenuProps } from './ProfileInfoMenu'
import { ReperioBar } from './ReperioBar';

interface TitleBarProps {
    title?: string,
    profile: ProfileInfoMenuProps,
    applicationMenuItems: any[]
}

const TitleBar: React.SFC<TitleBarProps> = props => {
    return <div className="title-bar-container">
        <ReperioBar/>
        <div className="title-bar-content">
            <div className="title-bar-title">
                Test Title {props.title}
            </div>
            <div className="title-bar-right-items">
                <ApplicationsMenu>
                    {props.applicationMenuItems}
                </ApplicationsMenu>
                <ProfileInfoMenu onLogout={props.profile.onLogout} initials={props.profile.initials} name={props.profile.name} accountName={props.profile.accountName} phone={props.profile.phone} email={props.profile.email} />
            </div>
        </div>
    </div >
}

export { TitleBar };