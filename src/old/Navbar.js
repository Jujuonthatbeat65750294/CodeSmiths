import { Link } from 'react-router-dom';
const Navbar = () => {
    // Define the name variable
    const name = 'CodeSmiths';

    return (
        <nav className="navbar">
            {/* Render the name variable */}
            <h1>{name}</h1>

            <div className="links">
                {/* Render navigation links */}
                <Link to="/">Home</Link>
                <Link to="/">Courses</Link>
                <Link to="/CreateCourse">New Course</Link>
            </div>
        </nav>
    );
}

export default Navbar;