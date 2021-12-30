/**
 * Custom Document
 * https://nextjs.org/docs/advanced-features/custom-document
 * 
 * 
 * Next.js Font Optimization
 * https://nextjs.org/docs/basic-features/font-optimization
 * 
 */
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="images/favicon.png" />
          <link rel="apple-touch-icon" href="images/apple-touch-icon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" /> 
          <link rel="preconnect" href="https://fonts.gstatic.com" /> 
          <link href="https://fonts.googleapis.com/css2?family=Corben:wght@400;700&amp;family=Spartan:wght@300;400&amp;display=swap" rel="stylesheet" />
        </Head>

        <body className="bg-desert">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument