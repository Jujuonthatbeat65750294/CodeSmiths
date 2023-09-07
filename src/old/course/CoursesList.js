import { Link } from 'react-router-dom';
const CourseList = ({ courses, title }) => {
  // The CourseList component receives two props: courses and title

  return (
    <div className="course-list">
      {/* Render the title prop */}
      <h2>{title}</h2>

      <div className="courses-container">
        {/* Map over the courses array and render each course */}
        {courses.map(course => (
          <div className="course-card" key={course.id}>
            {/* Render the course image */}
            <Link to={ '/courses/' + course.id}>
              <img src={process.env.PUBLIC_URL + '/img/' + course.image} alt={course.title} />

              <div className="details">
                {/* Render the course title */}
                <h2>{course.title}</h2>

                {/* Render the course description */}
                <p>{course.description}</p>
              </div>
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;