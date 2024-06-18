import './App.css'
import { useState } from 'react';

function App() {
    const [name, setName] = useState('Sofía');
    const [newName, setNewName] = useState('');

    const changeNameClick = (newName) => {
        setName(newName);
    };

    const changeName = (event) => {
        event.preventDefault(); // -> para evitar que el formulario recargue la página, ya que sin esto se 
        //recarga al darle al botón porque es de tipo submit
        
        if (newName != '') {
            setName(newName);
            setNewName('');
        };
    };

    return (
        <div>
            <h2>Teacher Name: {name} </h2>
            <ul>
                <li onClick={() => changeNameClick('Data')}>Data</li>
                <li onClick={() => changeNameClick('Reyes')}>Reyes</li>
                <li onClick={() => changeNameClick('Yolanda')}>Yolanda</li>
            </ul>
            <form onSubmit={changeName}>
                <input type="text" placeholder="add a name" value={newName} onChange={event => {setNewName(event.target.value)}}/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default App;
