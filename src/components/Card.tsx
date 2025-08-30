export default function Card(props: {image?: string, title?: string, text?: string}) {

    return (
        <div className="card mb-2">
            {props.image !== undefined && <img src={props.image} className="card-img-top" />}
            <div className="card-body">
                {props.title !== undefined && <h5 className="card-title">{props.title}</h5>}
                <p className="card-text">
                    {props.text}
                </p>
            </div>
        </div>
    )
}