import React from "react";
import Link from "next/link";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
	return (
		<div className="footer-container">
			<p>2022@V1SHAL</p>
			<p className="icons">
				<Link href="https://www.instagram.com/v1shalm/">
					<AiFillInstagram />
				</Link>
				<Link href="https://twitter.com/v1shalm">
					<AiOutlineTwitter />
				</Link>
			</p>
		</div>
	);
};

export default Footer;
