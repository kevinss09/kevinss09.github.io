import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Header({ theme, setTheme }) {
	const [toggle, setToggle] = useState(false);

	return (
		<nav
			className={[
				"p-3 shadow lg:flex lg:items-center lg:justify-between fixed top-0 left-0 w-screen z-50",
				theme ? "bg-white" : "bg-[#1D1E20]",
			].join(" ")}
		>
			<div className="left-side flex items-center justify-between">
				<Link
					to="Home"
					className="cursor-pointer flex flex-row "
					spy={true}
					smooth={true}
					offset={0}
					duration={600}
				>
					<span className="lg:mx-2">
						<img
							src="/images/closeImage.jpg"
							className="inline h-8 w-8 lg:mr-2 mr-20 lg:ml-3 ml-1 rounded-full"
							alt="People emoji"
						/>
					</span>
					<h5
						className={[
							"text-2xl lg:mx-2 font-[Poppins]",
							theme ? "text-black" : "text-[#DADADB]",
						].join(" ")}
					>
						Kevin Sugeng
					</h5>
				</Link>
				<span
					className={[
						"text-2xl pt-1 ml-1 inline-block cursor-pointer",
						theme ? " " : "text-white",
					].join(" ")}
					onClick={() => setTheme((prev) => !prev)}
				>
					<ion-icon
						name={theme ? "moon-outline" : "sunny-outline"}
						className="duration-300"
					></ion-icon>
				</span>

				<span
					className={[
						"text-3xl right-0 pt-1 lg:hidden block cursor-pointer",
						theme ? "text-black" : "text-white",
					].join(" ")}
					onClick={() => setToggle((prev) => !prev)}
				>
					<ion-icon
						name={toggle ? "close" : "menu"}
						className="duration-300"
					></ion-icon>
				</span>
			</div>

			<ul
				className={[
					"right-side lg:flex lg:items-center z-[-1] lg:z-auto lg:static absolute w-full left-0 lg:w-auto lg:py-0 py-4 lg:pl-0 px-2 lg:mr-12 lg:opacity-100 opacity-0 top-[-400px] text-center",
					toggle ? "opacity-100 top-[0px]" : "",
					theme ? "bg-white" : "bg-[#1D1E20]",
				].join(" ")}
			>
				<li
					className={[
						"nav-item mx-4 my-4 py-2 lg:my-0 lg:border-0 border border-t-transparent border-l-transparent border-r-transparent",
						theme ? "border-b-black" : "border-b-white",
					].join(" ")}
				>
					<Link
						to="Home"
						className={[
							"element text-xl font-[Poppins] font-medium duration-300 relative cursor-pointer",
							theme
								? "text-[#1D1E20] hover:text-black themeBlack"
								: "text-[#DADADB] hover:text-white themeWhite",
						].join(" ")}
						spy={true}
						smooth={true}
						offset={0}
						duration={600}
						onClick={() => setToggle((prev) => !prev)}
					>
						Home
					</Link>
				</li>
				<li
					className={[
						"nav-item mx-4 my-4 pb-2 lg:pt-2 lg:my-0 lg:border-0 border border-t-transparent border-l-transparent border-r-transparent",
						theme ? "border-b-black" : "border-b-white",
					].join(" ")}
				>
					<Link
						to="About"
						className={[
							"element text-xl font-[Poppins] font-medium duration-300 relative cursor-pointer",
							theme
								? "text-[#1D1E20] hover:text-black themeBlack"
								: "text-[#DADADB] hover:text-white themeWhite",
						].join(" ")}
						spy={true}
						smooth={true}
						offset={0}
						duration={600}
						onClick={() => setToggle((prev) => !prev)}
					>
						About
					</Link>
				</li>
				<li
					className={[
						"nav-item mx-4 mt-4 mb-8 pb-2 lg:pt-2 lg:my-0 lg:border-0 border border-t-transparent border-l-transparent border-r-transparent cursor-pointer",
						theme ? "border-b-black" : "border-b-white",
					].join(" ")}
				>
					<Link
						to="Resume"
						spy={true}
						smooth={true}
						offset={0}
						duration={600}
						className={[
							" element text-xl font-[Poppins] font-medium duration-300 relative",
							theme
								? "text-[#1D1E20] hover:text-black themeBlack"
								: "text-[#DADADB] hover:text-white themeWhite",
						].join(" ")}
						onClick={() => setToggle((prev) => !prev)}
					>
						Resume
					</Link>
				</li>

				<Link
					to="Contact"
					spy={true}
					smooth={true}
					offset={-50}
					duration={600}
					className={[
						"bg-transparent border font-[Poppins] px-6 py-1 duration-300 mx-4 my-4 font-heading rounded-sm text-xl lg:mt-0 lg:mb-0 cursor-pointer",
						theme
							? "text-[#1D1E20] border-[#1D1E20] hover:border-[#60666c] hover:bg-[#60666c] hover:text-white"
							: "text-[#DADADB] border-[#DADADB] hover:border-white hover:bg-[#DADADB] hover:text-black",
					].join(" ")}
					onClick={() => setToggle((prev) => !prev)}
				>
					Contact me
				</Link>
			</ul>
		</nav>
	);
}
