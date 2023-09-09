import { Link } from 'react-router-dom';
import './MainBubbles.css';
const MainMenu = ({children}) => {
    return ( 
        <div className="main-menu-content">
            <video className="background-video" autoPlay loop muted src="../../assets/videos/background-video.mp4"/>
            <div className="top-menu-bar">
                <div className="profileImgUsername"> <div className="profile">
                    <img src='../../assets/img/menu/fish_64.png'/>
                </div>
                <div className='username'>Gwen</div>
                </div>
                <div className="setting"></div>
            </div>
            <h2 className='maintitle'>Continue Journey</h2>
            <div className="continue-contents">
                <div id="continue-course">
                    <Link to="/main-menu/journey/course1/practice_p_n">
                        <div>
                            <img src="../../assets/img/courses/course_1/practice.png"alt="Introduction" />
                            <h2>Practice P and N</h2>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="bottom-nav">
                <div className="journey-container">
                    <Link to="/main-menu/journey">
                        <div className="image-container">
                            <img src="../assets/img/journey.jpg" alt="Journey" className="image" />
                            <h2>Journey</h2>
                        </div>
                    </Link> 
                </div>
                <div className="games-container">
                    <Link to="/main-menu/games">
                        <div className="image-container">
                            <img src="../assets/img/games.jpg" alt="Games" className="image" />
                            <h2>Games</h2>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="bubbles bubble-1"></div>
          <div className="bubbles bubble-2"></div>
          <div className="bubbles bubble-3"></div>
          <div className="bubbles bubble-4"></div>
          <div className="bubbles bubble-6"></div>
          <div className="bubbles bubble-7"></div>
          <div className="bubbles bubble-8"></div>
          <div className="bubbles bubble-9"></div>
          <div className="bubbles bubble-10"></div>
        
        </div>
     );
}
 
export default MainMenu;