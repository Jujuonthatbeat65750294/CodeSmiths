import { Link } from 'react-router-dom';

const MainMenu = () => {
    return ( 
        <div className="main-menu-content">
            <div className="top-menu-bar">
                <div className="profile">1</div>
                <div className="setting"></div>
            </div>
            <h2>Continue Journey</h2>
            <div className="continue-contents">
                <div id="course1">
                    <h1></h1>
                </div>
            </div>
            <div className="bottom-nav">
                <div className="journey-container">
                    <Link to="/journey">
                        <div className="image-container">
                            <img src="../img/journey.jpg" alt="Journey" className="image" />
                            <h2>Journey</h2>
                        </div>
                    </Link> 
                </div>
                <div className="games-container">
                    <Link to="/games">
                        <div className="image-container">
                            <img src="../img/games.jpg" alt="Games" className="image" />
                            <h2>Games</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default MainMenu;