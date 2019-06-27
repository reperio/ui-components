import * as React from "react"
import Select from 'react-select';

interface PickerProps {
    pickerValue?: any,
    value: any,
    placeholder?: string,
    onChange?(event:any): void,
    options: Array<any>,
    disabled?: boolean,
    multi?: boolean,
    style?: any,
    meta?: {
        touched?: boolean,
        error?: string,
        warning?: string
    }
}

const Picker: React.SFC<PickerProps> = props => {
    let style = props.style ? { ...props.style } : {};

    if (props.meta && props.meta.touched && props.meta.error) {
        style.borderColor = 'red';
    }

    return <>
            <Select
                value={props.pickerValue !=  null ? props.pickerValue : props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
                options={props.options}
                multi={props.multi}
                style={style}
                disabled={props.disabled} />
            {props.meta && props.meta.touched && ((props.meta.error && <span className="r-error">{props.meta.error}</span>) || (props.meta.warning && <span className="r-warning">{props.meta.warning}</span>))}
        </>
}

Picker.defaultProps = {
    disabled: false,
    multi: false
}

const PickerElement = (props:any) => {
    const {input, meta, ...rest} = props;
        return (<Picker {...input} {...rest} {...{meta}} />
)};

export { Picker, PickerElement };