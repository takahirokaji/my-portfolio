import "modern-css-reset/dist/reset.min.css";
import "../styles/globals.scss";
import Head from "next/head";
import Layout from "../components/layouts/layout.js";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>kaji&apos;s portfolio</title>
        <meta name="description" content="Kaji's portfolio" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#4e4e4e" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
