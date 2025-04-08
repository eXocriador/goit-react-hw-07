import ContactsForm from './components/ContactsForm/ContactsForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import styles from './App.module.css';
import 'modern-normalize/modern-normalize.css';

const App = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactsForm />

      <section className={styles.searchSection}>
        <SearchBox />
      </section>

      <section className={styles.listSection}>
        <h2 className={styles.subtitle}>Contacts</h2>
        <ContactList />
      </section>
    </div>
  );
};

export default App;
