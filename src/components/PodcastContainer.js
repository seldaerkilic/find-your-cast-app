import IndivPodcast from "./IndivPodcast";

const PodcastContainer = (props) => {
console.log(props.mainProps)
    return(
        <section className="podcastSection wrapper">
            <h2>Recommended podcasts:</h2>
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
