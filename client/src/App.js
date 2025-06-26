import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    axios.get('/api/tasks').then(res => setTasks(res.data));
  }, []);

  const handleAdd = async () => {
    const res = await axios.post('/api/tasks', { text });
    setTasks([...tasks, res.data]);
    setText('');
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/tasks/${id}`);
    setTasks(tasks.filter(task => task._id !== id));
  };

  return (
    <div>
      <h1>MERN Todo App</h1>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="New task" />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            {task.text} <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
