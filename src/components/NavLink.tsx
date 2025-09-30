import { Link } from "react-router";
import type { NavLinkProps } from "./components";

export default function NavLink(props: NavLinkProps) {
    if (props.isCurrentPage === true) {
        return (
            <Link
                className={props.isDropdown === true ? "dropdown-item" : "nav-link"}
                aria-current="page"
                to={props.url}
                onClick={() => props.onNav != undefined && props.onNav(props.text)}
            >
                {props.text}
            </Link>
        );
    } else {
        return (
            <Link
                className={props.isDropdown === true ? "dropdown-item" : "nav-link"}
                to={props.url}
                onClick={() => props.onNav != undefined && props.onNav(props.text)}
            >
                {props.text}
            </Link>
        );
    }
}