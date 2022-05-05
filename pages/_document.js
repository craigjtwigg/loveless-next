import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
       <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;500&Fira+Mono:wght@400;700&family=Fira+Sans+Condensed:wght@300;900&display=swap"
            rel="stylesheet"
          />
          </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}