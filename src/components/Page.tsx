import { Fragment } from "react/jsx-runtime";
import Navigation from "./Navigation";

export default function Page(props: {currentPage: string; title: string;}) {
    return (
        <Fragment>
            <Navigation currentPage={props.currentPage} />
            <h1 className="mb-1">{props.title}</h1>
        </Fragment>        
    );
}