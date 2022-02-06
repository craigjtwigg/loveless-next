import styles from '../styles/ContactForm.module.css';

export default function ContactForm() {
  return (
    <section className={styles.container}>
      <form className={styles.form}>
        <div className={styles.nameEmailWrapper}>
          <div className={styles.nameWrapper}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              className={styles.name}
              tabIndex="1"
            />
          </div>
          <div className={styles.emailWrapper}>
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              name="email"
              className={styles.email}
              tabIndex="2"
            />
          </div>
        </div>
        <div className={styles.subjectWrapper}>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            className={styles.subject}
            tabIndex="3"
          />
        </div>
        <div className={styles.messageWrapper}>
          <label htmlFor="message">Message</label>
          <textarea name="message" className={styles.message} tabIndex="4" />
        </div>
        <button className={styles.button} type='submit'>SUBMIT</button>
      </form>
    </section>
  );
}
