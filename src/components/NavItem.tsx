import NavLink from "./NavLink";

export default function NavItem(props: {text: string; url: string | undefined; currentPage: string | undefined; isDropdown: boolean; subItems?: {text: string; url: string | undefined}[]; }) {
    if (props.isDropdown === true) {
        const dropdownItems = props.subItems === undefined ? undefined : props.subItems.map((item) => {
            return (
                <li>
                    <NavLink
                        key={item.text}
                        text={item.text}
                        url={item.url}
                        isCurrentPage={props.currentPage == item.text}
                        isDropdown={true}
                    />
                </li>
            );
        });

        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{props.text}</a>
                <ul className="dropdown-menu">
                    {dropdownItems}
                </ul>
            </li>
        );
    } else {
        return (
            <li className="nav-item">
                <NavLink
                    key={props.text}
                    text={props.text}
                    url={props.url}
                    isCurrentPage={props.currentPage == props.text}
                    isDropdown={false}
                />
            </li>
        );
    }
}