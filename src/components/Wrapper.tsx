import * as React from 'react';

interface WrapperProps {
    children: React.ReactNode 
}

const Wrapper:React.SFC<WrapperProps> = props => {
    return <div className='r-wrapper'>{props.children}</div>;
}

Wrapper.defaultProps = {

}

const WrapperElement = (props:any) => {
    const {input, meta, ...rest} = props;
        return (<Wrapper {...rest} />);
}

export { Wrapper, WrapperElement };
