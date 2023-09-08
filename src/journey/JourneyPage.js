import React from 'react';
import { useHistory } from 'react-router-dom';
import BackButton from '../components/BackButton';
import navigateToRoute from '../utils/navigation';

function JourneyPage() {

    const history = useHistory();
    const handlePlayButtonClick = (path) => {
        navigateToRoute(history, path);
    };
    return(
        <div id='journey-page-container'>
            <div className="header-bar">
                <BackButton />
                <h2>Journey Page</h2>
            </div>
            <div className="contents">
                <div className="course" onClick={() => handlePlayButtonClick('/main-menu/journey/course1')}>
                    <img src="../img/courses/Phonics.jpg" alt="Learn to read and write with phonics" />
                </div>
                
            </div>
        </div>
    );
}

export default JourneyPage;