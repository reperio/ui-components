import * as React from "react"
import {UID} from 'react-uid';

interface CheckboxProps {
    label: string,
    checked: boolean,
    onChange?(event: any): void,
    name?: string,
    disabled?: boolean,
    title?: string
}

const Checkbox:React.SFC<CheckboxProps> = props => {
    return (
    <UID>
        {id => (
            <div className="r-checkbox-new">
                <input type="checkbox" name={props.name} checked={props.checked} onChange={props.onChange} id={id} disabled={props.disabled} />
                <label htmlFor={id}>{props.label}</label>
            </div>
        )}
    </UID>
    );
}

Checkbox.defaultProps = {
    disabled: false
}

const CheckboxElement = (props:any) => {
    const {input, meta, ...rest} = props;
        return (<Checkbox {...input} {...rest} />
)};

export { Checkbox, CheckboxElement };