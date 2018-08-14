import * as React from "react"

interface TextboxProps {
    value: string,
    placeholder?: string,
    onChange?(event: any): void,
    disabled?: boolean,
    type: string
}

const Textbox:React.SFC<TextboxProps> = props => {
    return <input type={props.type} className="r-form-control r-text-input" value={props.value} placeholder={props.placeholder} onChange={props.onChange} disabled={props.disabled} />
}

Textbox.defaultProps = {
    disabled: false,
    type: "text"
}

const TextboxElement = (props:any) => {
    const {input, meta, ...rest} = props;
        return (<Textbox {...input} {...rest} />
)};

export { Textbox, TextboxElement };