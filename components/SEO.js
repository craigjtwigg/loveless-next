import { NextSeo } from "next-seo"

export default function SEO({seo}) {
  return (
   <>
   <NextSeo 
      title={seo.metaTitle}
      description={seo.metaDescription}
      openGraph={{
        title: `${seo.metaSocial[0].title}`,
        description: `${seo.metaSocial[0].description}`,
        images: [
          {
            url: `${seo.metaSocial[0].image.data.attributes.url}`,
            width: `${seo.metaSocial[0].image.data.attributes.width}`,
            height: `${seo.metaSocial[0].image.data.attributes.height}`,
            alt: 'Loveless Studio Gear listing',
            type: 'image/jpeg',
          },
        ],
        site_name: 'Loveless Studio',
      }}
    />
   </>
  )
}
