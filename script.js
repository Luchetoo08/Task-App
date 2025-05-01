// Obtener referencias a los elementos
const mypage = document.getElementById('mypage');
const myinput = document.getElementById('myinput');
const mybutton = document.getElementById('mybutton');

// Función para crear una nueva tarea
function createTask() {
    // Crear elementos
    const mytask = document.createElement('div');
    const mytaskText = document.createElement('p');
    const mytaskDelete = document.createElement('button');

    // Establecer clases
    mytask.className = 'task';
    mytaskText.className = 'task-text';
    mytaskDelete.className = 'task-delete';

    // Establecer contenido
    mytaskText.textContent = myinput.value;
    mytaskDelete.innerHTML = '<i class="fas fa-check"></i>';

    // Limpiar input
    myinput.value = '';

    // Insertar elementos al DOM
    mytask.appendChild(mytaskText);
    mytask.appendChild(mytaskDelete);
    mypage.appendChild(mytask);

    // Evento para eliminar tarea con confetti
    mytaskDelete.onclick = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { x: 0.5, y: 0.5 }
        });
        mytask.remove();
    };
}

// Crear tarea al hacer clic en el botón
mybutton.onclick = () => {
    if (myinput.value.trim() !== '') {
        createTask();
    }
};

// Crear tarea al presionar Enter
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && myinput.value.trim() !== '') {
        createTask();
    }
});
