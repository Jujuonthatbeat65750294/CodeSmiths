import React, { Component } from 'react';
import './game.css';


class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rounds: [
        {
          soundUrl: 'https://www.soundcityreading.net/uploads/3/7/6/1/37611941/alphasounds-t.mp3',
          options: [
            { label: 'Cat', imageUrl: 'data:image/png;base64,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' },
            { label: 'Fish', imageUrl: 'https://www.publicdomainpictures.net/pictures/470000/nahled/cute-fish-cartoon-illustration.jpg' },
            { label: 'Egg', imageUrl: 'https://img.freepik.com/free-vector/egg-cartoon-style_78370-1042.jpg' },
          ],
          correctAnswer: 'Egg',
     },
        {
          soundUrl: 'https://www.soundcityreading.net/uploads/3/7/6/1/37611941/alphasounds-t.mp3',
          options: [
            { label: 'Dog', imageUrl: 'https://static.vecteezy.com/system/resources/previews/016/460/489/original/cartoon-dog-child-isolated-on-transparent-background-free-png.png'},
            { label: 'Bird', imageUrl: 'https://e7.pngegg.com/pngimages/924/289/png-clipart-cartoon-bird-cartoon-white-seagull-cartoon-character-comics.png' },
            { label: 'Apple', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxxZwA7LHgZtw6QwH4yIeDpG7k_jmxIjNYlLjN5ms&s' },
          ],
          correctAnswer: 'Bird',
        },


        // Add more rounds with URLs and options as needed
      ],
      currentRound: 0,
      selectedOption: null,
      message: '',
      isPlaying: false,
      progressStatus: 0,
    };
    this.audio = new Audio();

    
  }

  playSound = () => {
    const { rounds, currentRound, isPlaying } = this.state;

    if (isPlaying || currentRound >= rounds.length) {
      return;
    }

    this.audio.src = rounds[currentRound].soundUrl;
    this.audio.play();

    this.setState({ isPlaying: true });

    this.audio.addEventListener('ended', () => {
      this.setState({ isPlaying: false });
    });
  }

  handleOptionClick = (option) => {
    const { currentRound, rounds, isPlaying, progressStatus } = this.state;

    if (isPlaying || currentRound >= rounds.length) {
      return;
    }

    if (option === rounds[currentRound].correctAnswer) {
      this.setState({ message: 'Congratulations! You got it right!' });
      this.setState((prevState) => ({ progressStatus: prevState.progressStatus + 50,}));
      this.moveToNextRound();
      
    } else {
      this.setState({ message: 'Sorry, that\'s not correct. Please try again.' });
    }
  }

  moveToNextRound = () => {
    const { currentRound, rounds,} = this.state;
    if (currentRound < rounds.length - 1) {
      this.setState((prevState) => ({
        currentRound: prevState.currentRound + 1,
        selectedOption: null,
        message: '',
        isPlaying: false,
        
      }), () => {
        // After updating the state, play the sound again.
    //   isPlaying: true;
        this.playSound();
      });
    } else {
      this.setState({ message: 'You finished this phase. Go for next phase' });
     
      
      //set button go to next phase
    }
  }











  

  render() {
    
    const { currentRound, rounds, progressStatus } = this.state;

    



    return (
      <div style={{ backgroundColor:'lightblue', // Set the width to 100% to make sure it fills its parent container
    }}  >
        
        <div className='Game'>Sound Recognition Game</div>
        
      
        <p>Round {currentRound + 1}</p>
        <p>Listen to the sound and choose the correct word:</p>

        <div className='myaudio' onClick={this.playSound}>
          <audio className='myaudio' ref={this.audioRef} src={rounds[currentRound].soundUrl} />
        </div>
        <div style={{ display: 'flex', justifyContent:'space-around', alignItems: 'center' }}>
  {rounds[currentRound].options.map((option, index) => (
    <div
      key={index}
      onClick={() => this.handleOptionClick(option.label)}
      style={{ cursor: 'pointer', marginTop: '100px', textAlign: 'center',  }}
    >
      <img
        src={option.imageUrl}
        alt={option.label}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          border: '2px solid #ccc',
        }}
        className={this.state.isPlaying || this.state.selectedOption !== null ? 'disabled' : ''}
      />
      <div className='objectLabels'>{option.label}</div>
   
      
    </div>
  ))}
</div>


        {this.state.message && <p>{this.state.message}</p>}
      </div>
    );
  }
}

export default Game;
