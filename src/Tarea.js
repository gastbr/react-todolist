import React from 'react';

function Tarea({ tarea, eliminarTarea }) {
  return (
    <li>
      {tarea}
      <button onClick={eliminarTarea}>Eliminar</button>
    </li>
  );
}

export default Tarea;
