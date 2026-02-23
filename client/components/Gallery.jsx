import { useEffect, useState } from "react";
import axios from 'axios';

const Gallery = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
    try {
      // 1. Get the token from session storage
      const token = sessionStorage.getItem('token');

      // 2. Send the token in the 'x-auth-token' header
      const res = await axios.get('http://localhost:5000/api/tasks', {
        headers: {
          'x-auth-token': token
        }
      });
      setTasks(res.data);
    } 
    catch (err) {
      console.error("Error fetching tasks:", err.response?.data?.msg || err.message);
    }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="gallery-container">
            <h2>My Task Gallery</h2>
            <div className="task-grid">
                {tasks.map((task) => (
                    <div key={task._id} className="div">
                        <img src={task.imageUrl} alt={task.title} className="task-image" />
                        <div className="task-info">
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;