import { useState } from 'react';
import Form from './Form';
import PodcastContainer from './PodcastContainer';

const Main = () => {

    // State for user search keywords:
    const [ podcast, setPodcast ] = useState([]);

    // State for API error
    const [ apiError, setApiError ] = useState(false);

    // listen for keyword search input
    const [ userInput, setUserInput ] = useState('');

    // Submit event handler
    const handleSubmit = (e) => {
        e.preventDefault();

        fetchData();
    }

    // input change handler
    const handleChange = (e) => {
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
            country: 'US',
            media: 'podcast',
            limit: 10,
        })

        fetch(url)
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            setPodcast( ...podcast, data.results );
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
            formError={apiError} />

            {/* If user clears the input, don't show any results on the page */}
            {
                podcast
                    ? <PodcastContainer mainProps={podcast}  />
                    : null
            }

        </main>
    )
}

export default Main;