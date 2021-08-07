import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductFeed from '../components/ProductFeed';

export default function Home({ products }) {
	return (
		<div className="bg-gray-100">
			<Head>
				<title>Amazon 2.0</title>
			</Head>
			{/* Header */}
			<Header />
			<main className="max-w-screen-2xl mx-auto">
				{/* Banner */}
				<Banner />
				{/* Product Feed */}
				<ProductFeed products={products} />
			</main>
		</div>
	);
}

// this function informs the Next this page is a server sided page
// the advantage of doing this here compared to the front end is
// the front end dont have to show empty page until the data is fetched
export async function getServerSideProps(context) {
	const products = await fetch('https://fakestoreapi.com/products').then(
		(res) => res.json()
	);

	return {
		props: {
			products: products,
		},
	};
}

// GET >>> https://fakestoreapi.com/products
