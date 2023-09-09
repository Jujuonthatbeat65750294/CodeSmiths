import React from 'react';
import { useHistory } from 'react-router-dom';
import BackButton from '../components/BackButton';
import navigateToRoute from '../utils/navigation';
import '../Ashley.css';

function JourneyPage() {

    const history = useHistory();
    const handlePlayButtonClick = (path) => {
        navigateToRoute(history, path);
    };
    return(
        <div id='journey-page-container'>
            <video className="background-video" autoPlay loop muted src="../../../assets/videos/background-video.mp4"/>
            <div className="header-bar">
                <BackButton />
                <h1>Journey Page</h1>
            </div>
            <div className="contents">
                <div className="course" onClick={() => handlePlayButtonClick('/main-menu/journey/course1')}>
                    <img src="../assets/img/courses/Phonics.jpg" alt="Learn to read and write with phonics" />
                </div>
            </div>
        </div>
    );
}

export default JourneyPage;