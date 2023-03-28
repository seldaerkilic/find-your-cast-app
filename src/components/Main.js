import { useState } from 'react';
import Form from './Form';
import PodcastContainer from './PodcastContainer';
import LeftPanel from './LeftPanel';



const Main = () => {

    // State for user search keywords:
    const [ podcast, setPodcast ] = useState([]);

    // State for API error
    const [ apiError, setApiError ] = useState(false);

    // listen for keyword search input
    const [ userInput, setUserInput ] = useState('');

    // state for user selection on genre
    const [userGenre, setUserGenre] = useState('Society & Culture');

    // state for country selection
    const [userCountry, setUserCountry] = useState('US');

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

    // user selection setter for genre
    const handleGenre = (e) => {
        setUserGenre(e.target.value);
    }

    // user selection setter on country
    const handleCountry = (e) => {
        setUserCountry(e.target.value);
    }

    // API call logic
    const fetchData = () => {

        const url = new URL('https://itunes.apple.com/search?');

        url.search = new URLSearchParams({
            term: userInput,
            country: userCountry,
            media: 'podcast',
            limit: 10,
            primaryGenreName: userGenre
        })

        fetch(url)
        .then((result) => {
            if (result.ok) {
                return result.json();
            } else {
                throw new Error(result);
            }
        })
        .then((data) => {
            setPodcast(data.results);
            setApiError(false);
        })
        .catch((error)=>{
            setApiError(true);
            setPodcast('');
        })

    }

    return (
        <main className='wrapper'>
            <LeftPanel />

            <Form 
            handleSubmit={handleSubmit} 
            countrySelection={podcast.country} 
            genreSearch={podcast.genre}
            handleChange={handleChange} 
            typedValue={userInput}
            formError={apiError}
            handleGenre={handleGenre}
            handleCountry={handleCountry} />
            
            {
                (!podcast[0])
                    ? <h2>No podcasts available. Search a valid keyword!</h2>
                    : <h2>Recommended podcasts:</h2>
            }

            {
                podcast
                    ? <PodcastContainer mainProps={podcast} />
                    : null
            }

        </main>
    )
}

export default Main;