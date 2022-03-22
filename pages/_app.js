import Head from "next/head";
import { Header, Footer } from "components";
import "react-multi-carousel/lib/styles.css";
import "aos/dist/aos.css";
import 'styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
  	<div>
  		<Head>
	    	<title>My School</title>
	      <meta name="description" content="My School 8" />
	    </Head>
	    <main className="selection:bg-fuchsia-300 text-white overflow-x-hidden">
      	<Header />
  			<Component {...pageProps} />
  			<Footer />
  		</main>
  	</div>
  );
}

export default MyApp;
