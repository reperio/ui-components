import * as React from 'react';

interface WrapperProps {
    children: React.ReactNode 
}

const Wrapper:React.SFC<WrapperProps> = props => {
    return <div className='r-wrapper'>{props.children}</div>;
}

Wrapper.defaultProps = {

}

export { Wrapper };
