import { Fragment } from "react/jsx-runtime";
import Navigation from "../components/Navigation";
import Alert from "../components/Alert";
import { AlertTypes, type AccordionItemDetails } from "../components/components";
import Accordion from "../components/Accordion";

export default function HoursPage(props: {currentPage: string}) {
    const accordianID = "eventHours";

    const arcadeHours = (
        <Fragment>
            <div className="row">
                <div className="col-sm-3 fw-bold">Friday:</div>
                <div className="col-sm-9">12 pm to 9 pm</div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Saturday:</div>
                <div className="col-sm-9">9 am to 8 pm</div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Sunday:</div>
                <div className="col-sm-9">9 am to 3 pm</div>
            </div>
        </Fragment>
    );

    const artistAlleyHours = (
        <Fragment>
            <div className="row">
                <div className="col-sm-3 fw-bold">Friday:</div>
                <div className="col-sm-9">12 pm to 8 pm</div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Saturday:</div>
                <div className="col-sm-9">10 am  to 8 pm</div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Sunday:</div>
                <div className="col-sm-9">10 am to 3 pm</div>
            </div>
        </Fragment>
    );

    const carShowHours = (
        <Fragment>
            <div className="row">
                <div className="col-sm-3 fw-bold">Friday:</div>
                <div className="col-sm-9">12 pm to 9 pm</div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Saturday:</div>
                <div className="col-sm-9">9 am to 8 pm</div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Sunday:</div>
                <div className="col-sm-9">9 am to 3 pm</div>
            </div>
        </Fragment>
    );

    const dealersRoomHours = (
        <Fragment>
            <div className="row">
                <div className="col-sm-3 fw-bold">Friday:</div>
                <div className="col-sm-9">12 pm to 7 pm</div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Saturday:</div>
                <div className="col-sm-9">10 am  to 7 pm</div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Sunday:</div>
                <div className="col-sm-9">10 am to 3 pm</div>
            </div>
        </Fragment>
    );

    const generalHours = (
        <Fragment>
            <div className="row">
                <div className="col-sm-3 fw-bold">Friday:</div>
                <div className="col-sm-9">
                    <span className='fw-bold'>NJCEC:</span> 9 am to 12 am<br />
                    <span className='fw-bold'>Hyatt:</span> 9 am to 12 am
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Saturday:</div>
                <div className="col-sm-9">
                    <span className='fw-bold'>NJCEC:</span> 9 am to 1:30 am<br />
                    <span className='fw-bold'>Hyatt:</span> 9 am to 12 am
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Sunday:</div>
                <div className="col-sm-9">
                    <span className='fw-bold'>NJCEC:</span> 9 am to 6 pm<br />
                    <span className='fw-bold'>Hyatt:</span> 9 am to 6 pm
                </div>
            </div>
        </Fragment>
    );

    const hallCosplayHours = (
        <Fragment>
            <div className="row">
                <div className="col-sm-3 fw-bold">Friday:</div>
                <div className="col-sm-9">3:30 pm to 7:30 pm</div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Saturday:</div>
                <div className="col-sm-9">10 am to 3 pm</div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Sunday:</div>
                <div className="col-sm-9">12 pm to 1 pm</div>
            </div>
            <hr />
            <p>Note: Appointments and Walk-in Sign-ups Allowed</p>
        </Fragment>
    );

    const charityAuctionHours = (
        <Fragment>
            <div className="row">
                <div className="col-sm-3 fw-bold">View/Bid:</div>
                <div className="col-sm-9">
                    Friday / Saturday: 10 am to 6 pm<br />
                    (Bidding ends at 6 pm)
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Adult Auction:</div>
                <div className="col-sm-9">Friday: 9 pm to 11 pm</div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Live Auction:</div>
                <div className="col-sm-9">Sunday : 11:30 am to 1:30 pm</div>
            </div>
        </Fragment>
    );

    const cosplayRepairHours = (
        <Fragment>
            <div className="row">
                <div className="col-sm-3 fw-bold">Friday:</div>
                <div className="col-sm-9">10 am to 6 pm</div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Saturday:</div>
                <div className="col-sm-9">10 am to 6 pm</div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Sunday:</div>
                <div className="col-sm-9">10 am to 12 pm</div>
            </div>
        </Fragment>
    );

    const karaokeHours = (
        <Fragment>
            <h5>Open Mic</h5>
            <div className="row">
                <div className="col-sm-3 fw-bold">Friday:</div>
                <div className="col-sm-9">10 am to 1 am</div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Saturday:</div>
                <div className="col-sm-9">
                    10 am to 12:30 pm<br />
                    3:30 pm to 1:00 am
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Sunday:</div>
                <div className="col-sm-9">10 am to 3 pm</div>
            </div>
            <hr />
            <h5>Contest</h5>                            
            <div className="row">
                <div className="col-sm-3 fw-bold">Saturday:</div>
                <div className="col-sm-9">1 pm to 3 pm</div>
            </div>
        </Fragment>
    );

    const mangaLibraryHours = (
        <Fragment>
            <div className="row">
                <div className="col-sm-3 fw-bold">Friday:</div>
                <div className="col-sm-9">10 am to 10 pm</div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Saturday:</div>
                <div className="col-sm-9">10 am to 10 pm</div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Sunday:</div>
                <div className="col-sm-9">10 am to 3 pm</div>
            </div>
        </Fragment>
    );

    const videoGamesHours = (
        <Fragment>
            <div className="row">
                <div className="col-sm-3 fw-bold">Friday:</div>
                <div className="col-sm-9">10 am to 1 am</div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Saturday:</div>
                <div className="col-sm-9">10 am to 1 am</div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Sunday:</div>
                <div className="col-sm-9">10 am to 4 pm</div>
            </div>
        </Fragment>
    );

    const registrationHours = (
        <Fragment>
            <h5>
                NJCEC Lobby & Box Office
            </h5>
            <div className="row">
                <div className="col-sm-3 fw-bold">Thursay:</div>
                <div className="col-sm-9">5 pm to 9 pm</div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Friday:</div>
                <div className="col-sm-9">9 am to 9 pm</div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Saturday:</div>
                <div className="col-sm-9">9 am to 9 pm</div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Sunday:</div>
                <div className="col-sm-9">9 am to 3 pm</div>
            </div>
            <hr />
            <h5>
                Hyatt Regency Lobby
            </h5>
            <div className="row">
                <div className="col-sm-3 fw-bold">Friday:</div>
                <div className="col-sm-9">9 am to 7 pm</div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Saturday:</div>
                <div className="col-sm-9">9 am to 7 pm</div>
            </div>
            <hr />
            <p>
                Outside of the above hours, you can pick up your badge at Con Ops.
            </p>
        </Fragment>
    );

    const tabletopHours = (
        <Fragment>
            <h5>
                Hyatt Regency A & B
            </h5>
            <div className="row">
                <div className="col-sm-3 fw-bold">Friday:</div>
                <div className="col-sm-9">10 am to 4 am (at least)</div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Saturday:</div>
                <div className="col-sm-9">8 am to 4 am (at least)</div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Sunday:</div>
                <div className="col-sm-9">10 am to 4 pm</div>
            </div>
            <hr />
            <h5>Hyatt Regency C</h5>
            <div className="row">
                <div className="col-sm-3 fw-bold">Friday:</div>
                <div className="col-sm-9">10 am to 4 am</div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Saturday:</div>
                <div className="col-sm-9">8 am to 4 am</div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Sunday:</div>
                <div className="col-sm-9">10 am to 4 pm</div>
            </div>
        </Fragment>
    );

    const hours : AccordionItemDetails[] = [
        {
            parentId: accordianID,
            itemId: "avgs",
            isCollapsed: true,
            header: "Arcade Games",
            content: (
                <Alert
                    type={AlertTypes.Info}
                    heading="Arcade Games &mdash; NJCEC Hall C"
                    content={arcadeHours}
                />
            )
        },
        {
            parentId: accordianID,
            itemId: "aa",
            isCollapsed: true,
            header: "Artist Alley",
            content: (
                <Alert
                    type={AlertTypes.Info}
                    heading="Artist Alley &mdash; NJCEC Hall B"
                    content={artistAlleyHours}
                />
            )
        },
        {
            parentId: accordianID,
            itemId: "car",
            isCollapsed: true,
            header: "Car Show",
            content: (
                <Alert
                    type={AlertTypes.Info}
                    heading="Car Show &mdash; NJCEC Hall C"
                    content={carShowHours}
                />
            )
        },
        {
            parentId: accordianID,
            itemId: "dr",
            isCollapsed: true,
            header: "Dealers' Room",
            content: (
                <Alert
                    type={AlertTypes.Info}
                    heading="Dealers' Room &mdash; NJCEC Hall A"
                    content={dealersRoomHours}
                />
            )
        },
        {
            parentId: accordianID,
            itemId: "general",
            isCollapsed: true,
            header: "General Hours",
            content: (
                <Alert
                    type={AlertTypes.Info}
                    heading="Convention Hours"
                    content={generalHours}
                />
            )
        },
        {
            parentId: accordianID,
            itemId: "hc",
            isCollapsed: true,
            header: "Hall Cosplay",
            content: (
                <Alert
                    type={AlertTypes.Info}
                    heading="Hall Cosplay &mdash; Meeting Room 1"
                    content={hallCosplayHours}
                />
            )
        },
        {
            parentId: accordianID,
            itemId: "charity",
            isCollapsed: true,
            header: "Charity Auction",
            content: (
                <Alert
                    type={AlertTypes.Info}
                    heading="Charity Auction &mdash; NJCEC Junior Ballroom"
                    content={charityAuctionHours}
                />
            )
        },
        {
            parentId: accordianID,
            itemId: "cosrep",
            isCollapsed: true,
            header: "Cosplay Repair",
            content: (
                <Alert
                    type={AlertTypes.Info}                    
                    heading="Cosplay Repair &mdash; Hyatt Conference A"
                    content={cosplayRepairHours}
                />
            )
        },
        {
            parentId: accordianID,
            itemId: "karaoke",
            isCollapsed: true,
            header: "Karaoke",
            content: (
                <Alert
                    type={AlertTypes.Info}
                    heading="Karaoke &mdash; Hyatt Salon A & B"
                    content={karaokeHours}
                />
            )
        },
        {
            parentId: accordianID,
            itemId: "manga",
            isCollapsed: true,
            header: "Manga Library",
            content: (
                <Alert
                    type={AlertTypes.Info}
                    heading="Manga Library &mdash; Hyatt Conference B & C"
                    content={mangaLibraryHours}
                />
            )
        },
        {
            parentId: accordianID,
            itemId: "mrvgs",
            isCollapsed: true,
            header: "Modern & Retro Video Games",
            content: (
                <Alert
                    type={AlertTypes.Info}
                    heading="Modern & Retro Video Games &mdash; Hyatt Brunswick Ballroom"
                    content={videoGamesHours}
                />
            )
        },
        {
            parentId: accordianID,
            itemId: "reg",
            isCollapsed: true,
            header: "Registration",
            content: (
                <Alert
                    type={AlertTypes.Info}
                    heading="Registration"
                    content={registrationHours}
                />
            )
        },
        {
            parentId: accordianID,
            itemId: "tabletop",
            isCollapsed: true,
            header: "Tabletop Gaming",
            content: (
                <Alert
                    type={AlertTypes.Info}
                    heading="Tabletop Gaming"
                    content={tabletopHours}
                />
            )
        }
    ];

    return (
        <Fragment>
            <Navigation currentPage={props.currentPage} />
            <h1 className="mb-1">Hours of Operation</h1>
            <Accordion
                accordionId={accordianID}
                items={hours}
            />
        </Fragment>        
    );
}