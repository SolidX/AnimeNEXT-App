import type { To } from "react-router";
import NavLink from "./NavLink";

export default function NavItem(props: {text: string, url: To, currentPage?: string, isDropdown: boolean, subItems?: {text: string; url: To}[], onNav?: (p : string) => void}) {
    if (props.isDropdown === true) {
        const dropdownItems = props.subItems === undefined ? undefined : props.subItems.map((item) => {
            return (
                <li key={item.text}>
                    <NavLink
                        text={item.text}
                        url={item.url}
                        isCurrentPage={props.currentPage == item.text}
                        isDropdown={true}
                        onNav={props.onNav}
                    />
                </li>
            );
        });

        return (
            <li key={props.text} className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{props.text}</a>
                <ul className="dropdown-menu">
                    {dropdownItems}
                </ul>
            </li>
        );
    } else {
        return (
            <li key={props.text} className="nav-item">
                <NavLink
                    text={props.text}
                    url={props.url}
                    isCurrentPage={props.currentPage == props.text}
                    isDropdown={false}
                    onNav={props.onNav}
                />
            </li>
        );
    }
}