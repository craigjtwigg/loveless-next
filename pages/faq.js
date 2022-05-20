import styles from '../styles/Faq.module.css';
import NavBar from '../components/NavBar';
import { useInView } from 'react-intersection-observer';
import ContactForm from '../components/ContactForm';
import FaqCard from '../components/FaqCard';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function Faq({ seo, faqs }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <>
    <SEO seo={seo}/>
    <div className={styles.container}>
      <NavBar inView={inView} />
      <h1 className={styles.title}>FAQ</h1>
      <div className={styles.faqContainer}>
        {faqs.map((faq, indx) => (
          <FaqCard key={indx} question={faq.attributes.question} answer={faq.attributes.answer} />
        ))}
      </div>

      <ContactForm faq={true} />
  
    </div>
        <Footer />
        </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://salty-plateau-21551.herokuapp.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query FAQS {
        testimonialspage {
    data {
      attributes {
         seo {
          metaTitle
          metaDescription
          metaImage {
            data {
              attributes {
                width
                height
                url
              }
            }
          }
          metaSocial {
            socialNetwork
            title
            description
            image {
              data {
                attributes {
                  width
                  height
                  url
                }
              }
            }
          }
        }
        header
        subheader
      }
    }
  }      
  faqs {
    data {
      attributes {
        question
        answer
      }
    }
  }
}`,
    }),
  });

  const json = await res.json();

  return {
    props: {
      faqs: json.data.faqs.data,
      seo: json.data.testimonialspage.data.attributes.seo[0],
    },
    revalidate: 1,
  };
}
