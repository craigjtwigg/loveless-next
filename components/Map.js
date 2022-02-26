import styles from '../styles/Map.module.css';

export default function Map() {
  return (
    <div className={styles.map}>
        <div className={styles.where}>
            <h2 className={styles.h2}>Where is Loveless Studio?</h2>
            <p className={styles.text}>On Greenfield Road in loveley Colne, Lancashire! BB8 9PE</p>
        </div>
        <div className={styles.mapWrapper}>
           <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9413.685473630096!2d-2.1836078!3d53.8531548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x32e47fc722de7ffc!2sSuff%20Studio!5e0!3m2!1sen!2suk!4v1644329566079!5m2!1sen!2suk"
        width="600"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen='true'
        aria-hidden="false"
        tabIndex="0"
        loading="lazy"
      ></iframe>
        </div>
     
    </div>
  );
}
