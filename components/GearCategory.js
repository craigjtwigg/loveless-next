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
      ? 'guitars & basses'
      : props.category === 'pedal'
      ? 'pedals'
      : props.category === 'amp'
      ? 'amps & cabs'
      : props.category === 'microphone'
      ? 'microphones'
      : props.category === 'outboard'
      ? 'outboard & i/o' :
      props.category;
  return (
    <div id={props.category} className={props.alt ? styles.alt : styles.container}>

      <h2 className={styles.title}>{categoryTitle}</h2>
      {categoryData.map((item, idx) => (
       <GearItem key={idx} item={item}/>
      ))}
    </div>
  );
}
