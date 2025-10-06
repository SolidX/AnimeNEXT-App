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

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavBranding />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#siteNavigation" aria-controls="siteNavigation" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div ref={props.siteNavRef} className="collapse navbar-collapse" id="siteNavigation">
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
                    <ul className="navbar-nav d-flex flex-row me-1">
                        <li><hr className="dropdown-divider d-lg-none" /></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-circle-half"></i>
                                <span className="d-lg-none ms-2">Toggle theme</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className={"dropdown-item " + (props.theme == "light" ? "active" : "")} href="#" onClick={() => props.themeChangeHandler("light")}>
                                        <i className="bi bi-sun-fill"></i> Light
                                    </a>
                                </li>
                                <li>
                                    <a className={"dropdown-item " + (props.theme == "dark" ? "active" : "")} href="#" onClick={() => props.themeChangeHandler("dark")}>
                                        <i className="bi bi-moon-stars-fill"></i> Dark
                                    </a>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <a className={"dropdown-item " + (props.theme == "auto" ? "active" : "")} href="#" onClick={() => props.themeChangeHandler("auto")}>
                                        <i className="bi bi-circle-half"></i> Auto
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}