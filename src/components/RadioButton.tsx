import * as React from "react";
import {UID} from 'react-uid';

interface RadioButtonProps {
    label: string,
    checked: boolean,
    onChange?(event: any): void,
    name?: string,
    disabled?: boolean,
    value: string,
    title?: string,
    meta?: {
        touched: boolean,
        error?: string,
        warning?: string
    },
    style?: any
}

const RadioButton:React.SFC<RadioButtonProps> = props => {
    let style = props.style ? {...props.style} : {};

    if (props.meta && props.meta.touched && props.meta.error) {
        style.borderColor = 'red';
    }

    return (
        <UID>
            {id => (
                <>
                    <div className="r-radio">
                        <input type="radio" name={props.name} checked={props.checked} value={props.value} onChange={props.onChange} id={id} disabled={props.disabled} style={style} />
                        <label htmlFor={id}>{props.label}</label>
                    </div>
                    {props.meta && props.meta.touched && ((props.meta.error && <span className="r-error">{props.meta.error}</span>) || (props.meta.warning && <span className="r-warning">{props.meta.warning}</span>))}
                </>
            )}
        </UID>
    );
};

RadioButton.defaultProps = {
    disabled: false
};

const RadioButtonElement = (props:any) => {
    const {input, meta, ...rest} = props;
    return (<RadioButton {...input} {...rest} />
)};

export { RadioButton, RadioButtonElement };