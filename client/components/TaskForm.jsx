import { useState } from "react";
import axios from "axios";

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('image', image);

        try {
            const token = sessionStorage.getItem('token');

            await axios.post('http://localhost:5000/api/tasks', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-auth-token': token
                }
            });
            alert('Task added Successfully!')

            setTitle('');
            setDescription('');
            setImage(null);
            window.location.reload();
        }
        catch (err) {
            console.error('Upload file: ', err);
            alert('Error uploading task.');
            if (err.response?.status === 401) {
                alert('Session expired. Please login again.');
            sessionStorage.removeItem('token');
            window.location.href = '/login';
            }
            else
            {
                alert('Error uploading task: ' + (err.response?.data?.msg || 'Server error'));
            }
        }
        finally {
            setLoading(false);
        }
    };
    return(
        <div className="form-container">
            <h3>Add new Task</h3>
            <form onSubmit={handleSubmit} className="task-form">
                <input 
                    type="text"
                    placeholder="What needs to be done?"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea 
                    placeholder="Add some details..." 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                />
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={(e) => setImage(e.target.files[0])} 
                    required 
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Uploading...' : 'Add to Gallery'}
                </button>
            </form>

        </div>
    );
};

export default TaskForm;