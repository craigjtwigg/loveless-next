import styles from '../styles/FaqCard.module.css';
import { useState } from 'react';
import Button from './Button';
import ReactMarkdown from 'react-markdown'

export default function FaqCard(props) {
  const [isActive, setIsActive] = useState(false)

  const toggleActive = () => {
    setIsActive(!isActive)
    console.log('hello')
  }

    const MarkdownComponents = {
  p: (paragraph) => {
  const { node } = paragraph

  if (node.children[0].tagName === "img") {
    const image = node.children[0]
    const metastring = image.properties.alt
    const alt = metastring?.replace(/ *\{[^)]*\} */g, "")
    const metaWidth = metastring.match(/{([^}]+)x/)
    const metaHeight = metastring.match(/x([^}]+)}/)
    // const width = metaWidth ? metaWidth[1] : "768"
    // const height = metaHeight ? metaHeight[1] : "432"
    const isPriority = metastring?.toLowerCase().match('{priority}')
    const hasCaption = metastring?.toLowerCase().includes('{caption:')
    const caption = metastring?.match(/{caption: (.*?)}/)?.pop()

    return (
      <div className={styles.postImgWrapper}>
        <Image
        layout='fill'
          src={image.properties.src}
	        // width={mattImage.width}
	        // height={mattImage.height}
	        className={styles.postImg}
	        alt={alt}
	        priority={isPriority}
	      />
	        {hasCaption ? <div className="caption" aria-label={caption}>{caption}</div> : null}
      </div>
    )
  }
  return <p>{paragraph.children}</p>
},


}
  return (
    <div className={styles.container}>
      <div className={styles.questionWrapper}>
        <div className={styles.question}>
           {props.question}
        </div>
        <div className={styles.buttonWrapper} onClick={()=> toggleActive()}>
        <Button  small={true} text={!isActive ? 'see answer' : 'hide answer'}  />
        </div>
        </div>
      <div className={isActive ? styles.answer : styles.hidden}><ReactMarkdown children={props.answer} 
          components={MarkdownComponents}/></div>
    </div>
  );
}
