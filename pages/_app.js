import Head from "next/head";
import "react-multi-carousel/lib/styles.css";
import 'styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
  	<div>
  		<Head>
	    	<title>My School</title>
	      <meta name="description" content="My School 8" />
	    </Head>
	    <div className="selection:bg-fuchsia-300 text-white">
  			<Component {...pageProps} />
  		</div>
  	</div>
  );
}

export default MyApp;
