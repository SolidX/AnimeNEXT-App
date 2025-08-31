import { Fragment } from "react/jsx-runtime";
import Navigation from "../components/Navigation";
import Card from "../components/Card";
import Hyatt1F from "../assets/hyatt1stfloor.jpg";
import Hyatt2F from "../assets/hyatt2ndfloor.jpg";
import HyattLL from "../assets/hyattlowerlevel.jpg";

export default function MapsPage(props: {currentPage: string}) {
    return (
        <Fragment>
            <Navigation currentPage={props.currentPage} />
            <h1 className="mb-1">Maps</h1>
            <h2 className="mb-1">Hyatt Regency New Brunswick</h2>
            <Card
                image={Hyatt1F}
                title="First Floor"
                text="&nbsp;"
            />
            <Card
                image={Hyatt2F}
                title="Second Floor"
                text="&nbsp;"
            />
            <Card
                image={HyattLL}
                title="Lower Level"
                text="&nbsp;"
            />
        </Fragment>        
    );
}