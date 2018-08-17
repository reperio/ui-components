import * as React from "react"

interface ButtonProps {
    name: string,
    color?: string,
    onClick?(event: any): void,
    text: string,
    disabled?: boolean,
    type?: string
}

const Button:React.SFC<ButtonProps> = props => {
    return <button type={props.type} name={props.name} className={`r-form-control r-btn r-${props.color}`} onClick={props.onClick} disabled={props.disabled}>{props.text}</button>;
}

Button.defaultProps = {
    color: 'neutral',
    disabled: false,
    type: "button"
}

const ButtonElement = (props:any) => {
    const {input, meta, ...rest} = props;
        return (<Button {...input} {...rest} />
)};

export { Button, ButtonElement };