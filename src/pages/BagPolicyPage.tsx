import { Fragment } from "react/jsx-runtime";
import Navigation from "../components/Navigation";

export default function BagPolicyPage(props: {currentPage : string}) {
    return (
        <Fragment>
            <Navigation currentPage={props.currentPage} />
            <h1 className="mb-1">Bag Policy</h1>
            <h2 className="mb-1">Around the Convention</h2>
            <ul>
                <li>Bags are allowed of all shapes and sizes, provided they do not pose a threat to anyone's health or wellbeing.</li>
                <li>At any time a Con-Safety Member reserves the right to search a bag in question.
                <ul>
                <li>If the owner of the bag refuses, they may be escorted off site for non-compliance.</li>
                </ul>
                </li>
                <li>Under absolutely no circumstances are bags to be left unattended at any time during the convention.
                <ul>
                <li>Any bag left unattended may be removed from the premises at staff's discretion.</li>
                </ul>
                </li>
                <li>There will not be a bag check available at the convention, so be sure that any bags you bring with you into the convention are non-obstructive and can remain with you at all times.</li>
            </ul>

            <h2 className="mb-1">Specific Locations</h2>
            
            <h3 className="mb-1">Concerts & Main Events</h3>
            <ol>
                <li>Seated Events
                <ol>
                <li>Bags must be able to fit on the floor in front of your chair, under it, or in your lap. Bags cannot be left in aisles or along the walls due to fire code and accessibility concerns.</li>
                <li>If a bag is obstructing the view of others, you will be asked to remove it from the room.</li>
                </ol>
                </li>
                <li>Standing Events
                <ol>
                <li>Bags must be held or worn at all times.</li>
                <li>If a bag is obstructing the view of others, you will be asked to remove it from the room.&nbsp;</li>
                </ol>
                </li>
            </ol>
            <h3 className="mb-1">Dance Party & Cosplay Formal</h3>
            <ol>
                <li>No bags bigger than 10x10 inches will be allowed in (i.e.: Clutches, Drawstring backpacks, tote bags, etc.)</li>
                <li>All bags will be searched before entry in the Otaku Dance Party or Cosplay Formal.</li>
                <li>Outside food and drink are not permitted in the Otaku Dance Party. Please eat or drink what you have in your bag before entering the dance. AnimeNEXT is not responsible for food and drink abandoned outside of the dance in order to pass bag checks.</li>
            </ol>
        </Fragment>        
    );
}