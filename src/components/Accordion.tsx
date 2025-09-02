import AccordionItem from "./AccordionItem";
import type { AccordionItemDetails } from "./components";

export default function Accordion(props: {accordionId: string, items: AccordionItemDetails[]}) {
    const accordionItems = props.items.map((item) => {
        return (<AccordionItem key={item.itemId} details={item} />);
    });

    return (
        <div className="accordion" id={props.accordionId}>
            {accordionItems}
        </div>
    );
}