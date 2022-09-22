import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components/index";

import { config } from "../lib/config";

const Home = ({ products, bannerData }) => {
	return (
		<div>
			<HeroBanner heroBanner={bannerData.length && bannerData[0]} />

			<div className="products-heading">
				<h2> Best Selling Products </h2> <p> Get Your Drip Here </p>
			</div>
			<div className="products-container">
				{products?.map((product) => (
					<Product key={product._id} product={product} />
				))}
			</div>
			<FooterBanner footerBanner={bannerData && bannerData[0]} />
		</div>
	);
};

export const getServerSideProps = async () => {
	const query = '*[_type == "product"]';
	const products = await config.fetch(query);
	const bannerQuery = '*[_type == "banner"]';
	const bannerData = await config.fetch(bannerQuery);
	return {
		props: { products, bannerData },
	};
};

export default Home;
