import React from "react";
import { FaReact } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import { Link } from "react-scroll";

export default function Home({ theme }) {
	return (
		<section id="Home">
			<div
				className={[
					"min-h-screen lg:h-screen",
					theme ? "bg-[#1D1E20]" : "bg-[#F5F5F5]",
				].join(" ")}
			>
				<div className="h-full w-full lg:px-32 lg:pt-32 lg:pb-0 flex lg:flex-row flex-col-reverse">
					<div className="left-side lg:w-1/2 h-full">
						<div className="py-20 px-11 lg:pl-32 flex flex-col lg:mt-9 my-6 text-center lg:text-start">
							<h3
								className={[
									"text-3xl lg:text-5xl",
									theme ? "text-[#DADADB]" : "text-[#1E1E1E]",
								].join(" ")}
							>
								Hello,
							</h3>
							<h1
								className={[
									"text-5xl lg:text-7xl font-bold",
									theme ? "text-white" : "text-[#1E1E1E]",
								].join(" ")}
							>
								I'm Kevin
							</h1>
							<h5
								className={[
									" text-xl lg:text-xl lg:mt-1 mt-2",
									theme ? "text-[#DADADB]" : "text-[#1E1E1E] opacity-60",
								].join(" ")}
							>
								Fullstack Website Developer
							</h5>
							<p
								className={[
									"text-sm mt-3",
									,
									theme ? "text-[#DADADB]" : "text-[#1E1E1E]",
								].join(" ")}
							>
								In the past year, I've been learning to be a fullstack website
								developer. Now, I'm excited to use my skills to help different
								companies and start-ups succeed by creating great websites and
								online systems for them.
							</p>
							<div className="button mt-6 flex sm:flex-col md:flex-row items-center lg:justify-start justify-center">
								<Link
									to="Projects"
									spy={true}
									smooth={true}
									offset={0}
									duration={850}
								>
									<button
										type="button"
										className={[
											"btn border flex flex-row items-center justify-center  cursor-pointer py-2 px-4 rounded leading-6 font-normal text-center whitespace-nowrap transition",
											theme
												? "border-white hover:bg-white hover:text-gray-700 text-white"
												: "border-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-[#F5F5F5] text-[#1E1E1E]",
										].join(" ")}
									>
										<FaReact className="mr-2" />
										Projects
									</button>
								</Link>
								<Link
									to="About"
									spy={true}
									smooth={true}
									offset={0}
									duration={600}
								>
									<button
										type="button"
										className={[
											"btn-right flex flex-row items-center justify-center cursor-pointer py-2 px-4 rounded leading-6 font-normal text-center whitespace-nowrap ml-6 border transition",
											theme
												? "border-white hover:bg-white hover:text-gray-700 text-white"
												: "border-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-[#F5F5F5] text-[#1E1E1E]",
										].join(" ")}
									>
										<FcBusinessman className="mr-2 w-6 h-6" />
										About Me
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="right-side lg:w-1/2 h-full">
						<img
							src="/images/Kevin.png"
							alt="picture of me"
							className="w-full h-full  object-contain"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
