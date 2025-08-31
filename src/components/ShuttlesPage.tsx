import { Fragment } from "react/jsx-runtime";
import Navigation from "./Navigation";
import Alert from "./Alert";
import { AlertTypes } from "./components";

export default function ShuttlesPage(props: {currentPage : string}) {
    return (
        <Fragment>
            <Navigation currentPage={props.currentPage} />
            <h1 className="mb-1">Shuttles</h1>
            <h2>Routes</h2>
            <dl className="row">
                <dt className="col-sm-2">ROUTE 1</dt>
                <dd className="col-sm-10">Hilton Garden Inn &gt; Extended Stay &gt; Sheraton &gt; NJ Expo Center</dd>
                
                <dt className="col-sm-2">ROUTE 2</dt>
                <dd className="col-sm-10">Sheraton &gt; Extended Stay &gt; Hilton Garden &gt; Hyatt</dd>

                <dt className="col-sm-2">ROUTE 3</dt>
                <dd className="col-sm-10">Crowne &gt; NJ Expo</dd>

                <dt className="col-sm-2">ROUTE 4</dt>
                <dd className="col-sm-10">Hyatt &gt; NJ Expo (round trip)</dd> 
            </dl>
            <Alert
                type={AlertTypes.Warning}
                content={(<Fragment><span className="fw-bold text-uppercase">Notice:</span> The route to the APA is suspended.</Fragment>)}
             />
             <Alert
                type={AlertTypes.Warning}
                content={(<Fragment><span className="fw-bold text-uppercase">Notice:</span> Shuttles are currently running as they fill up.</Fragment>)}
             />

            <h2>Hours of Operation</h2>
            <p>Shuttles will be generally available between the following times. However, these times are subject to change.</p>
            <div className="row">
                <div className="fw-bold">Fri (6/16):</div>
                <div>
                    8:30am to 9:00am (staff only)<br />
                    9:00am to 2:30am (attendees)
                </div>
            </div>
            <div className="row">
                <div className="fw-bold">Sat (6/17):</div>
                <div>
                    8:30am to 9:00am (staff only)<br />
                    9:00am to 2:30am (attendees)
                </div>
            </div>
            <div className="row">
                <div className="fw-bold">Sun (6/18):</div>
                <div>
                    8:30am to 9:00am (staff only)<br />
                    8:30am to 4:00pm (attendees)
                </div>
            </div>
        </Fragment>        
    );
}