const ctrlReservas = {};
const reserva = require('../models/Reserva');

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
// Obtener una reserva
// Crear una reserva
// Actualizar una reserva
// Eliminar una reserva de forma lógica
ctrlReservas.obtenerReservas = async (req, res) => {
    try {
        const reservas = await reserva.findAll({
            where: {
                estado: true,
            }
        });

        if (!reservas || reservas.length === 0) {
            throw ({
                status: 404,
                message: 'No hay reservas registradas'
            })
        }

        return res.json(reservas);
    } catch (error) {
        return res.status(error.status || 500).json({
            message: error.message || 'Error interno del servidor'
        });
    }
}


ctrlReservas.obtenerReserva = async (req, res) => {
    const { id } = req.params;

    try {
        const reserva = await reserva.findOne({
            where: {
                idReserva: req.reserva.idReserva,
                estado: true
            }
        });

        if (!reserva) {
            throw ({
                status: 404,
                message: 'No existe la reserva'
            })
        }
    
        return res.json(reserva);

    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}


ctrlReservas.crearReserva = async (req, res) => {
    const { nombre, fecha } = req.body;

    try {
        const reserva = await reserva.create({
            nombre,
            fecha,
            idReserva: Date.now()
        });

        if (!reserva) {
            throw ({
                status: 400,
                message: 'No se pudo crear la reserva'
            })
        }

        return res.json(reserva);
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}


ctrlReservas.actualizarReserva = async (req, res) => {
    const { idReserva } = req.params;
    const { nombre, fecha } = req.body;
    
    try {
        const reservaActualizada = await reserva.update({
            titulo,
            descripcion
        }, {
            where: {
                id,
                estado: true
            }
        });

        if (!reservaActualizada) {
            throw ({
                status: 400,
                message: 'No se pudo actualizar la reserva'
            })
        }

        return res.json({
            message: 'Reserva actualizada correctamente',
            reservaActualizada
            
        });
    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}

ctrlReservas.eliminarReserva= async (req, res) => {
    const { idReserva } = req.params;

    try {
        const reservaEliminada = await reserva.update({
            estado: false
        }, {
            where: {
                idReserva,
                estado: true
            }
        });

        if (!reservaEliminada) {
            throw ({
                status: 400,
                message: 'No se pudo eliminar la reserva'
            })
        }

        return res.json({reservaEliminada, message: 'reserva eliminada correctamente' });
    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}

module.exports = ctrlReservas;