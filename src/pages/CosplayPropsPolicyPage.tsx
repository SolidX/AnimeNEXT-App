import { Fragment } from "react/jsx-runtime";
import Navigation from "../components/Navigation";

export default function CosplayPropsPolicyPage(props: {currentPage : string}) {
    return (
        <Fragment>
            <Navigation currentPage={props.currentPage} />
            <h1 className="mb-1">Cosplay, Props, &amp; Sign Policy</h1>
            <h2 className="mb-1">Weapons and Cosplay Props</h2>
            <ol>
                <li>All props must be checked at the Prop Check table. If a prop is deemed acceptable, a member of Con Safety will wrap an AnimeNEXT Prop Check Band somewhere on the prop. If the band is broken or lost, you must get a new one. Props from a previous day with an intact prop check band are acceptable without needing for it to be re-checked.</li>
                <li>AnimeNEXT reserves the right to deem any prop dangerous to the general public, regardless of size or material, and ask for it to be removed from the convention.</li>
                <li>Props that are larger than six (6) feet in length, or three (3) feet in diameter, are strictly prohibited in all convention spaces. If your prop exceeds these limits, you will be asked to return it to your home/car/hotel room.</li>
                <li>
                    No live steel will be allowed at AnimeNEXT. Live steel is defined as, but not limited to: swords, bayonets, knives (regardless of whether or not they are sheathed), star knives and shuriken, or other objects made of metal which can take an edge. This holds true regardless of whether the object is actually sharp. This rule also applies to selfie sticks, back scratchers, and collapsible walking sticks.
                    <ol>
                        <li>Live steel may not be used as a structural support component for any prop that enters the convention center or any other area maintained by AnimeNEXT. This applies to rebar, wire framing, etc. Metal fasteners, like bolts or screws, are permitted to hold props together.</li>
                        <li>Costume pieces larger than pieces of jewelry that are constructed of metal, such as handcuffs, armor pieces, or chains exceeding three (3) feet, are also prohibited. Metal spikes and studs longer than half an inch are not allowed.</li>
                    </ol>
                </li>
                <li>All weapons purchased from vendors at the convention must be checked at the Dealers Room exit by Convention Safety staff. Weapons must be boxed and taken immediately to a car, a hotel room, or home after purchase. Please purchase weapons at a time when you are able to leave the convention center.</li>
                <li>Props made of polycarbonate are prohibited, as they are often reinforced with metal cores and impossible to disassemble to verify.</li>
                <li>Firearms of any kind are not permitted at the convention. All gun reproductions MUST have an orange tip at the end of the muzzle, and they MUST have an AnimeNEXT prop band attached at all times. Guns that are obviously props do not need an orange tip, but they still need a prop check band.</li>
                <li>
                    No projectiles of any kind will be permitted. Examples include, but are not limited to: Airsoft guns, NERF guns, BB and other pellet guns, paintball guns, crossbows, dart guns, blowguns, and water guns.
                    <ol>
                        <li>Prop weapons with moveable parts but without ammunition are still prohibited.</li>
                        <li>Stun guns and tasers are also NOT allowed.</li>
                        <li>Bows must be strung loosely and unable to fire any projectiles.</li>
                    </ol>
                </li>
                <li>No explosives, incendiary devices, or chemicals of any kind, including but not limited to: smoke powder, sparklers, or fireworks.</li>
                <li>Leashes of any kind may not be worn by attendees at any time on convention grounds, but are required for all service dogs.</li>
                <li>Do not use props in an unsafe manner. This includes but is not limited to: mock-fighting, swinging, throwing, and hitting yourself and/or others.</li>
                <li>For everyone&apos;s safety, wheeled devices are prohibited from the convention. This includes, but is not limited to: heelies, roller skates/rollerblades, scooters, bicycles/unicycles, hoverboards, and skateboards/longboards.</li>
                <li>Mobility aids, such as canes, crutches, wheelchairs, scooters, walkers, etc. are not subject to prop policies.</li>
            </ol>

            <h2 className="mb-1">Sign Policy</h2>
            <ol>
                <li>No signs are permitted at AnimeNEXT, except for those signs that are an established part of a costume; i.e., the sign must be used by the character in official art (such as the signs used by the main character in Komi Can’t Communicate); signs from fan-produced works and memes are not considered official.</li>
                <li>Signs that are not from the source material are considered solicitation under the law and are therefore prohibited.
                <ol>
                <li>Signs with offensive content are not allowed at AnimeNEXT, even if a character uses them in canon. Please remember that this is an all-ages event. This includes, but is not limited to: expletives, nudity, and/or prejudiced verbage or symbols.</li>
                </ol>
                </li>
                <li>All signs must adhere to the same restrictions imposed on all props: no live steel, and not exceeding six (6) feet tall or three (3) feet in diameter.</li>
                <li>Apparel may not be used as signs to communicate messages, such as “Free Hugs” or “Glomp Me”. AnimeNEXT staff reserve the right to ask the attendee to change clothing if deemed to promote an inappropriate message.</li>
                <li>Any attendee that breaks the sign rules will be asked politely to remove the sign and put it in their home/car/hotel room.</li>
            </ol>
        </Fragment>
    );
}