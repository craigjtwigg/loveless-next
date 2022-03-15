import styles from '../styles/GearCategory.module.css';
import { gearData } from '../data';
import GearItem from './GearItem';

export default function GearCategory(props) {
  const categoryData = gearData.filter(
    (item) => item.category === props.category
  );
  console.log(categoryData);

  const categoryTitle =
    props.category === 'guitar'
      ? 'guitars & basses'
      : props.category === 'pedal'
      ? 'pedals'
      : props.category === 'amp'
      ? 'amps & cabs'
      : props.category;
  return (
    <div className={styles.container}>

      <h2>{categoryTitle}</h2>
      {categoryData.map((item, idx) => (
       <GearItem key={idx} item={item}/>
      ))}
    </div>
  );
}
