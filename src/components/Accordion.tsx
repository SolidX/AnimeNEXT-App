import AccordionItem from "./AccordionItem";
import type { AccordionProps } from "./components";

export default function Accordion(props: AccordionProps) {
    const accordionItems = props.items.map((item) => {
        return (<AccordionItem key={item.itemId} details={item} />);
    });

    return (
        <div className="accordion" id={props.accordionId}>
            {accordionItems}
        </div>
    );
}