import styles from '../styles/ContactForm.module.css';
import Button from './Button';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';


export default function ContactForm(props) {
   const [isSent, setIsSent] = useState(false);
     const form = useRef();

   const sendEmail = (e) => {
    e.preventDefault();
      emailjs
        .sendForm(
          'service_yuga0lv',
          'template_43qigbt',
          form.current,
          'zEiQmdjyKZb_7eNp9'
        )
        .then(
          (result) => {
            setIsSent(true)
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
  };

  return (
    isSent ? (<section className={styles.confirmation}>
      <p className={styles.text}>Awesome! Your message has been sent to Matt - you should recieve a confirmation of this in your inbox (maybe check your spam folder)!</p>
      
      <p className={styles.text}>Matt will be in touch with you ASAP!</p>
    </section>) : (
    <section id='contact' className={styles.container}>
      <div className={styles.textWrapper}>
        <h2>{props.faq ? ('Did you have a different question for Matt?') : (`Let's make a record together`)}</h2>
        <p className={styles.text}>{props.faq ? (`Get intouch below and Matt will answer ASAP!`) : (`Fill in this contact form and make your first step towards bringing your next project to life, Matt will be back in touch with you ASAP.`) }</p>
      </div>
      
      <form className={styles.form} ref={form} onSubmit={sendEmail}> 
        <div className={styles.nameEmailWrapper}>
          <div className={styles.nameWrapper}>
            <label className={styles.label} htmlFor="name">Your Name</label>
            <input
              type="text"
              name="user_name"
              className={styles.name}
              tabIndex="1"
            />
          </div>
          <div className={styles.emailWrapper}>
            <label className={styles.label} htmlFor="email">E-Mail</label>
            <input
              type="email"
              name="user_email"
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
        <Button form={true} text={'SEND YOUR MESSAGE'} />
      </form>
    </section>
  ));
}
