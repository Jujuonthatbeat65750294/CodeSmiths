import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import GameItem from './GameItem';
import './GameSelection.css';
import './Bubble.css';
import Phase_Guess_First_Letter from '../journey/test/Phase_Guess_First_Letter';
import PaysageGame from '../old/paysageGame';


function GameSelection(){
  const games = [
    {
      title: 'Phonics Game',
      path: '../old/paysageGame',
      imageUrl: 'https://cdn.splashmath.com/curriculum_uploads/images/playables/bucbucs_deep_dive_45.png',
      description: 'Listen and ct phonics',
   
    },
    {
      title: 'Drag and drop',
      path: '../journey/test',
      imageUrl: 'https://cdn.splashmath.com/curriculum_uploads/images/playables/case_carnival_3_4.png',
      description: 'Drag and drop letters',
    },
    {
      title: 'Maths game',
      path: '../journey/test',
      imageUrl: 'https://i5.walmartimages.com/seo/count-ocean-animals-fun-game-kids-Game-2-5-Year-Old-Numbers-From-1-10-Marine-Life-Guessing-Book-For-Preschoolers-Activity-Fun-Puzzles-Find-Animals-An_30995d31-ffa1-4c3f-a8c9-b05b57b30f93.251408d7cd6366bde92fb62edc168dd8.jpeg',
      description: 'Add and substract numbers',
    },
    // Add more game objects here
  ];



  const gameComponents = {
    '../journey/Phase_Guess_First_Letter': <Phase_Guess_First_Letter/>,
    '../journey/Phase_Guess_First_Letter': <Phase_Guess_First_Letter/>,
    '../journey/Phase_Guess_First_Letter': <Phase_Guess_First_Letter/>,
    
  };


  return (
    <div>
    <section className="game-section">
      <h2 className="line-title">trending games</h2>
      <OwlCarousel autoWidth loop className="owl-carousel custom-carousel owl-theme">
        {games.map((game, index) => (
          <GameItem
            key={index}
            title={game.title}
            path={game.path}
            imageUrl={game.imageUrl}
            description={game.description}
          />
        ))}
      </OwlCarousel>
    </section>
    <div className="bubbles bubble-1"></div>
    <div className="bubbles bubble-2"></div>
    <div className="bubbles bubble-3"></div>
    <div className="bubbles bubble-4"></div>
    
    </div>
  );
}

export default GameSelection;
