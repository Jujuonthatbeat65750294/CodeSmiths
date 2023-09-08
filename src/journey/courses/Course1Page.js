import React from 'react';
import { useHistory } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import navigateToRoute from '../../utils/navigation';

function Course1Page() {

    const history = useHistory();
    const handlePlayButtonClick = () => {
        navigateToRoute(history, '/main-menu/journey/course1');
    };

  return (
    <div id='course1-page-container'>
        <div className="header-bar">
            <BackButton />
            <h1>Learn to read and write with Jolly Phonics</h1>
        </div>
        <div className="course-contents">
            <div className="level" id='level-1'>
                <h2>Group 1 - S A T I P N</h2>
                <div className="level-content">
                    <div className="phase unlock">
                        <img src="../../assets/img/courses/course_1/introduction.png" alt="Introduction" />
                        <h2>Introduction</h2>
                        <div className="play-button" onClick={handlePlayButtonClick} ></div>
                    </div>
                    <div className="phase unlock" >
                        <img src="../../assets/img/courses/course_1/introduction.png" alt="Sound of S and A" />
                        <h2>S & A</h2>
                        <div className="play-button" onClick={handlePlayButtonClick} ></div>
                    </div>
                    <div className="phase lock">
                        <img src="../../assets/img/courses/course_1/introduction.png" alt="Practice S & A" />
                        <h2>Practice S & A</h2>
                        <div className="play-button" onClick={handlePlayButtonClick} ></div>
                    </div>
                    <div className="phase lock" >
                        <img src="../../assets/img/courses/course_1/introduction.png" alt="Sound of T and I" />
                        <h2>T & I</h2>
                        <div className="play-button" onClick={handlePlayButtonClick} ></div>
                    </div>
                    <div className="phase lock">
                        <img src="../../assets/img/courses/course_1/introduction.png" alt="Practice T & I" />
                        <h2>Practice T & I</h2>
                        <div className="play-button" onClick={handlePlayButtonClick} ></div>
                    </div>
                    <div className="phase lock">
                        <img src="../../assets/img/courses/course_1/introduction.png" alt="Review S A T I" />
                        <h2>Review S A T I</h2>
                        <div className="play-button" onClick={handlePlayButtonClick} ></div>
                    </div>
                    <div className="phase lock" >
                        <img src="../../assets/img/courses/course_1/introduction.png" alt="Sound of P and N" />
                        <h2>P & N</h2>
                        <div className="play-button" onClick={handlePlayButtonClick} ></div>
                    </div>
                    <div className="phase lock">
                        <img src="../../assets/img/courses/course_1/introduction.png" alt="Practice P & N" />
                        <h2>Practice P & N</h2>
                        <div className="play-button" onClick={handlePlayButtonClick} ></div>
                    </div>
                    <div className="phase lock">
                        <img src="../../assets/img/courses/course_1/introduction.png" alt="Review S A T I P N" />
                        <h2>Review S A T I P N</h2>
                        <div className="play-button" onClick={handlePlayButtonClick} ></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Course1Page;