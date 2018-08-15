import * as React from "react"
import ReactDatepicker from 'react-datepicker'
import Moment from 'moment'

interface DatepickerProps {
    selected: Moment.Moment,
    onChange?(event:any): void,
    placeholder?: string,
    disabled?: boolean
}

const Datepicker:React.SFC<DatepickerProps> = props => {
    return <ReactDatepicker
        selected={props.selected}
        onChange={props.onChange}
        placeholderText={props.placeholder}
        className="r-form-control r-text-input"
        disabled={props.disabled} />
}

Datepicker.defaultProps = {
    disabled: false
}

const DatepickerElement = (props:any) => {
    const {input, meta, ...rest} = props;
        return (<Datepicker {...input} {...rest} />
)};

export { Datepicker, DatepickerElement };