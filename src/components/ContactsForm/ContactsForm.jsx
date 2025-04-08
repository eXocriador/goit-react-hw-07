import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import styles from "./ContactsForm.module.css";

export default function ContactsForm() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input type="text" name="name" placeholder="Name" required />
      <input type="tel" name="number" placeholder="Phone number" required />
      <button type="submit">Add contact</button>
    </form>
  );
}
