

const IndivPodcast = (props) => {

    return (
            <li className="pods">
                <a href={props.podUrl} className="podsImg">
                    <img src={props.microProps.artworkUrl600} alt={props.microProps.collectionName} className="podsImage" />
                </a>
                <div className="podsInfo">
                    <p>Title: {props.title}</p>
                    <p>Artist: {props.artistName}</p>
                    <p>Primary genre: {props.genre}</p>
                <p><a href={props.podUrl}>Click to listen on Apple Podcast</a></p>
                </div>
            </li>
    )
}

export default IndivPodcast;