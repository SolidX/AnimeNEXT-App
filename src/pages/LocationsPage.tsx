import { Fragment } from "react/jsx-runtime";
import Card from "../components/Card";
import NJCEC from "../assets/NJCEC.jpg";
import Hyatt from "../assets/HRNB.jpg";
import { AnchorButtonTypes, type AnchorButtonProps } from "../components/components";

export default function LocationsPage() {
    const njcecLinks : AnchorButtonProps[] = [
        {
            type: AnchorButtonTypes.Primary,
            url: "https://www.njexpocenter.com/",
            text: "Offical Website",
            target: "_blank"
        },
        {
            type: AnchorButtonTypes.Info,
            url: "https://goo.gl/maps/LQbukp5ryYm8ePAM7",
            text: "Google Maps",
            target: "_blank"
        }
    ];

    const hyattLinks : AnchorButtonProps[] = [
        {
            type: AnchorButtonTypes.Primary,
            url: "https://www.hyatt.com/en-US/hotel/new-jersey/hyatt-regency-new-brunswick/ewrrn?src=corp_lclb_gmb_seo_ewrrn",
            text: "Offical Website",
            target: "_blank"
        },
        {
            type: AnchorButtonTypes.Info,
            url: "https://goo.gl/maps/Con8V6wx6M6CW6vr9",
            text: "Google Maps",
            target: "_blank"
        }
    ];

    return (
        <Fragment>
            <h1 className="mb-1">Locations</h1>
            <Card
                key={1}
                image={NJCEC}
                title="New Jersey Convention & Expo Center (NJCEC)"
                subtitle="97 Sunfield Ave, Edison, NJ 08837"
                text="Artist Alley, Dealers Room, Cosplay Pro Wrestling, Car Show, Arcade Games, Hall Cosplay, Charity Auction, Guest Panels and Autographs, and Main Events"
                buttons={njcecLinks}
            />
            <Card
                key={2}
                image={Hyatt}
                title="Hyatt Regency New Brunswick"
                subtitle="2 Albany St, New Brunswick, NJ 08901"
                text="Tabletop Gaming, Panels, Karaoke, Game Shows, Modern & Retro Video games, Anime Music Videos, Manga Library, and Cosplay Repair"
                buttons={hyattLinks}
            />
        </Fragment>        
    );
}