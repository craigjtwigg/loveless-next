import Image from 'next/image';
import styles from '../styles/LabelsRadio.module.css';
import RockShow from '../public/assets/labelsradio/rockshow.svg';
import Introducing from '../public/assets/labelsradio/introducing.svg';
import RadioX from '../public/assets/labelsradio/radiox.svg';
import Sony from '../public/assets/labelsradio/sony.svg';
import SocietyOfLosers from '../public/assets/labelsradio/societyoflosers.svg';
import MusicForNations from '../public/assets/labelsradio/musicfornations.svg';
import Scylla from '../public/assets/labelsradio/scylla.svg'

export default function LabelsRadio({labellogos}) {
  return (
    <div className={styles.container}>

    {labellogos.map(logo => (
          <div className={styles.logoWrapper}>
        <Image
          className={styles.logo}
          layout="fill"
          src={logo.attributes.url}
          alt={logo.attributes.alternativeText}
        />
      </div>
    ))}



      {/* <div className={styles.logoWrapper}>
        <Image
          className={styles.logo}
          layout="fill"
          src={RockShow}
          alt="Loveless Studio productions have featured on BBC Radio One Rock Show"
        />
      </div>

      <div className={styles.logoWrapper}>
        <Image
          className={styles.logo}
          layout="fill"
          src={Introducing}
          alt="Loveless Studio productions have featured on BBC Introducing"
        />
      </div>


      <div className={styles.logoWrapper}>
        <Image
          className={`${styles.logo} ${styles.sol}`}
          layout="fill"
          src={SocietyOfLosers}
          alt="Loveless Studio productions have been published by Society Of Losers Records"
        />
      </div>



            <div className={styles.logoWrapper}>
        <Image
          className={styles.logo}
          layout="fill"
          src={Sony}
          alt="Loveless Studio productions have been published by Sony Music"
        />
      </div>

          <div className={styles.logoWrapper}>
        <Image
          className={styles.logo}
          layout="fill"
          src={Scylla}
          alt="Loveless Studio productions have been published by Scylla Records"
        />
      </div>

      <div className={styles.logoWrapper}>
        <Image
          className={styles.logo}
          layout="fill"
          src={MusicForNations}
          alt="Loveless Studio productions have been published by Music For Nations"
        />
      </div>


            <div className={styles.logoWrapper}>
        <Image
          className={styles.logo}
          layout="fill"
          src={RadioX}
          alt="Loveless Studio productions have featured on Radio X"
        />
      </div> */}


    </div>
  );
}
