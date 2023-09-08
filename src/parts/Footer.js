import React from "react";
import { BsGithub, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";
export default function Footer({ theme }) {
	return (
		<footer id="footer">
			{/* #ebeeee */}
			<div className={[theme ? "bg-[#1D1E20]" : "bg-[#F5F5F5]"]}>
				<div className="lg:px-20 lg:pt-10 lg:pb-6 py-10 flex flex-col items-center justify-center">
					<div className="social-media">
						<a
							href="https://github.com/kevinss09"
							className="inline-block w-10 h-10 mx-6"
							target="_new"
						>
							<BsGithub
								className={[
									"w-full h-full object-cover",
									theme ? "text-[#C4C4C5]" : "text-[#1D1E20]",
								].join(" ")}
							/>
						</a>
						<a
							href="https://www.linkedin.com/in/kevin-sugeng-07bb18237/"
							className="inline-block w-10 h-10 mx-6"
							target="_new"
						>
							<BsLinkedin
								className={[
									"w-full h-full object-cover",
									theme ? "text-[#C4C4C5]" : "text-[#1D1E20]",
								].join(" ")}
							/>
						</a>
						<a
							href="https://www.instagram.com/codaholic.kevin/"
							className="inline-block w-10 h-10 mx-6"
							target="_new"
						>
							<BsInstagram
								className={[
									"w-full h-full object-cover",
									theme ? "text-[#C4C4C5]" : "text-[#1D1E20]",
								].join(" ")}
							/>
						</a>
						<a
							href="https://www.facebook.com/kevin.sugeng.1"
							className="inline-block w-10 h-10 mx-6"
							target="_new"
						>
							<BsFacebook
								className={[
									"w-full h-full object-cover",
									theme ? "text-[#C4C4C5]" : "text-[#1D1E20]",
								].join(" ")}
							/>
						</a>
					</div>
					<div className="copy-right mt-8">
						<p className={[theme ? "text-[#C4C4C5]" : "text-[#1D1E20]"]}>
							© Copyright 2022 Kevin Sugeng
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
