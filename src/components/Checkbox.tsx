import * as React from "react"

interface CheckboxProps {
    label: string,
    checked: boolean,
    onChange?(event: any): void,
    name?: string,
    id?: string,
    disabled?: boolean,
    title?: string
}

const Checkbox:React.SFC<CheckboxProps> = props => {
    return <label>
        <input type="checkbox" checked={props.checked} onChange={props.onChange} name={props.name} id={props.id} disabled={props.disabled} style={{marginRight: 3}} />
        {props.label}
    </label>;
}

Checkbox.defaultProps = {
    disabled: false
}

const CheckboxElement = (props:any) => {
    const {input, meta, ...rest} = props;
        return (<Checkbox {...input} {...rest} />
)};

export { Checkbox, CheckboxElement };