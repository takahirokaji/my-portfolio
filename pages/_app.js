import "modern-css-reset/dist/reset.min.css";
import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/layouts/layout.js";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>kaji&apos;s portfolio</title>
        <meta name="description" content="portfolio made by kaji takahiro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
