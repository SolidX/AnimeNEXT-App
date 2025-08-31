import { Fragment } from "react/jsx-runtime";
import Navigation from "../components/Navigation";
import Bikini from "../assets/dresscode_bikini.png";
import Trunks from "../assets/dresscode_trunks.png";

export default function DressCodePage(props: {currentPage : string}) {
    return (
        <Fragment>
            <Navigation currentPage={props.currentPage} />
            <h1 className="mb-1">Dress Code</h1>
            <h2 className="mb-1">Women's Dress Code</h2>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <img src={Bikini} className="img-thumbnail" />
                </div>
                <div className="col-2"></div>
            </div>
            <div className="row">
                <div className="col-12">
                    <ol>
                        <li>Whatever you are wearing must have the same coverage area as a properly fitted bikini.</li>
                        <li>The fabric must be opaque in color and obstruct the underlying features.</li>
                        <li>If you are unsure your garment may move, we suggest the use of double stick tape, pasties / nipple guards, or the use of a nude colored undergarment.</li>
                        <li>The bottom of your feet must also be covered at all times when outside of your hotel room or the pool areas of each hotel.</li>
                    </ol>
                </div>
            </div>
            <h2 className="mb-1">Men's Dress Code</h2>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <img src={Trunks} className="img-thumbnail" />
                </div>
                <div className="col-2"></div>
            </div>
            <div className="row">
                <div className="col-12">
                    <ol>
                        <li>Whatever you are wearing must have the same coverage area as a brief style swimsuit, like a speedo.</li>
                        <li>The fabric must be opaque in color and obstruct the underlying features. If you are unsure your garment will be appropriate, we suggest the use of double stick tape, dancer belts, or the use of a nude colored undergarment.</li>
                        <li>The bottom of your feet must also be covered at all times when outside of your hotel room or the pool areas of each hotel.</li>
                    </ol>
                </div>
            </div>
        </Fragment>        
    );
}