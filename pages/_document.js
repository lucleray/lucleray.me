import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components/macro'

const darkModeCode = `(function() {

  function changeFavicon(v) {
    var src = 'assets/favicon-' + (v ? 'dark' : 'light');
    try {
      document.getElementById('favicon-32').href = src + '-32x32.png';
      document.getElementById('favicon-16').href = src + '-16x16.png';
    } catch (err) {}
  }

  function setDarkMode(v) {
    window.__darkMode = v
    localStorage.setItem('dark', v ? 'yes' : 'no');
    document.body.className = v ? 'dark' : 'light';
    changeFavicon(v);
  }

  var q = window.matchMedia('(prefers-color-scheme: dark)');
  q.addListener(function(e) { setDarkMode(e.matches); });

  var darkLS
  try { darkLS = localStorage.getItem('dark'); }
  catch (err) { }
  setDarkMode(darkLS ? darkLS === 'yes' : q.matches);

  window.__toggleDarkMode = function() {
    setDarkMode(!window.__darkMode);
  }

})();`

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link
            rel="preload"
            href="/assets/font/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
            key="viewport"
          />
          <meta
            name="description"
            content="Software engineer with a passion for machine learning"
            key="description"
          />
          <link
            id="favicon-32"
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="assets/favicon-light-32x32.png"
          />
          <link
            id="favicon-16"
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="assets/favicon-light-16x16.png"
          />
          <meta
            property="og:image"
            content="https://lucleray.me/assets/cover.png"
          />
          <meta
            property="og:image:secure_url"
            content="https://lucleray.me/assets/cover.png"
          />
          {this.props.styleTags}
          {process.env.NODE_ENV === 'production' && (
            <script
              async
              defer
              data-domain="luc.im"
              src="https://plausible.io/js/plausible.js"
            ></script>
          )}
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: darkModeCode
            }}
          />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
