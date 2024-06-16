import React from 'react';
import axios from 'axios';

const ContactList = ({ contacts, fetchContacts, setCurrentContact }) => {
    //Manejar la eliminación de un contacto
    const handleDelete = async (id) => {  
        try{
            await axios.delete(`http://localhost:3001/contacts/${id}`);
            fetchContacts();  
        } catch (error){
            console.error('Error deleting contact', error);
        }
    };
    return (
        //Tabla para mostrar los contactos
        <div className="contacts-table">
            <h2>Added Contact List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (
                        <tr key={contact.id}>
                            <td>{contact.name}</td>
                            <td>{contact.lastname}</td>
                            <td>{contact.age}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.email}</td>
                            <td>
                                <button onClick={() => setCurrentContact(contact)}>Edit</button>
                                <button className="delete" onClick={() => handleDelete(contact.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactList;