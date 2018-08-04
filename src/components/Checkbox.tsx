import * as React from "react"

interface CheckboxProps {
    label: string,
    checked: boolean,
    onChange?(event: any): void,
    name?: string,
    id?: string,
    disabled?: boolean
}

const Checkbox:React.SFC<CheckboxProps> = props => {
    return <label className="r-checkbox-container">
        {props.label}
        <input type="checkbox" checked={props.checked} onChange={props.onChange} name={props.name} id={props.id} disabled={props.disabled} />
        <span className="r-checkbox"></span>
    </label>;
}

Checkbox.defaultProps = {
    disabled: false
}

export default Checkbox;