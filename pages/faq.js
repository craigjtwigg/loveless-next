import styles from '../styles/Faq.module.css';
import NavBar from '../components/NavBar';
import { useInView } from 'react-intersection-observer';
import ContactForm from '../components/ContactForm';
import FaqCard from '../components/FaqCard';
import { faqData } from '../data';

export default function Faq() {
      const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <div className={styles.container}>
    <NavBar inView={inView} />
    <h1 className={styles.title}>FAQ</h1>
<div className={styles.faqContainer}>
  {faqData.map((faq, indx)=> (
<FaqCard key={indx}  question={faq.question} answer={faq.answer}/>
    ))}</div>
    
    
    <ContactForm faq={true} />
    </div>
  )
}
