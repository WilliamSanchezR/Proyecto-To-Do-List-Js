// creamos las constantes y las capturamos para poder ejecutar lo que resta del ejercicio, estas constantes son globales por una cuestion de que esta fuera de cualquiera funcion

const input = document.getElementById('input');
const addBtn = document.getElementById('add-btn');
const toDoList = document.getElementById('cont-to-do-list');
const completedList = document.getElementById('cont-completed-list');

// creamos la funcion que nos permita crear una nueva tarea apartir del formulario

// toda etiqueta que vamos crear es apartir de la maqueta HTML pre-existente

function createToDoItems (textoItem){
    
    // creamos el nodo o elemento padre o contenedor

        const item = document.createElement('div')

            item.classlist.add('item-to-do');
        
    // creamos el nodo hijo y le agregamos el type.checkbox

        const checkbox = document.createElement('input');

            checkbox.type = 'checkbox';

    // creamos el siguiente nodo hijo parrafo a este parrafo le asigno el valor del argumento de la funcion es decir lo que escribe el usuario en el campo

        const p = document.createElement('p');

            p.textContent = (textoItem);

    // creamos el ultimo nodo hijo de este div que es un boton que eliminara la tarea
        const deleteBtn = document.createElement('button');

            deleteBtn.innerHTML = <i class="bi bi-x"></i>;

    // ensamblamos dentro del nodo padre sus nodos hijos, es decir la estructura de la tarea

        item.appendChild(checkbox);
        item.appendChild(p);
        item.appendChild(deleteBtn);

    // usamos el return para retornar y dar respuesta al elemento agregado esto mas adelante se vera mas adelante

        return item

}

