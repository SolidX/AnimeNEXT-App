import { useEffect, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { ExhibitorListTypes, type ExhibitorDetails, type ExhibitorListPageProps } from "../components/components";
import LoadingSpinner from "../components/LoadingSpinner";

export default function ExhibitorsListPage(props: ExhibitorListPageProps) {
    let keyPrefix : string;

    switch (props.listType) {
        case ExhibitorListTypes.Artists:
            keyPrefix = "AA";
            break;
        case ExhibitorListTypes.Dealers:
            keyPrefix = "DL";
            break;
        default:
            keyPrefix = "EX";
    }

    const [exhibitors, setExhibitors] = useState<ExhibitorDetails[]>([]);

    const defaultExhibitorList = (
        <li className="list-group-item placeholder-glow">
            <LoadingSpinner />
        </li>
    );    

    const exhibitorList = exhibitors.map((e) => {
        //BUG: Booths with more than 1 exhibitor break the keying
        return (
            <li key={`${keyPrefix}${e.Booth}`} className="list-group-item">
                <div className="fw-bold">{e.Name}</div>
                <div>Booth #{e.Booth}</div>
            </li>
        );
    });

    useEffect(() => {
        document.title = `${props.title} | AnimeNEXT`;

        fetch(`${props.listType}.json`).then<ExhibitorDetails[], never>((response) => {
            if (response.ok) {
                return response.json();
            }
    
            //TODO: Error handling
            throw new Error(`Failed to get ${props.listType} data. Status: ${response.status}`);
        }).then((data) => {
            setExhibitors(data);
        });
    }, [props.listType]);

    //TODO: Make this list sortable by Name at some point 
    return (
        <Fragment>
            <h1 className="mb-1">{props.title}</h1>
            <ul className="list-group">
                {exhibitors.length > 0 ? exhibitorList : defaultExhibitorList}
            </ul>
        </Fragment>        
    );
}