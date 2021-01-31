import style from "./ContactsList.module.css"
import PropTypes from 'prop-types';

function ContactsList({ contacts, onRemove }) {

    return (<ul className={style.list}>
        {contacts.map(contact => (
            <li className={style.item} key={contact.id}>
                <p>
                    <span>{contact.name}: </span>
                    <span>{contact.number}</span>
                </p>
                <button className={style.button} onClick={() => onRemove(contact.id)}>Delete</button>
            </li>)
        )}

    </ul>)
}

ContactsList.propTypes ={
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })), 
    onRemove: PropTypes.func
}

export default ContactsList;

