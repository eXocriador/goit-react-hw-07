import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import styles from "./Contact.module.css";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      {name}: {number}
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
}
