import NavBranding from "./NavBranding";
import NavItem from "./NavItem";

export default function Navigation(props: {currentPage: string}) {
    const policies : {text: string; url: string | undefined}[] = [
        {text: "General Conduct Policy", url: "pages/conduct.html"},
        {text: "Dress Code", url: "pages/dresscode.html"},
        {text: "Bag Policy", url: "pages/bagpolicy.html"},
        {text: "Cosplay, Props, & Sign Policy", url: "pages/cosplaypropspolicy.html"},
    ];

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavBranding />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavItem text={"Home"} url={"#"} currentPage={props.currentPage} isDropdown={false} />
                        <NavItem text={"Hours"} url={"pages/hours.html"} currentPage={props.currentPage} isDropdown={false} />
                        <NavItem text={"Maps"} url={"pages/maps.html"} currentPage={props.currentPage} isDropdown={false} />
                        <NavItem text={"Schedule"} url={"pages/schedule.html"} currentPage={props.currentPage} isDropdown={false} />
                        <NavItem text={"Location"} url={"pages/location.html"} currentPage={props.currentPage} isDropdown={false} />
                        <NavItem text={"Shuttles"} url={"pages/shuttles.html"} currentPage={props.currentPage} isDropdown={false} />
                        <NavItem text={"Artists Alley"} url={"pages/artistsalley.html"} currentPage={props.currentPage} isDropdown={false} />
                        <NavItem text={"Dealers' Room"} url={"pages/dealersroom.html"} currentPage={props.currentPage} isDropdown={false} />
                        <NavItem text={"Policies"} url={"#"} currentPage={props.currentPage} isDropdown={true} subItems={policies} />
                        <NavItem text={"About"} url={"pages/about.html"} currentPage={props.currentPage} isDropdown={false} />
                    </ul>
                </div>
            </div>
        </nav>
    );
}