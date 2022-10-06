import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

const ContactComp = ({ contact, remove, changeStatus }) => {
  useEffect(() => {}, [contact]);

  return (
    <tr>
      <td>
        <span>{contact.name}</span>
      </td>
      <td>
        <button type="button" onClick={() => changeStatus(contact)}>
          {contact.status === true ? "Online" : "Offline"}
        </button>
      </td>
      <td className="btn-remove">
        <button type="button" onClick={() => remove(contact)}>
          delete
        </button>
      </td>
    </tr>
  );
};

ContactComp.prototype = {
  contact: PropTypes.instanceOf(Contact).isRequired,
};

export default ContactComp;
