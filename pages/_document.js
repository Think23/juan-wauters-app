import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta content="summary" name="twitter:card" />
          <meta property="og:url" content="http://juanwauters.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Juan Wauters" />
          <meta
            property="og:description"
            content="Discover the world of Latin American songwriter Juan Wauters"
          />
          <meta
            name="twitter:title"
            content="Discover the world of Latin American songwriter Juan Wauters"
          />
          <meta
            property="og:image"
            content="http://juanwauters.com/static/images/juan-wauters-website.png"
          />
          <meta
            name="twitter:image"
            content="http://juanwauters.com/static/images/juan-wauters-website.png"
          />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-129132669-1"
          ></script>
          <script src="/static/ga.js"></script>
          <script src="//code.jquery.com/jquery-latest.min.js"></script>
          <script src="/static/fitvids.js"></script>

          <link
            href="https://fonts.googleapis.com/css2?family=Rock+Salt&family=Walter+Turncoat&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          {/* <body
          style={{
            backgroundImage: `url('../static/images/simple-old-paper-1-light.jpg')`,
          }}
        > */}
          <Main />
          <NextScript />
          <div id="overlays" />
          <script src="/static/scrollingelement.js"></script>
        </body>
      </Html>
    );
  }
}
