import type { ReactElement } from "react";
import type { AnchorButtonProps } from "./components";
import AnchorButton from "./AnchorButton";

export default function Card(props: {image?: string, title?: string, subtitle?: string, text?: string | ReactElement, buttons?: AnchorButtonProps[]}) {
    let bottomButtons : ReactElement[] | undefined = undefined;
    
    if (props.buttons !== undefined) {
        bottomButtons = props.buttons.map((b) => {
            return (
                <AnchorButton
                    type={b.type}
                    url={b.url}
                    text={b.text}
                    target="_blank"
                />
            );
        });
    }
    

    return (
        <div className="card mb-2">
            {props.image !== undefined && <img src={props.image} className="card-img-top" />}
            <div className="card-body">
                {props.title !== undefined && <h5 className="card-title">{props.title}</h5>}
                {props.subtitle !== undefined && <h6 className="card-subtitle mb-2 text-body-secondary">{props.subtitle}</h6>}
                <p className="card-text">
                    {props.text}
                </p>
                {bottomButtons !== undefined && bottomButtons}
            </div>
        </div>
    )
}