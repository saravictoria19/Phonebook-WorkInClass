//models/Contact.js
const mongoose = require('mongoose');

//Definición del esquema del contacto
const contactSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

//Creación del modelo Contact
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;