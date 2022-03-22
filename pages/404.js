import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
	return (
		<>
			<Head>
				<title>Page Not Found</title>
			</Head>
			<div className="h-40 text-white flex justify-center items-center flex-col min-h-[70vh]">
				<h2 className="text-lg sm:text-3xl">Could not find this page &#128557;</h2>
				<Link href="/">
					<a className="mt-4 text-sm sm:text-xl text-blue-100 underline hover:text-blue-300 transition duration-50">Back to Home page</a>
				</Link>
			</div>
		</>
	);
}