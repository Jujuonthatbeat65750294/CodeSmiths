import React from 'react';
import course1Data from './course1Data.json';
import { useHistory } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import navigateToRoute from '../../utils/navigation';

function Course1Page() {
  const history = useHistory();
  const handlePlayButtonClick = (path) => {
    navigateToRoute(history, path);
  };

  const setPhaseStatus = (phaseId, levelId) => {
    // Update the status of the phase to "ongoing" when it is clicked
    const updatedData = course1Data.levels.map((level) => {
      if (level.id === levelId) {
        return {
          ...level,
          phases: level.phases.map((phase) => {
            if (phase.id === phaseId) {
              return {
                ...phase,
                status: 'ongoing',
              };
            }
            return phase;
          }),
        };
      }
      return level;
    });

    // Save the updated data to the JSON file
    // (You'll need to implement the actual saving logic)
  };

  return (
    <div id='course1-page-container'>
      <video className="background-video" autoPlay loop muted src="../../../../assets/videos/background-video.mp4"/>
      <div className="header-bar">
        <BackButton />
        <h1>Learn to read and write with Jolly Phonics</h1>
      </div>
      <div className="course-contents">
        {course1Data.levels.map((level) => (
          <div className="level" id={`level-${level.id}`} key={`level-${level.id}`}>
            <h2>{level.name}</h2>
            <div className="level-content">
              {level.phases.map((phase) => (
                <div
                  id={phase.id}
                  className={`phase ${phase.status}`}
                  key={`phase-${phase.id}`}
                  onClick={() => setPhaseStatus(phase.id, level.id)}
                >
                  <img src={phase.image} alt={phase.name} />
                  <h2>{phase.name}</h2>
                  <div
                    className="play-button"
                    onClick={() =>
                      handlePlayButtonClick(`/main-menu/journey/course1/${phase.content}`)
                    }
                  ></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course1Page;