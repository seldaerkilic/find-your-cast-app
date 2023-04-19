import {useState, useEffect} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const LeftPanel = () => {

    const [myPodcast, setMyPodcast] = useState([{}]);

    // API call only for my own podcast -- running my ads here :)
    const fetchData = () => {
        const url = new URL('https://itunes.apple.com/search?');

        url.search = new URLSearchParams({
            term: 'Oo Kanada',
            country: 'US',
            media: 'podcast',
            limit: 1
        })

        fetch(url)
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                setMyPodcast(data.results);
            })
    }

    useEffect(()=>{
        fetchData();
    },[])

    const [isOpen, setOpen] = useState("false");

    const ToggleOpen = () => {
        setOpen(!isOpen);
    };

    return(
        <>
            <aside className={isOpen ? "open" : "panel"}>
                <div className='sideHeading'>
                    <h3>What is a podcast?</h3>
                    <FontAwesomeIcon icon={faArrowRight} className={isOpen ? "reverse fa-2x" : "arrowIcon fa-2x"} onClick={ToggleOpen} />
                </div>
                
                <div className="panelInfo">
                    <p>A podcast is a digital audio file which you can download or stream to listen to it at your own convenience. Accounding to some surveys, the most popular genres are comedy and news.</p>
                    <p>The most common ways to discover podcasts are searching on the internet, and recommendations of friends. Find Your Cast App is created to help you discover some cool podcasts, and be that friend who makes the best recommendations!</p>
                    <p>Plus, if you know anyone interested in Turkish migration studies, you can share my short series! Link is below:</p>
                </div>
                
                <div className='myPodcast' key={myPodcast[0].collectionId}>
                    <img src={myPodcast[0].artworkUrl600} alt={myPodcast[0].collectionName} className="myPodsImage" />
                    <div className="myPodsInfo">
                        <p>Title: {myPodcast[0].collectionName}</p>
                        <p>Genre: {myPodcast[0].primaryGenreName}</p>
                        <p>Language: Turkish*</p>
                        <p><a href={myPodcast[0].trackViewUrl}>Click here to listen</a></p>
                    </div>
                </div>
                
                
            </aside>
        </>
    )
}

export default LeftPanel;