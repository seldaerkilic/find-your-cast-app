import IndivPodcast from "./IndivPodcast";

const PodcastContainer = (props) => {

    return(
        <section className="podcastSection wrapper">
            <ul className="podcastResults">
                {props.mainProps.map((indivPods) => {
                    return (
                        <IndivPodcast microProps={indivPods}
                        podUrl={indivPods.trackViewUrl} 
                        title={indivPods.collectionName} 
                        key={indivPods.collectionId} 
                        artistName={indivPods.artistName} 
                        genre={indivPods.primaryGenreName} />
                    )
                })}
            </ul>
        </section>
    )
}

export default PodcastContainer;
