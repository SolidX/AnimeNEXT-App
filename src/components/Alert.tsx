import type { ReactElement } from "react";
import { AlertType } from "./components";

export default function Alert(props: {type: string, content?: string | ReactElement}) {

    return (
        <div className={`alert ${props.type}`} role="alert">
            {props.content}
        </div>
    );
}