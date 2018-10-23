import * as React from 'react';

interface WrapperProps {
    children: React.ReactNode 
    flexColumnDirection?: boolean
}

const Wrapper:React.SFC<WrapperProps> = props => {
    return <div className={props.flexColumnDirection ? 'r-wrapper r-wrapper-column-direction' : 'r-wrapper'}>{props.children}</div>;
}

Wrapper.defaultProps = {
    flexColumnDirection: false
}

export { Wrapper };
