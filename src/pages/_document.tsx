import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='scroll-smooth'>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;700&family=Oxygen:wght@400;700&family=Rosario&display=swap" rel="stylesheet" />
      </Head>
      <body className=''>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
