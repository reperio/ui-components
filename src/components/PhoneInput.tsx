import * as React from "react"
import ReactPhoneInput from 'react-phone-input-2';

interface PhoneInputProps {
    value: string,
    placeholder?: string,
    onChange(value: string): void,
    disabled?: boolean,
    size?: number,
    fullWidth?: boolean,
    meta?: {
        touched: boolean,
        error?: string,
        warning?: string
    },
    style?: any
}

const fullWidthStyle = {
    width: '100%'
};

const PhoneInput: React.SFC<PhoneInputProps> = props => {
    let style = props.style ? { ...props.style } : {};

    if (props.meta && props.meta.touched && props.meta.error) {
        style.borderColor = 'red';
    }

    if (props.fullWidth) {
        style = { ...style, ...fullWidthStyle };
    }

    return <>
        <ReactPhoneInput 
            inputClass="r-form-control r-text-input"
            inputStyle={style}
            disableCountryCode={true}
            defaultCountry={'us'} 
            value={props.value} 
            onlyCountries={['us']} 
            placeholder={props.placeholder}
            onChange={props.onChange} />
        {props.meta && props.meta.touched && ((props.meta.error && <span className="r-error">{props.meta.error}</span>) || (props.meta.warning && <span className="r-warning">{props.meta.warning}</span>))}
    </>
}

PhoneInput.defaultProps = {
    disabled: false,
    fullWidth: true
};

const PhoneInputElement = (props: any) => {
    const { input, meta, ...rest } = props;
    return (<PhoneInput {...input} {...rest} {...{ meta }} />);
};

export { PhoneInput, PhoneInputElement };
