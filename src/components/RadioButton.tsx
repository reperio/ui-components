import * as React from "react"

interface RadioButtonProps {
    label: string,
    checked: boolean,
    onChange?(event: any): void,
    name?: string,
    id?: string,
    disabled?: boolean,
    value: string,
    title?: string
}

const RadioButton:React.SFC<RadioButtonProps> = props => {
    return <label className="r-checkbox-container" title={props.title}>
        {props.label}
        <input type="radio" name={props.name} checked={props.checked} value={props.value} onChange={props.onChange} id={props.id} disabled={props.disabled} />
        <span className="r-radio-checkmark"></span>
    </label>
}

RadioButton.defaultProps = {
    disabled: false
}

const RadioButtonElement = (props:any) => {
    const {input, meta, ...rest} = props;
        return (<RadioButton {...input} {...rest} />
)};

export { RadioButton, RadioButtonElement };