import React from "react";
import { Link } from "react-scroll";

export default function Projects({ theme }) {
	return (
		<section id="Projects">
			<div
				className={[
					"min-h-screen",
					theme ? "bg-[#303336]" : "bg-[#E6E6E6]",
				].join(" ")}
			>
				<div className="h-full w-full lg:px-60 lg:pb-44 lg:pt-32 py-16 px-10 text-center">
					<h1
						className={[
							"text-5xl font-bold",
							theme ? "text-white" : "text-[#303336]",
						].join(" ")}
					>
						Projects
					</h1>
					<div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-16">
						{/* Start one card of the object  */}
						<div className="flex items-center justify-center my-4 relative">
							<div
								className={[
									"card overflow-hidden rounded-2xl w-64 h-80 transition-all hover:scale-105",
									theme ? "bg-white" : "bg-white",
								].join(" ")}
							>
								<div className="card-header h-36 overflow-hidden bg-white ">
									<a
										href="https://github.com/kevinss09/personal-portofolio"
										target="_blank"
										className="no-underline"
									>
										<img
											src="/images/personal-website.png"
											alt="my web"
											className="w-full block opacity-100"
										/>
									</a>
								</div>
								<div className="card-body relative h-60 p-5 hover:h-[280px]">
									<h2 className="card-title m-0 pb-3 text-xl font-bold uppercase text-black">
										<a
											href="https://github.com/kevinss09/personal-portofolio"
											target="_blank"
										>
											Portofolio
										</a>
									</h2>
									<div className="card-subtitle m-0 text-lg pb-3">
										Website created using React and Tailwind css
									</div>
									<p className="card-description absolute left-5 right-5 m-0 p-0 text-[#666C74] opacity-0 bottom-10">
										This a my personal portofolio website that contains my
										Contact information, Resume, and Projects.
									</p>
								</div>
							</div>
						</div>
						{/* End of one card  */}

						{/* Start one card of the object  */}
						<div className="flex items-center justify-center my-4 relative">
							<div
								className={[
									"card overflow-hidden rounded-2xl w-64 h-80 transition-all hover:scale-105",
									theme ? "bg-white" : "bg-white",
								].join(" ")}
							>
								<div className="card-header h-36 overflow-hidden bg-white ">
									<a
										href="https://github.com/kevinss09/weather-web"
										className="no-underline"
										target="_blank"
									>
										<img
											src="/images/weather-web.png"
											alt="my web"
											className="w-full block opacity-100"
										/>
									</a>
								</div>
								<div className="card-body relative h-60 p-5 hover:h-[280px]">
									<h2 className="card-title m-0 pb-3 text-black text-xl font-bold uppercase">
										<a
											href="https://github.com/kevinss09/weather-web"
											target="_blank"
										>
											Weather website
										</a>
									</h2>
									<div className="card-subtitle m-0 text-lg pb-3">
										Website created using React, Tailwind and weatherAPI
									</div>
									<p className="card-description absolute left-5 right-5 m-0 p-0 text-[#666C74] opacity-0 bottom-10">
										Check the weather of any city in the world for the next
										seven days.
									</p>
								</div>
							</div>
						</div>
						{/* End of one card  */}

						{/* Start one card of the object  */}
						<div className="flex items-center justify-center my-4 relative">
							<div
								className={[
									"card overflow-hidden rounded-2xl w-64 h-80 transition-all hover:scale-105",
									theme ? "bg-white" : "bg-white",
								].join(" ")}
							>
								<div className="card-header h-36 overflow-hidden bg-white ">
									<a
										href="https://github.com/kevinss09/todo-website"
										className="no-underline"
										target="_blank"
									>
										<img
											src="/images/todolist-web.png"
											alt="my web"
											className="w-full block opacity-100"
										/>
									</a>
								</div>
								<div className="card-body relative h-60 p-5 hover:h-[280px]">
									<h2 className="card-title m-0 pb-3 text-black text-xl font-bold uppercase">
										<a
											href="https://github.com/kevinss09/todo-website"
											target="_blank"
										>
											Todo website
										</a>
									</h2>
									<div className="card-subtitle m-0 text-lg pb-3">
										Website created using React, Tailwind, moment, and mongoDB
									</div>
									<p className="card-description absolute left-5 right-5 m-0 p-0 text-[#666C74] opacity-0 bottom-10">
										It's a simple todo website that can be easily use by
										everyone from all ages.
									</p>
								</div>
							</div>
						</div>
						{/* End of one card  */}

						{/* Start one card of the object  */}
						<div className="flex items-center justify-center my-4 relative">
							<div
								className={[
									"card overflow-hidden rounded-2xl w-64 h-80 transition-all hover:scale-105",
									theme ? "bg-white" : "bg-white",
								].join(" ")}
							>
								<div className="card-header h-36 overflow-hidden bg-white ">
									<a
										href="https://github.com/kevinss09/Nike-shop-"
										className="no-underline"
										target="_blank"
									>
										<img
											src="/images/nike-web.png"
											alt="myNike"
											className="w-full block opacity-100"
										/>
									</a>
								</div>
								<div className="card-body relative h-60 p-5 hover:h-[280px]">
									<h2 className="card-title m-0 pb-3 text-black text-xl font-bold uppercase">
										<a
											href="https://github.com/kevinss09/daily-blog"
											target="_blank"
										>
											Nike Website
										</a>
									</h2>
									<div className="card-subtitle m-0 text-lg pb-3">
										Nike replicate website created using MERN Stack + Tailwind
									</div>
									<p className="card-description absolute left-5 right-5 m-0 p-0 text-[#666C74] opacity-0 bottom-10">
										This a Nike replicate website that basically useful buy nike
										products in online store
									</p>
								</div>
							</div>
						</div>
						{/* End of one card  */}

						{/* Start one card of the object  */}
						<div className="flex items-center justify-center my-4 relative">
							<div
								className={[
									"card overflow-hidden rounded-2xl w-64 h-80 transition-all hover:scale-105",
									theme ? "bg-white" : "bg-white",
								].join(" ")}
							>
								<div className="card-header h-36 overflow-hidden bg-white ">
									<a
										href="https://github.com/kevinss09/food-commerce-web"
										className="no-underline"
										target="_blank"
									>
										<img
											src="/images/e-commerce-web.png"
											alt="my web"
											className="w-full block opacity-100"
										/>
									</a>
								</div>
								<div className="card-body relative h-60 p-5 hover:h-[280px]">
									<h2 className="card-title m-0 pb-3 text-black text-xl font-bold uppercase">
										<a
											href="https://github.com/kevinss09/food-commerce-web"
											target="_blank"
										>
											e commerce Web
										</a>
									</h2>
									<div className="card-subtitle m-0 text-lg pb-3">
										Website created using React, Redux, Tailwind, and API
									</div>
									<p className="card-description absolute left-5 right-5 m-0 p-0 text-[#666C74] opacity-0 bottom-10">
										It's a e commerce website that sell various furniture for
										household needs.
									</p>
								</div>
							</div>
						</div>
						{/* End of one card  */}

						{/* Start one card of the object  */}
						<div className="flex items-center justify-center my-4 relative">
							<div
								className={[
									"card overflow-hidden rounded-2xl w-64 h-80 transition-all hover:scale-105",
									theme ? "bg-white" : "bg-white",
								].join(" ")}
							>
								<div className="card-header h-36 overflow-hidden bg-white ">
									<a
										href="https://github.com/kevinss09/social-media-web"
										className="no-underline"
										target="_blank"
									>
										<img
											src="/images/social-media-web.png"
											alt="my web"
											className="w-full block opacity-100"
										/>
									</a>
								</div>
								<div className="card-body relative h-60 p-5 hover:h-[280px]">
									<h2 className="card-title m-0 pb-3 text-black text-xl font-bold uppercase">
										<a
											href="https://github.com/kevinss09/social-media-web"
											target="_blank"
										>
											Social media Web
										</a>
									</h2>
									<div className="card-subtitle m-0 text-lg pb-3">
										Website created using MERN stack, bootstrap, and redux.
									</div>
									<p className="card-description absolute left-5 right-5 m-0 p-0 text-[#666C74] opacity-0 bottom-10">
										It's a e commerce website that sell various furniture for
										household needs. It's a
									</p>
								</div>
							</div>
						</div>
						{/* End of one card  */}
						{/* Start one card of the object  */}
						<div className="flex items-center justify-center my-4 relative">
							<div
								className={[
									"card overflow-hidden rounded-2xl w-64 h-80 transition-all hover:scale-105",
									theme ? "bg-white" : "bg-white",
								].join(" ")}
							>
								<div className="card-header h-36 overflow-hidden bg-white ">
									<a
										href="https://github.com/kevinss09/movie-web"
										className="no-underline"
										target="_blank"
									>
										<img
											src="/images/movie-web.png"
											alt="my web"
											className="w-full block opacity-100"
										/>
									</a>
								</div>
								<div className="card-body relative h-60 p-5 hover:h-[280px]">
									<h2 className="card-title m-0 pb-3 text-black text-xl font-bold uppercase">
										<a
											href="https://github.com/kevinss09/movie-web"
											target="_blank"
										>
											Movie Web
										</a>
									</h2>
									<div className="card-subtitle m-0 text-lg pb-3">
										Website created using Movie Api, React.js, and Tailwind.css
									</div>
									<p className="card-description absolute left-5 right-5 m-0 p-0 text-[#666C74] opacity-0 bottom-10">
										It's a website that give you information about the rating of
										the movie or tv show
									</p>
								</div>
							</div>
						</div>
						{/* End of one card  */}
					</div>
				</div>
			</div>
		</section>
	);
}
