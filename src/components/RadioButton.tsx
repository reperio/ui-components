import * as React from "react"

interface RadioButtonProps {
    label: string,
    onChange?(event: any): void,
    name?: string,
    id?: string,
    disabled?: boolean,
    value: string,
    selectedOption: string
}

const RadioButton:React.SFC<RadioButtonProps> = props => {
    return <label className="r-checkbox-container">
        {props.label}
        <input type="radio" name={props.name} checked={props.selectedOption === props.value} value={props.value} onChange={props.onChange} id={props.id} disabled={props.disabled} />
        <span className="r-radio-checkmark"></span>
    </label>
}

RadioButton.defaultProps = {
    disabled: false
}

export default RadioButton;