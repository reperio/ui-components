import * as React from "react"

interface TextboxProps {
    value: string,
    placeholder?: string,
    onChange?(event: any): void,
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

const Textbox:React.SFC<TextboxProps> = props => {
    let style = props.style ? {...props.style} : {};

    if (props.meta && props.meta.touched && props.meta.error) {
        style.borderColor = 'red';
    }

    if (props.fullWidth) {
        style = {...style, ...fullWidthStyle};
    }

    return <>
                <input type='text' 
                    className="r-form-control r-text-input" 
                    value={props.value} 
                    placeholder={props.placeholder} 
                    onChange={props.onChange} 
                    disabled={props.disabled}
                    size={props.size}
                    style={style} />
                {props.meta && props.meta.touched && ((props.meta.error && <span className="r-error">{props.meta.error}</span>) || (props.meta.warning && <span className="r-warning">{props.meta.warning}</span>))}
            </>
}

Textbox.defaultProps = {
    disabled: false,
    fullWidth: true
};

const TextboxElement = (props:any) => {
    const {input, meta, ...rest} = props;
    return (<Textbox {...input} {...rest} {...{meta}} />);
};

export { Textbox, TextboxElement };
