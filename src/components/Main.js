import { useState } from 'react';
import Form from './Form';
import PodcastContainer from './PodcastContainer';

const Main = () => {

    // State for user search keywords:
    const [ podcast, setPodcast ] = useState('');

    // State for country input
        // change it later to drop-down menu.
    const [ country, setCountry ] = useState('');

    // State for genre keyword
        // this might also be a dropdown. check what API returns.
    const [ genre, setGenre ] = useState('');


    // State for API error
    const [ apiError, setApiError ] = useState(false);


    // Submit event handler
    const handleSubmit = (e) => {
        e.preventDefault();

        fetchData();
    }

    // API call logic
    const fetchData = () => {

        const url = new URL('https://itunes.apple.com/search?');

        url.search = new URLSearchParams({
            term: 'podcast',
            country: 'CA',
            media: 'podcast'
        })

        fetch(url)
        .then((result) => {
            return result.json();
            // check ok param on API return, and add error handling here
        })
        .then((apiData) => {
            setPodcast(apiData.title);
            setCountry(apiData.country);
            setGenre(apiData.genre);

            setApiError(false);
        })
    }
    



    return (
        <main className='wrapper'>

            <Form handleSubmit={handleSubmit} />

            {/* <PodcastContainer /> */}

        </main>
    )
}

export default Main;