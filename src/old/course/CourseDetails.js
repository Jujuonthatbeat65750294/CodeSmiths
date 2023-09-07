import {useParams} from 'react-router-dom';
import useFetch from '../useFetch';

const CourseDetails = () => {
    const { id } = useParams();
    const {data:course, isPending, error} = useFetch('http://localhost:8000/courses/' + id);
    return (<div className="course-detail">
      {error && <div className='error'><h2>{error}</h2></div>}
      {isPending && <div className='loading'>Loading...</div>}

      {course && (
        <article>
            <h2>{course.title}</h2>
            <p>{course.level}</p>
            <div>{course.description}</div>
            <img src={process.env.PUBLIC_URL + '/img/' + course.image} alt={course.title} />
        </article>
      )}
    </div>);
}

export default CourseDetails;