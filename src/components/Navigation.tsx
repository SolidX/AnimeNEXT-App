import { useRef } from "react";
import type { NavigationProps } from "./components";
import NavBranding from "./NavBranding";
import NavItem from "./NavItem";

export default function Navigation(props: NavigationProps) {
    const policies : {text: string; url: string}[] = [
        {text: "General Conduct Policy", url: "policies/conduct"},
        {text: "Dress Code", url: "policies/dresscode"},
        {text: "Bag Policy", url: "policies/bags"},
        {text: "Cosplay, Props, & Sign Policy", url: "policies/cosplayprops"},
    ];

    const hamburgerToggle = useRef(null);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavBranding />
                {/* BUG: Menu doesn't close on navigation */}
                <button ref={hamburgerToggle} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavItem text={"Home"} url={"/"} currentPage={props.currentPage} isDropdown={false} onNav={props.navHandler}/>
                        <NavItem text={"Hours"} url={"/hours"} currentPage={props.currentPage} isDropdown={false} onNav={props.navHandler}/>
                        <NavItem text={"Maps"} url={"/maps"} currentPage={props.currentPage} isDropdown={false} onNav={props.navHandler}/>
                        <NavItem text={"Schedule"} url={"/schedule"} currentPage={props.currentPage} isDropdown={false} onNav={props.navHandler}/>
                        <NavItem text={"Location"} url={"/location"} currentPage={props.currentPage} isDropdown={false} onNav={props.navHandler}/>
                        <NavItem text={"Shuttles"} url={"/shuttles"} currentPage={props.currentPage} isDropdown={false} onNav={props.navHandler}/>
                        <NavItem text={"Artists Alley"} url={"/artistsalley"} currentPage={props.currentPage} isDropdown={false} onNav={props.navHandler}/>
                        <NavItem text={"Dealers' Room"} url={"/dealersroom"} currentPage={props.currentPage} isDropdown={false} onNav={props.navHandler}/>
                        <NavItem text={"Policies"} url={""} currentPage={props.currentPage} isDropdown={true} subItems={policies} onNav={props.navHandler}/>
                        <NavItem text={"About"} url={"/about"} currentPage={props.currentPage} isDropdown={false} onNav={props.navHandler}/>
                    </ul>
                </div>
            </div>
        </nav>
    );
}