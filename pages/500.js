import Head from "next/head";

export default function NotFound() {
	return (
		<>
			<Head>
				<title>Internal Server Error</title>
			</Head>
			<div className="h-40 text-white flex justify-center items-center flex-col min-h-[70vh]">
				<h2 className="text-lg sm:text-3xl">Internal Server Error &#128557;</h2>
			</div>
		</>
	);
}