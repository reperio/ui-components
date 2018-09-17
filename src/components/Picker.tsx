import * as React from "react"
import Select from 'react-select';

interface PickerProps {
    pickerValue?: any,
    value: any,
    placeholder?: string,
    onChange?(event:any): void,
    options: Array<any>,
    disabled?: boolean,
    multi?: boolean
}

const Picker: React.SFC<PickerProps> = props => {
    return <Select
        value={props.pickerValue !=  null ? props.pickerValue : props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        options={props.options}
        multi={props.multi}
        disabled={props.disabled} />;
}

Picker.defaultProps = {
    disabled: false,
    multi: false
}

const PickerElement = (props:any) => {
    const {input, meta, ...rest} = props;
        return (<Picker {...input} {...rest} />
)};

export { Picker, PickerElement };