import { Link } from "react-router";
import Badge from "./Badge";
import { BadgeTypes } from "./components";

export default function NavBranding() {
    return (
        <Link className="navbar-brand" to="/">
            <img src="favicon-32x32.png" alt="Logo" width="32" height="32" className="d-inline-block align-text-top" />
            &nbsp;AnimeNEXT 2023&nbsp;
            <Badge type={BadgeTypes.Success} content="BETA" />
        </Link>
    );
}