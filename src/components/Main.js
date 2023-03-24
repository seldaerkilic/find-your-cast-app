import { useState } from 'react';
import Form from './Form';
import PodcastContainer from './PodcastContainer';

const Main = () => {

    // State for user search keywords:
    const [ podcast, setPodcast ] = useState({
    artist: '',
    title: '',
    image: '',
    country: '',
    genre: '',
    link: ''
    });

    // State for API error
    const [ apiError, setApiError ] = useState(false);

    // listen for keyword search input
    const [ userInput, setUserInput ] = useState('');

    // Submit event handler
    const handleSubmit = (e) => {
        e.preventDefault();

        fetchData();
    }

    const handleChange = (e) => {
        console.log(e.target.value);

        if (e.target.value === "") {
            setPodcast('')
        }
        setUserInput(e.target.value);
    }



    // API call logic
    const fetchData = () => {

        const url = new URL('https://itunes.apple.com/search?');

        url.search = new URLSearchParams({
            term: userInput,
            country: podcast.country,
            media: 'podcast',
            limit: 10
        })

        fetch(url)
        .then((result) => {
            return result.json();
            // check ok param on API return, and add error handling here
        })
        .then((data) => {
            console.log(data);
            setPodcast({
                ...podcast,
                artist: data.results[0].artistname,
                title: data.results[0].collectionName,
                image: data.results[0].artworkUrl600,
                country: data.results[0].country,
                genre: data.results[0].primaryGenreName,
                link: data.results[0].trackViewUrl
            });
            setApiError(false);
        })
    }
    


    return (
        <main className='wrapper'>

            <Form 
            handleSubmit={handleSubmit} 
            countrySelection={podcast.country} 
            genreSearch={podcast.genre}
            handleChange={handleChange} 
            typedValue={userInput} 
            formError={apiError}/>

            {/* <PodcastContainer /> */}

        </main>
    )
}

export default Main;