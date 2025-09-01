import { Fragment } from "react/jsx-runtime";
import type { ExhibitorDetails } from "../components/components";

export default function ExhibitorsListPage(props: {title: string, exhibitors: ExhibitorDetails[]}) {
    const exhibitorList = props.exhibitors.map((e) => {
        return (
            <li key={e.Booth} className="list-group-item">
                <div className="fw-bold">{e.Name}</div>
                <div>Booth #{e.Booth}</div>
            </li>
        );
    });

    //TODO: Make this list sortable by Name at some point 
    return (
        <Fragment>
            <h1 className="mb-1">{props.title}</h1>
            <ul className="list-group" id="exhibitors">
                {exhibitorList}
            </ul>
        </Fragment>        
    );
}