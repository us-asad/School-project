import Head from "next/head";
import 'styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
  	<>
  		<Head>
	    	<title>My School</title>
	      <meta name="description" content="My School 8" />
	    </Head>
  		<Component {...pageProps} />
  	</>
  );
}

export default MyApp;
