import './App.css';
import Testimony from './components/Testimony.js';

function App() {
    return (
        <div className="App">
            <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp</h1>
            <Testimony
                image = 'emma'
                name = 'Emma Bostian'
                country = 'Suecia'
                change = 'Ingeníera de software'
                company = 'Spotify'
                description = {'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci cum cumque, delectus eos, <strong>est laudantium modi necessitatibus</strong> nesciunt odio pariatur quaerat qui quidem recusandae reiciendis rerum tenetur unde veritatis?'}
            />
            <Testimony
                image = 'sarah'
                name = 'Sarah Chima'
                country = 'Nigeria'
                change = 'Data Science'
                company = 'ChatDesk'
                description = {'Lorem ipsum dolor sit amet, <strong>consectetur adipisicing elit.</strong> Ad adipisci cum cumque, delectus eos, est laudantium modi necessitatibus nesciunt odio pariatur quaerat qui quidem recusandae reiciendis rerum tenetur unde veritatis?'}
            />
            <Testimony
                image = 'shawn'
                name = 'Shawn Wang'
                country = 'Singapur'
                change = 'UI Design'
                company = 'Amazon'
                description = {'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci cum cumque, delectus eos, est laudantium modi necessitatibus nesciunt odio pariatur quaerat qui quidem recusandae <strong>reiciendis rerum tenetur unde veritatis?</strong>'}
            />
        </div>
    );
}

export default App;
