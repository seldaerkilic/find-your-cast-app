

const IndivPodcast = (props) => {
    return (
            <li className="pods" 
            >
                <a href={props.podUrl} className="podsImg">
                    <img src={props.microProps.artworkUrl600} alt={props.microProps.collectionName} className="podsImage" />
                </a>
                <div className="podsInfo">
                    <p className="podsPara">Title: {props.title}</p>
                    <p className="podsPara">Artist: {props.artistName}</p>
                    <p className="podsPara">Primary genre: {props.genre}</p>
                    <p className="podsPara"><a href={props.podUrl}>Click to listen on Apple Podcast</a></p>
                </div>
            </li>
    )
}

export default IndivPodcast;