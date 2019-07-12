import * as React from 'react';

interface WrapperProps {
    children: React.ReactNode 
    flexColumnDirection?: boolean,
    maxWidth?: number
}

const Wrapper:React.SFC<WrapperProps> = props => {
    const maxWidth = props.maxWidth === 0 ? 'none' : props.maxWidth;
    const parentDivStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const childDivStyle: React.CSSProperties = {
        maxWidth,
        alignSelf: 'center'
    }

    return (
        <div style={parentDivStyle}>
            <div className={props.flexColumnDirection ? 'r-wrapper r-wrapper-column-direction' : 'r-wrapper'} style={childDivStyle}>
                {props.children}
            </div>
        </div>
    );
}

Wrapper.defaultProps = {
    flexColumnDirection: false,
    maxWidth: 1200
}

export { Wrapper };
