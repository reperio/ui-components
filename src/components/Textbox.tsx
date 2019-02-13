import * as React from "react"

interface TextboxProps {
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

const Textbox:React.SFC<TextboxProps> = props => {
    return <input type='text' 
                  className="r-form-control r-text-input" 
                  value={props.value} 
                  placeholder={props.placeholder} 
                  onChange={props.onChange} 
                  disabled={props.disabled}
                  size={props.size}
                  style={props.fullWidth ? fullWidthStyle : null} />
}

Textbox.defaultProps = {
    disabled: false,
    fullWidth: true
}

const TextboxElement = (props:any) => {
    const {input, meta, ...rest} = props;
        return (<Textbox {...input} {...rest} />
)};

export { Textbox, TextboxElement };
