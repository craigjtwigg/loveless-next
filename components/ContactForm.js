import styles from '../styles/ContactForm.module.css';
import Button from './Button';

export default function ContactForm(props) {
  return (
    <section id='contact' className={styles.container}>
      <div className={styles.textWrapper}>
        <h2>{props.faq ? ('Did you have a different question for Matt?') : (`Let's make a record together`)}</h2>
        <p className={styles.text}>{props.faq ? (`Get intouch below and Matt will answer ASAP!`) : (`Fill in this contact form and make your first step towards bringing your next project to life, Matt will be back in touch with you ASAP.`) }</p>
      </div>
      
      <form className={styles.form}>
        <div className={styles.nameEmailWrapper}>
          <div className={styles.nameWrapper}>
            <label className={styles.label} htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              className={styles.name}
              tabIndex="1"
            />
          </div>
          <div className={styles.emailWrapper}>
            <label className={styles.label} htmlFor="email">E-Mail</label>
            <input
              type="email"
              name="email"
              className={styles.email}
              tabIndex="2"
            />
          </div>
        </div>
        <div className={styles.subjectWrapper}>
          <label className={styles.label} htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            className={styles.subject}
            tabIndex="3"
          />
        </div>
        <div className={styles.messageWrapper}>
          <label className={styles.label} htmlFor="message">Message</label>
          <textarea name="message" className={styles.message} tabIndex="4" />
        </div>
        <Button text={'SEND YOUR MESSAGE'} />
      </form>
    </section>
  );
}
