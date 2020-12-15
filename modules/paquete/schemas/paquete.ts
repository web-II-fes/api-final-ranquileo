import { Schema, model } from 'mongoose';

const schemaPaquete = new Schema({
    nombreR: String,
    direccionR: String,
    nombreD: String,
    direccionD: String,
    descripcion: String,
    fechaEntrega: Date,
});

export let paqueteSchema = model('schemaPaquete', schemaPaquete, 'paquetes');
