import type { AlertProps } from "./components";

export default function Alert(props: AlertProps) {

    return (
        <div className={`alert ${props.type}`} role="alert">
            {props.heading !== undefined && <h4 className="alert-heading">{props.heading}</h4>}
            {props.content}
        </div>
    );
}