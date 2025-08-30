import type { ReactElement } from "react";
import type { AlertType } from "./components";

export default function Alert(props: {type: AlertType, heading?: string, content?: string | ReactElement}) {

    return (
        <div className={`alert ${props.type}`} role="alert">
            {props.heading !== undefined && <h4 className="alert-heading">{props.heading}</h4>}
            {props.content}
        </div>
    );
}