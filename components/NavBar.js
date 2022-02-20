import styles from '../styles/NavBar.module.css'
import { useState, useEffect } from 'react'
import Nav from './Nav'

export default function NavBar({inView}) {
//      const [show, setShow] = useState(false)
//   const controlNavbar = () => {
//       if (window.scrollY > 650 ) {
//           setShow(true)
//       }else{
//         setShow(false)
//       }
//       console.log('hello')
//   }

//   useEffect(() => {
//       window.addEventListener('scroll', controlNavbar)
//       return () => {
//           window.removeEventListener('scroll', controlNavbar)
//       }
//   }, [])

  const active = styles.active
  const hidden = styles.hidden

  return (
    <div className={!inView ? `${active}` : `${hidden}`}><div className={styles.logo}>loveless studio</div><Nav /></div>
  )
}
