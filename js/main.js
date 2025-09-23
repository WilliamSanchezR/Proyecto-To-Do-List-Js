// creamos las constantes y las capturamos para poder ejecutar lo que resta del ejercicio, estas constantes son globales por una cuestion de que esta fuera de cualquiera funcion

const input = document.getElementById('input');
const addBtn = document.getElementById('add-btn');
const toDoList = document.getElementById('cont-to-do-list');
const completedList = document.getElementById('cont-completed-list');

// creamos la funcion que nos permita crear una nueva tarea apartir del formulario

// toda etiqueta que vamos crear es apartir de la maqueta HTML pre-existente

function createToDoItem (textoItem){
    
    // creamos el nodo o elemento padre o contenedor

        const item = document.createElement('div');

            item.classList.add('item-to-do');
        
    // creamos el nodo hijo y le agregamos el type.checkbox

        const checkbox = document.createElement('input');

            checkbox.type = 'checkbox';

    // creamos el siguiente nodo hijo parrafo a este parrafo le asigno el valor del argumento de la funcion es decir lo que escribe el usuario en el campo

        const p = document.createElement('p');

            p.textContent = (textoItem);

    // creamos el ultimo nodo hijo de este div que es un boton que eliminara la tarea
        const deleteBtn = document.createElement('button');

            deleteBtn.innerHTML = '<i class="bi bi-x"></i>';

    // ensamblamos dentro del nodo padre sus nodos hijos, es decir la estructura de la tarea

        item.appendChild(checkbox);
        item.appendChild(p);
        item.appendChild(deleteBtn);

    // usamos el return para retornar y dar respuesta al elemento agregado esto mas adelante se vera mas adelante

        return item

}

// Detectamos el click o el evento click con un evento de escucha sobre el boton agregar (+) 
// para que apartir de este evento se agregue la tarea dentro del contenedor 

addBtn.addEventListener('click', ()=>{
    const textoItem = input.value.trim();

    if (textoItem == "") {
        alert("No se puede crear una tarea vacia, pato")
    } else {
        const newItem = createToDoItem(textoItem);
        toDoList.appendChild(newItem);
        input.value = "";
    }
});

//La siguiente funcion nos permitira agregar el funcionamiento principal sobre 
// las tareas es decir marcar la tarea como cmpletada y en dado caso eliminarla

function iventsToItem(item){
    //Utiamos query selector para capturar el item y el button que estan dentro del item
    const checkbox = item.querySelector('input');
        deleteBtn = item.querySelector('button');
    //completar la tarea 
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            completedList.appendChild(item);
        } else {
            toDoList.appendChild(item);
        }
    })

    deleteBtn.addEventListener('click', () => {
        item.remove();
    })
}

// Permitir agregar tarea presionando la tecla Enter en el input
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault(); //Evita que el form se envíe y cause el alert extra
        const textoItem = input.value.trim();
        if (textoItem === "") {
            alert("No se puede crear una tarea vacía");
        } else {
            const newItem = createToDoItem(textoItem);
            toDoList.appendChild(newItem);
            iventsToItem(newItem);
            input.value = "";
        }
    }
});




