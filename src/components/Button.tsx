import * as React from "react"

interface ButtonProps {
    name: string,
    color?: string,
    onClick?(event: any): void,
    text: string,
    disabled?: boolean
}

const Button:React.SFC<ButtonProps> = props => {
    return <button name={props.name} className={`r-form-control r-btn r-${props.color}`} onClick={props.onClick} disabled={props.disabled}>{props.text}</button>;
}

Button.defaultProps = {
    color: 'neutral',
    disabled: false
}

export default Button;