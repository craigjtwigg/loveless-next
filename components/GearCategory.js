import styles from '../styles/GearCategory.module.css';
import { gearData } from '../data';
import GearItem from './GearItem';

export default function GearCategory(props) {
  const categoryData = props.gear.filter(
    (item) => item.attributes.category === props.category
  );
 
  console.log(categoryData);

  const categoryTitle =
    props.category === 'guitar'
      ? 'Guitars & Basses'
      : props.category === 'pedal'
      ? 'Pedals'
      : props.category === 'amp'
      ? 'Amps & Cabs'
      : props.category === 'microphone'
      ? 'Microphones'
      : props.category === 'outboard'
      ? 'Outboard & I/O'
      : props.category === 'monitoring'
      ? 'Monitoring'
      : props.category === 'drum'
      ? 'Drums & Cymbals' :
      props.category;
  return (
    <div id={props.category} className={styles.container}>

      <h2 className={styles.title}>{categoryTitle}</h2>
      <div className={styles.items}>
      {categoryData.map((item, idx) => (
       <GearItem key={idx} item={item}/>
      ))}
      </div>
    </div>
  );
}
