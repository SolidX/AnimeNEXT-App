import { Link, type To } from "react-router";

export default function NavLink(props: { isCurrentPage: boolean; isDropdown: boolean; text: string; url: To; }) {
    if (props.isCurrentPage === true) {
        return (<Link className={props.isDropdown === true ? "dropdown-item" : "nav-link"} aria-current="page" to={props.url}>{props.text}</Link>);
    } else {
        return (<Link className={props.isDropdown === true ? "dropdown-item" : "nav-link"} to={props.url}>{props.text}</Link>);
    }
}