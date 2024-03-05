import ToDoList from './components/ToDoList.js';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className='application-tasks'>
                <div className="tasks-list-main">
                    <h1>My Tasks</h1>
                    <ToDoList />
                </div>
            </div>
        </div>
    );
}

export default App;
