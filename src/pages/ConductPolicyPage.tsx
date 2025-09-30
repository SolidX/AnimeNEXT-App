import { useEffect } from "react";
import { Fragment } from "react/jsx-runtime";

export default function ConductPolicyPage() {
    useEffect(() => {
        document.title = "General Conduct - Policies | AnimeNEXT";
    }, []);

    return (
        <Fragment>
            <h1 className="mb-1">General Conduct</h1>
            <ol>
                <li>By purchasing a membership, you agree to the terms of the following code of conduct. Any violation of the code of conduct may be punishable up to, and including, revocation of membership, expulsion from the premises, and a ban from future Universal Animation events. In extreme cases, we reserve the right to legal action.</li>
                <li>There are NO exceptions to any rule unless expressly stated. Universal Animation, Inc. and AnimeNEXT reserve the right to modify rules at any time without prior notice.</li>
                <li>AnimeNEXT badges must be worn at all times in order to gain access to all AnimeNEXT events. Each attendee must be wearing their own badge, which must be in plain sight and facing forward.</li>
                <li>Attendees under the age of 16 must be accompanied by an adult at all times. The adult with them must also register with AnimeNEXT and wear their badge at all times in convention spaces.</li>
                <li>AnimeNEXT reserves the right to request ID at any time for age verification, whether or not the attendee has an 18+ wristband.</li>
                <li>AnimeNEXT is a drug-free event. Narcotics and alcohol of any kind are strictly prohibited in all convention spaces.</li>
                <li>AnimeNEXT is an all-ages event, and attendees are asked to dress accordingly. AnimeNEXT staff reserve the right to ask an attendee to change clothing if it is deemed inappropriate or unsafe. See our dress code for more information.</li>
                <li>For the safety of all our attendees, under absolutely no circumstances are bags to be left unattended at any time during the convention. Unattended bags may be removed from the premises at the staff’s discretion or taken to Lost & Found.</li>
            </ol>
        </Fragment>
    );
}