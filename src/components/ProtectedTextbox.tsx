import * as React from "react"

interface ProtectedTextboxProps {
    value: string,
    placeholder?: string,
    onChange?(event: any): void,
    disabled?: boolean,
    size?: number,
    fullWidth?: boolean
}

const fullWidthStyle = {
    width: '100%'
};

const ProtectedTextbox:React.SFC<ProtectedTextboxProps> = props => {
    return <input type='password' 
                  className="r-form-control r-text-input" 
                  value={props.value} 
                  placeholder={props.placeholder} 
                  onChange={props.onChange} 
                  disabled={props.disabled}
                  size={props.size}
                  style={props.fullWidth ? fullWidthStyle : null} />
}

ProtectedTextbox.defaultProps = {
    disabled: false,
    fullWidth: true
}

const ProtectedTextboxElement = (props:any) => {
    const {input, meta, ...rest} = props;
        return (<ProtectedTextbox {...input} {...rest} />
)};

export { ProtectedTextbox, ProtectedTextboxElement };
