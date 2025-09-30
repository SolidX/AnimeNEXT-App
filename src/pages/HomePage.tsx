import { useEffect } from "react";
import { Fragment } from "react/jsx-runtime";
import Alert from "../components/Alert";
import { AlertTypes, type HomePageProps } from "../components/components";

export default function HomePage(props: HomePageProps) {
    const socialMedia = (
        <Fragment>
            <p>Find us on social media and use our official hashtag, <a href="#" className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">#AnimeNEXT</a>!
            </p><div className="row">
                <div className="col-sm-3 fw-bold">Facebook:</div>
                <div className="col-sm-9"><a href="https://facebook.com/animenext">AnimeNEXT Facebook Page</a></div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Instagram:</div>
                <div className="col-sm-9"><a href="https://instagram.com/animenextcon">@animenextcon</a></div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Twitter:</div>
                <div className="col-sm-9"><a href="https://twitter.com/animenext" target="_blank">@AnimeNEXT</a></div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Discord:</div>
                <div className="col-sm-9"><a href="https://discord.gg/ZmtFXDd" target="_blank">Official AnimeNEXT Discord Server</a></div>
            </div>
            <div className="row">
                <div className="col-sm-3 fw-bold">Twitch:</div>
                <div className="col-sm-9"><a href="https://www.twitch.tv/animenext" target="_blank">Twitch Channel</a></div>
            </div>
            <hr />
            <p className="mb-0">Don't forget to eat, sleep, wash up, and hydrate!</p>
        </Fragment>
    );

    useEffect(() => {
        document.title = "AnimeNEXT Program Guide";
    }, []);

    return (
        <Fragment>
            <h1 className="mb-1">{props.title}</h1>
            <p className="lead">
                As the largest independently-organized anime convention in the New Jersey and Philadelphia area,
                we are thrilled to celebrate a full weekend of anime, manga, games, cosplay, and Japanese pop culture with you!
            </p>
            <Alert
                type={AlertTypes.Info}
                content={"Thank you for coming to AnimeNEXT 2023!"}
            />
            <Alert
                type={AlertTypes.Secondary}
                heading="Social Media"
                content={socialMedia}
            />
        </Fragment>        
    );
}