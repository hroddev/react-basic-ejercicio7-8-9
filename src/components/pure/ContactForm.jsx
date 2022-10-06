import { useRef, useState } from "react";
import { Contact } from "../../models/contact.class";

const ContactForm = ({ add }) => {
  const nameRef = useRef("");
  const [status, setStatus] = useState(true);
  
  // the select values are string, I needed transfor the string to boolean
  const handleStatus = (e) => {
    const isTrueSet = e.target.value === "true";
    setStatus(isTrueSet)
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const newContact = new Contact(
      nameRef.current.value,
      status
    );
    add(newContact);
  };
  return (
    <div>
      <h2 className="title">Crear contacto</h2>
      <form className="form" onSubmit={handlerSubmit}>
        <div>
          <label>
            Nombre
            <input
              className="input"
              type="text"
              placeholder="Ingresa el nombre"
              ref={nameRef}
              id="inputName"
              required
              autoFocus
            />
          </label>
        </div>
        <div>
          <label>
            Estado
            <select
              className="select"
              onChange={handleStatus}
            >
              <option value="true">Online</option>
              <option value="false">Offline</option>
            </select>
          </label>
        </div>
        <div className="center">
          <button type="submit" className="btn-save">
            Grabar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
