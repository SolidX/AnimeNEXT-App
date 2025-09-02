import type { BadgeType } from "./components";

export default function Badge(props: {type: BadgeType, content: string, className?: string}) {
    let classes = `badge ${props.type} `;
    if (props.className !== undefined) {
        classes += ` ${props.className}`;
    }
    return (<span className={classes}>{props.content}</span>);
}