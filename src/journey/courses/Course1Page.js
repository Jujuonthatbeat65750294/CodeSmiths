import React from 'react';
import { useHistory } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import navigateToRoute from '../../utils/navigation';

function Course1Page() {

    const history = useHistory();
    const handlePlayButtonClick = () => {
        navigateToRoute(history, '/journey/course1');
    };

  return (
    <div id='course1-page-container'>
        <div className="header-bar">
            <BackButton />
            <h2>Course 1</h2>
        </div>
        <div className="contents">
            <div className="phase">
                <img src="../img/courses/course_1/introduction.png" alt="Introduction" />
                <h2>Introduction</h2>
                <div className="play-button" onClick={handlePlayButtonClick} ></div>
            </div>
            <div className="phase lock" >
                <img src="../img/courses/course_1/introduction.png" alt="Sound of S and A" />
                <h2>S & A</h2>
                <div className="play-button" onClick={handlePlayButtonClick} ></div>
            </div>
            <div className="phase lock">
                <img src="../img/courses/course_1/introduction.png" alt="Practice S & A" />
                <h2>Practice S & A</h2>
                <div className="play-button" onClick={handlePlayButtonClick} ></div>
            </div>
        </div>
    </div>
  );
}

export default Course1Page;