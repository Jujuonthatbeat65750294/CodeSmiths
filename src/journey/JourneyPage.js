import React from 'react';
import { useHistory } from 'react-router-dom';
import BackButton from '../components/BackButton';
import navigateToRoute from '../utils/navigation';

function JourneyPage() {

    const history = useHistory();
    const handlePlayButtonClick = () => {
        navigateToRoute(history, '/journey/course1');
    };
    return(
        <div id='journey-page-container'>
            <div className="header-bar">
                <BackButton />
                <h2>Journey Page</h2>
            </div>
            <div className="contents">
                <div className="course" onClick={handlePlayButtonClick}>
                    <img src="../img/courses/Phonics.jpg" alt="Learn to read and write with phonics" />
                </div>
                
            </div>
        </div>
    );
}

export default JourneyPage;