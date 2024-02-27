// Se establece el nombre del almacenamiento local del navegador.
const storageName = 'tasks';

/*
    Declaración de la clase (LocalStorage) para manejar los métodos
    del almacenamiento local del navegador.
*/
class LocalStorage {

    // Función estática para crear un nuevo almacenamiento.
    static create = () => {
        /*
            Crear almacenamiento con el valor de la variable (storageName).
            Establecer dentro del nuevo almacenamiento un arreglo vació.
        */
        localStorage.setItem(storageName, '[]');
    }

    // Función estática para obtener los datos del almacenamiento.
    static getData = () => {
        // Establecer una variable (str) con los datos del almacenamiento.
        const storage = localStorage.getItem(storageName);

        /*
            Verificar si el almacenamiento existe.
            Si el almacenamiento existe.
        */
        if ( storage !== null ) {
            // Devolver un objeto javascript con los datos del almacenamiento.
            return JSON.parse(storage);

            // Si el almacenamiento no existe.
        } else {
            // Llamar a la función estática (create).
            LocalStorage.create();

            // Devolver un arreglo vació.
            return [];
        }
    };

    /*
        Función estática para establecer los datos del almacenamiento.
        Indicar el almacenamiento con el valor de la variable (storageName).
        Establecer dentro del almacenamiento un arreglo con los datos recibidos.
    */
    static setData = (data) => localStorage.setItem(storageName, JSON.stringify(data));

    // Función estática para editar él (texto) de una tarea en específico según su (id)
    static editTask = (id, text) =>
        LocalStorage.setData(
            LocalStorage.getData().map((task) =>
                task.id === id ? { ...task, text } : task
            )
        );

    /*
        Función estática para cambiar el valor de la propiedad (completed)
        de una tarea en específico según su (id)
    */
    static completedTask = (id) =>
        LocalStorage.setData(
            LocalStorage.getData().map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );

    // Función estática para remover una tarea en específico según su (id)
    static removeTask = (id) =>
        LocalStorage.setData(
            LocalStorage.getData().filter((task) => task.id !== id)
        );
}

// Exportar como valor predeterminado del módulo, la clase LocalStorage.
export default LocalStorage;