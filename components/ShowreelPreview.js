import styles from '../styles/ShowreelPreview.module.css';
import LabelsRadio from './LabelsRadio';

export default function Showreel({labels, labellogos}) {
  return (
    <div className={styles.sectionWrapper}>
      <section id="showreel" className={styles.section}>
        <h2 className={styles.sectionTitle}>
          {labels.header}
        </h2>
        <p className={styles.quote}>
          {labels.text}
        </p>

        <LabelsRadio labellogos={labellogos}/>
      </section>
    </div>
  );
}
