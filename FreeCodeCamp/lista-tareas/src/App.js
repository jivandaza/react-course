import Logo from './components/Logo.js';
import ToDoList from './components/ToDoList.js';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className='application-tasks'>
                <Logo />
                <div className="tasks-list-main">
                    <h1>My Tasks</h1>
                    <ToDoList />
                </div>
            </div>
        </div>
    );
}

export default App;
