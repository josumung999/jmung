import Theme from '../styles/theme';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="Joshua Munganga's Portfolio - Full Stack Software Engineer, Junior Web Developer, MERN Stack Developer" />
        <title>Joshua Munganga - Full Stack Software Engineer</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 