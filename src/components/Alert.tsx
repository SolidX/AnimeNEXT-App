import type { ReactElement } from "react";

export default function Alert(props: {type: string, heading?: string, content?: string | ReactElement}) {

    return (
        <div className={`alert ${props.type}`} role="alert">
            {props.heading !== undefined && <h4 className="alert-heading">{props.heading}</h4>}
            {props.content}
        </div>
    );
}