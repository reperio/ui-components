import * as React from "react"

interface RadioButtonProps {
    label: string,
    checked: boolean,
    onChange?(event: any): void,
    name?: string,
    id?: string,
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
        <>
            <label className="r-checkbox-container" title={props.title}>
                {props.label}
                <input type="radio" name={props.name} checked={props.checked} value={props.value} onChange={props.onChange} id={props.id} disabled={props.disabled} style={style} />
                <span className="r-radio-checkmark"></span>
            </label>
            {props.meta && props.meta.touched && ((props.meta.error && <span className="r-error">{props.meta.error}</span>) || (props.meta.warning && <span className="r-warning">{props.meta.warning}</span>))}
        </>
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