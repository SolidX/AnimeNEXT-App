export default function NavLink(props: { isCurrentPage: boolean; isDropdown: boolean; text: string; url: string | undefined; }) {
    if (props.isCurrentPage === true) {
        return (<a className={props.isDropdown === true ? "dropdown-item" : "nav-link"} aria-current="page" href="#">{props.text}</a>);
    } else {
        return (<a className={props.isDropdown === true ? "dropdown-item" : "nav-link"} href={props.url}>{props.text}</a>);
    }
}