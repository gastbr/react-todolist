import React, { useState } from 'react';
import './App.css';
import Tarea from './Tarea';

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const handleInputChange = (e) => {
    setNuevaTarea(e.target.value);
  };

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea('');
    }
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>

      <input
        type="text"
        value={nuevaTarea}
        onChange={handleInputChange}
        placeholder="Escribe una tarea"
      />
      <button onClick={agregarTarea}>Agregar Tarea</button>

      <ul>
        {tareas.map((tarea, index) => (
          <Tarea key={index} tarea={tarea} eliminarTarea={() => eliminarTarea(index)} />
        ))}
      </ul>
    </div>
  );
}

export default App;
