
// Se obtiene el formulario
const formNuevaTarea = document.querySelector('#formNuevaTarea');

// Se agrega un evento al formulario
formNuevaTarea.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Se obtienen los valores de cada input
    const nombre = document.querySelector('#titulo').value;
    const fecha = document.querySelector('#descripcion').value;

    // Se crea un objeto con los valores de los inputs
    const nuevaTarea = {
        nombre,
        fecha
    }

    // Se envia la peticion POST
    try {
        const res = await fetch('http://localhost:4000/api/reserva', {
            method: 'POST',
            body: JSON.stringify(nuevaTarea)
        });

        const data = await res.json();
        console.log({ data });
        formNuevaTarea.reset();
        
        Swal.fire({
            icon: 'success',
            title: 'reserva creada',
            text: 'La tarea se ha creado correctamente'
        })

      setTimeout(() => {
        window.location.href = '/reserva';
      }, 2000);
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.message
        })
    }
})
