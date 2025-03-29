import css from './Contact.module.css';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={css.container}>
      <div className={css.contact}>
        <p>
          <FaUser className={css.margin} size={20} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.margin} size={20} />
          {number}
        </p>
      </div>
      <button className={css.btn} type='button' onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
