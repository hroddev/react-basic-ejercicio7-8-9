import { useEffect, useState } from "react";
import { Contact } from "../../models/contact.class";
import ContactComp from "../pure/Contact";
import ContactForm from "../pure/ContactForm";

const ContactList = () => {
  const defaultContact1 = new Contact("test1", true);
  const defaultContact2 = new Contact("test2", false);

  const [contacts, setContacts] = useState([defaultContact1, defaultContact2]);

  const deleteContact = (contact) => {
    const index = contacts.indexOf(contact);
    const tempContact = [...contacts];
    tempContact.splice(index, 1);
    setContacts(tempContact);
  };

  const addContact = (contact) => {
    const tempContact = [...contacts];
    tempContact.push(contact);
    setContacts(tempContact);
  };

  const changeStatus = (contact) => {
    const index = contacts.indexOf(contact);
    const tempContact = [...contacts];
    tempContact[index].status = !tempContact[index].status;
    setContacts(tempContact);
  };

  useEffect(() => {}, [contacts]);

  const Table = () => {
    return (
      <table className="table">
        <thead>
          <tr className="tr">
            <th scope="col">Nombre</th>
            <th scope="col">Estado</th>
            <th scope="col">Accion</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => {
            return (
              <ContactComp
                key={index}
                contact={contact}
                remove={deleteContact}
                changeStatus={changeStatus}
              />
            );
          })}
        </tbody>
      </table>
    );
  };
  return (
    <div className="App-header">
      <div>
        <div>
          <ContactForm add={addContact} />
        </div>
        <div>
          <h5 className="title">Lista de Contactos</h5>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default ContactList;
