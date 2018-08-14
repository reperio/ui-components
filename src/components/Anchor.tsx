import * as React from "react"

interface AnchorProps {
    href: string,
    text: string
}

const Anchor:React.SFC<AnchorProps> = props => {
    return <a href={props.href} className="r-anchor">{props.text}</a>;
}

const AnchorElement = (props:any) => {
    const {input, meta, ...rest} = props;
        return (<Anchor {...input} {...rest} />
)};

export { Anchor, AnchorElement };