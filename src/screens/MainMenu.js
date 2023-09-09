import { Link } from 'react-router-dom';

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
                <div id="course1">
                    <div>
                        <img src="../../assets/img/courses/course_1/introduction.png"alt="Introduction" />
                    </div>

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
        </div>
     );
}
 
export default MainMenu;