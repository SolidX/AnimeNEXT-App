import type { AccordionItemProps } from "./components";

export default function AccordionItem(props: AccordionItemProps) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className={`accordion-button fw-bold ${props.details.isCollapsed ? "collapsed": ""}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${props.details.itemId}`} aria-expanded={props.details.isCollapsed ? "false" : "true"} aria-controls={props.details.itemId}>
                    {props.details.header}
                </button>
            </h2>
            <div id={props.details.itemId} className={`accordion-collapse collapse ${props.details.isCollapsed ? "": "show"}`} data-bs-parent={`#${props.details.parentId}`}>
                <div className="accordion-body">
                    {props.details.content}
                </div>
            </div>
        </div>
    );
}