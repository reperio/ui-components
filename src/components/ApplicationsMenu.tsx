import * as React from 'react';
import { DropdownButton } from 'react-bootstrap';

interface ApplicationsMenuProps {
}

const ApplicationsMenu : React.SFC<ApplicationsMenuProps> = props => {
    return <DropdownButton className="r-applications-container"
        id="applications"
        title={
            <div className="r-applications" >
                <div className="r-applications-squares">
                    <div className="r-applications-top-left-square r-applications-square"></div>
                    <div className="r-applications-square"></div>
                    <div className="r-applications-square"></div>
                    <div className="r-applications-square"></div>
                </div>
            </div>
        }
        noCaret>
        <span className="r-applications-container-content">
            {props.children}
        </span>
    </DropdownButton>;
}

export {ApplicationsMenu};