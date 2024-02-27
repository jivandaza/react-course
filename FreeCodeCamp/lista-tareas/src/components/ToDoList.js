// Importar los estilos del componente
import './../css/to-do-list.css';
// Importar el modúlo (LocalStorage) para utilizar las funciones estáticas
import LocalStorage from '../models/storage.js';
// Importar los diferentes componentes a utilizar en el componente
import TaskForm from './TaskForm.js';
import Task from './Task.js';
import InformationMessage from './InformationMessage.js';
// Importar useState para el manejo de estados
import React, { useState } from 'react';

function ToDoList() {
    // Establecer el estado de la lista de tareas.
    // Iniciar el estado llamando a (getData)
    const [tasks, setTasks] = useState(LocalStorage.getData());

    /*
        Función para:
            1: Establecer los datos con la tarea recibida llamando a (setData)
            2: Modificar el estado de la lista de tareas llamando a (getData)
    */
    const addTask = (task) => {
        LocalStorage.setData([task, ...tasks]);
        setTasks(LocalStorage.getData());
    };

    /*
        Función para:
            1: Editar él (texto) de una tarea según su (id) llamando a (editTask)
            2: Modificar el estado de la lista de tareas llamando a (getData)
    */
    const editTask = (id, text) => {
        LocalStorage.editTask(id, text);
        setTasks((LocalStorage.getData()));
    }

    /*
        Función para:
            1: Cambiar el valor de la propiedad (completed)
            de una tarea según su (id) llamando a (completedTask)
            2: Modificar el estado de la lista de tareas llamando a (getData)
    */
    const completedTask = (id) => {
        LocalStorage.completedTask(id);
        setTasks(LocalStorage.getData());
    };

    /*
        Función para:
            1: Remover una tarea según su (id) llamando a (removeTask)
            2: Modificar el estado de la lista de tareas llamando a (getData)
    */
    const removeTask = (id) => {
        LocalStorage.removeTask(id);
        setTasks(LocalStorage.getData());
    };

    // Si el tamaño del estado de la lista de tareas es cero.
    if ( !tasks.length ) {

        // Devolver los siguientes componentes.
        return(
            <>
                <TaskForm
                    onSubmitAdd={addTask}
                />
                <InformationMessage
                    msg='There are no tasks to show'
                />
            </>
        );

    // Si el tamaño del estado de la lista de tareas es distinto de cero.
    } else {

        // Devolver los siguientes componentes.
        return(
            <>
                <TaskForm
                    onSubmitAdd={addTask}
                    onSubmitEdit={editTask}
                />
                <div className='to-do-list-container'>
                    {
                        tasks.map((task) =>
                            <Task
                                key={task.id}
                                id={task.id}
                                text={task.text}
                                completed={task.completed}
                                completedTask={completedTask}
                                removeTask={removeTask}
                            />
                        )
                    }
                </div>
            </>
        );
    }
}

export default ToDoList;