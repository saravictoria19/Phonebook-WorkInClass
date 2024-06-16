import React, {useState, useEffect } from 'react';
import axios from 'axios';

const ContactForm = ({ fetchContacts, currentContact, setCurrent

}) => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    //Efecto para actualizar el formulario cuando se seleccione un contacto para editar
    useEffect(() => {
        if (currentContact) {
            setName(currentContact.name);
            setLastname(currentContact.lastname);
            setAge(currentContact.age);
            setPhone(currentContact.phone);
            setEmail(currentContact.email);
        }
    }, [currentContact]);

    //Manejar el envio del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
    try{
         if (currentContact) {
            //Actualizar contacto existente
            await axios.put(`http://localhost:3001/contacts/${currentContact.id}`, {name, lastname, age, phone, email});
            setCurrentContact(null);
        } else {
            //Crear nuevo contacto
            await axios.post('http://localhost:3001/contacts', {name, lastname, age, phone, email});
        }
        fetchContacts();
        setName('');
        setLastname('');
        setAge('');
        setPhone('');
        setEmail('');
    } catch (error) {
        console.error('Error saving contact', error);
    }
};

return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name</label>
            <input type="text" value={name} onChange={ (e) => setName (e.target.value)} required />
        </div>
        <div>
            <label>LastName</label>
            <input type="text" value={lastname} onChange={ (e) => setLastname (e.target.value)} required />
        </div>
        <div>
            <label>Age</label>
            <input type="text" value={age} onChange={ (e) => setAge (e.target.value)} required />
        </div>
        <div>
            <label>Phone</label>
            <input type="text" value={phone} onChange={ (e) => setPhone (e.target.value)} required />
        </div>
        <div>
            <label>Email</label>
            <input type="text" value={email} onChange={ (e) => setEmail (e.target.value)} required />
        </div>
        <button type="submit">{currentContact ? 'Update Contact' : 'Add Contact'}</button>
    </form>
    );
};

export default ContactForm;