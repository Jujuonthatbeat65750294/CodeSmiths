import CourseList from '../course/CoursesList';
import Paysage from './paysage';
import useFetch from './useFetch';
import './index.css';
import GameSection from './GameSection';

const Home = () => {
  const { data: courses, isPending, error } = useFetch('http://localhost:8000/courses');

 

  return (
    <div className="home">
      {/* Display a loading message if data is pending */}
      {error && <div className='error'><h2>{error}</h2></div>}
      {/* Display a loading message if data is pending */}
      {isPending && <div className='loading'>Loading...</div>}

      <div className="home-content">
        {/* Display a CourseList component with filtered beginner courses */}
        {courses && (
          <CourseList courses={courses.filter(course => course.level === 'Beginner')} title={"Beginner Courses"} />
        )}

        {/* Display a CourseList component with all courses */}
        {courses && (
          <CourseList courses={courses} title={"All Courses"} />
        )}

        {/* Display the Paysage component as a background */}
       
      </div>
      <GameSection/>
    </div>
  );
}

export default Home;
