import * as React from 'react';

interface ApplicationMenuItemProps {
    url?:string,
    name:string,
    image?:string,
    label?:string
}

const ApplicationMenuItem: React.SFC<ApplicationMenuItemProps> = props => {
    return <div>
        {props.image ? 
            (<img src={props.image} height="36" width="36" />) 
            : props.name}
        
        {props.label && (<div>{props.label}</div>)}
    </div>;
}

export { ApplicationMenuItem };