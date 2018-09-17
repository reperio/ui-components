import * as React from "react"

interface TextareaProps {
    value: string,
    placeholder?: string,
    onChange?(event: any): void,
    disabled?: boolean
}

const Textarea:React.SFC<TextareaProps> = props => {
    return <textarea className="r-form-control r-text-input" value={props.value} placeholder={props.placeholder} onChange={props.onChange} disabled={props.disabled} />
}

Textarea.defaultProps = {
    disabled: false
}

const TextareaElement = (props:any) => {
    const {input, meta, ...rest} = props;
        return (<Textarea {...input} {...rest} />
)};

export { Textarea, TextareaElement };
