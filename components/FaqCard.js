import styles from '../styles/FaqCard.module.css';

export default function faqCard(props) {
  return (
    <div className={styles.container}>
      <div className={styles.question}>{props.question}</div>
      <div className={styles.answer}>{props.answer}</div>
    </div>
  );
}
