import { useEffect } from "react";
import { Fragment } from "react/jsx-runtime";
import type { ExhibitorListPageProps } from "../components/components";

export default function ExhibitorsListPage(props: ExhibitorListPageProps) {
    const keyPrefix = props.title == 'Artists Alley' ? 'AA' : 'EX';
    const exhibitorList = props.exhibitors.map((e) => {
        return (
            //BUG: Booths with more than 1 exhibitor break the keying
            <li key={`${keyPrefix}${e.Booth}`} className="list-group-item">
                <div className="fw-bold">{e.Name}</div>
                <div>Booth #{e.Booth}</div>
            </li>
        );
    });

    useEffect(() => {
        document.title = `${props.title} | AnimeNEXT`;
    }, []);

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