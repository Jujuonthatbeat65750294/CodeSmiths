import { useState } from "react";

const NewCourse = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [level, setLevel] = useState('Advance');
    const [isPending, setIsPending] = useState(false);

    // Define a click event handler function
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        const course = { title, description, level };
        /*useFetch('http://localhost:8000/courses', { 
            method: 'POST', 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(course)
        }).then(() => {
            console.log('Creating Course');
            setIsPending(false);
        })*/
    };

    return (
        <div className="new-course">

            <form onSubmit={handleSubmit}>
                <h1>Create a new Course</h1>
                <label>Course title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Course Description:</label>
                <textarea
                    rows={3}
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label>Course Level:</label>
                <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                >
                    <option value="Beginner">Beginner</option>
                    <option value="Advance">Advance</option>
                </select>
                {!isPending && <button>Add Course</button>}
                {isPending && <button disabled>Adding...</button>}
                <h2>{level}</h2>
            </form>

        </div>
    );
}

export default NewCourse;