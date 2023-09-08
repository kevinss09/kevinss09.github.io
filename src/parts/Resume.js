import React from "react";

export default function Resume({ theme }) {
	return (
		<section id="Resume">
			<div
				className={[
					"min-h-screen",
					theme ? "bg-[#1D1E20]" : "bg-[#F5F5F5]",
				].join(" ")}
			>
				<div className="h-full w-full lg:px-60 lg:py-44 pb-16 pt-32 px-10 lg:text-start text-center">
					<h1
						className={[
							"text-5xl font-bold",
							theme ? "text-white" : "text-[#1D1E20]",
						].join(" ")}
					>
						Resume
					</h1>
					<div className="flex flex-col w-full h-full mt-12 lg:pr-7 lg:text-start text-center">
						<div
							id="Education"
							className={[
								"w-full h-full flex items-start pb-12 lg:flex-row flex-col border-b",
								theme ? "border-b-white" : "border-b-black",
							].join(" ")}
						>
							<div className="left-side-education lg:w-1/3 w-full">
								<h3
									className={[
										"underline-offset-2 font-semibold lg:text-2xl text-3xl",
										theme ? "text-white" : "text-[#1D1E20]",
									].join(" ")}
								>
									Education
								</h3>
							</div>
							<div className="right-side-education lg:w-2/3 mt-4 lg:mt-0 w-full text-start lg:text-center">
								<div
									id="Education"
									className="flex items-center justify-start flex-col lg:w-auto"
								>
									<div className="flex items-center justify-start w-full lg:flex-row flex-col">
										<div className=" lg:w-10 lg:h-10 w-16 h-16 lg:mr-5 flex items-center justify-center">
											<img
												src="/images/columbia-college-logo.png"
												alt=""
												className=""
											/>
										</div>
										<h4
											className={[
												"lg:text-3xl text-xl font-bold  lg:mt-0 mt-5",
												theme ? "text-white" : "text-[#1D1E20]",
											].join(" ")}
										>
											Columbia College
										</h4>
									</div>
									<p
										className={[
											"lg:pl-[65px] mt-1 opacity-70 text-sm italic w-full pr-13 lg:text-start text-center",
											theme ? "text-white" : "text-[#1D1E20]",
										].join(" ")}
									>
										Diploma in Computer Science • 2022
									</p>
									<div className="flex items-center justify-start w-full lg:flex-row flex-col mt-10">
										<div className=" lg:w-10 lg:h-10 w-16 h-16 lg:mr-5 flex items-center justify-center">
											<img src="/images/sfu-logo.png" alt="" className="" />
										</div>
										<h4
											className={[
												"lg:text-3xl text-xl font-bold  lg:mt-0 mt-5",
												theme ? "text-white" : "text-[#1D1E20]",
											].join(" ")}
										>
											Simon Frasier University
										</h4>
									</div>
									<p
										className={[
											"lg:pl-[65px] mt-1 opacity-70 text-sm italic w-full pr-13 lg:text-start text-center",
											theme ? "text-white" : "text-[#1D1E20]",
										].join(" ")}
									>
										Bachelor in Applied Science, Computer Science Major, 2022 -
										Present
									</p>
								</div>
							</div>
						</div>
						<div
							id="Skills"
							className={[
								"w-full h-full flex items-start justify-between lg:flex-row flex-col py-16 border-b",
								theme ? "border-b-white" : "border-b-black",
							].join(" ")}
						>
							<div className="left-side-work lg:w-1/3 w-full">
								<h3
									className={[
										" underline-offset-2 font-semibold lg:text-2xl text-3xl",
										theme ? "text-white" : "text-[#1D1E20]",
									].join(" ")}
								>
									Skills
								</h3>
							</div>
							<div className="right-side-work lg:w-2/3 mt-4 lg:mt-0 w-full">
								<div
									id="Skill"
									className="flex lg:items-start lg:justify-start items-center justify-center flex-col"
								>
									{/* Front end  */}
									<h4
										className={[
											"text-3xl font-bold lg:text-start w-full",
											theme ? "text-white" : "text-[#1D1E20]",
										].join(" ")}
									>
										Front End
									</h4>
									<ul className="mt-6">
										<div className="flex lg:flex-row flex-col">
											<div className="mx-4">
												<li
													className={[
														"text-md list-disc my-1",
														theme ? "text-[#C4C4C5]" : "text-[#1D1E20]",
													].join(" ")}
												>
													HTML
												</li>
												<li
													className={[
														"text-md list-disc my-1",
														theme ? "text-[#C4C4C5]" : "text-[#1D1E20]",
													].join(" ")}
												>
													CSS
												</li>
												<li
													className={[
														"list-disc my-1 text-md",
														theme ? "text-[#C4C4C5]" : "text-[#1D1E20]",
													].join(" ")}
												>
													Javascript
												</li>
											</div>
											<div className="lg:ml-48 mx-4 ">
												<li
													className={[
														"text-md list-disc my-1",
														theme ? "text-[#C4C4C5]" : "text-[#1D1E20]",
													].join(" ")}
												>
													React JS
												</li>
												<li
													className={[
														"text-md list-disc my-1",
														theme ? "text-[#C4C4C5]" : "text-[#1D1E20]",
													].join(" ")}
												>
													Redux
												</li>
												<li
													className={[
														"text-md list-disc my-1",
														theme ? "text-[#C4C4C5]" : "text-[#1D1E20]",
													].join(" ")}
												>
													TailwindCSS
												</li>
											</div>
											<div className="lg:ml-48 mx-4 ">
												<li
													className={[
														"text-md list-disc my-1",
														theme ? "text-[#C4C4C5]" : "text-[#1D1E20]",
													].join(" ")}
												>
													Springboot
												</li>
												<li
													className={[
														"text-md list-disc my-1",
														theme ? "text-[#C4C4C5]" : "text-[#1D1E20]",
													].join(" ")}
												>
													Thymeleaf
												</li>
											</div>
										</div>
									</ul>
									{/* Front end end  */}

									{/* Back end  */}
									<h4
										className={[
											"text-3xl font-bold text-start mt-12",
											theme ? "text-white" : "text-[#1D1E20]",
										].join(" ")}
									>
										Back End
									</h4>
									<ul className="mt-6">
										<div className="flex flex-row">
											<div className="mx-4 ">
												<li
													className={[
														"text-md list-disc my-1",
														theme ? "text-[#C4C4C5]" : "text-[#1D1E20]",
													].join(" ")}
												>
													Node JS
												</li>
												<li
													className={[
														"text-md list-disc my-1",
														theme ? "text-[#C4C4C5]" : "text-[#1D1E20]",
													].join(" ")}
												>
													Express JS
												</li>
												<li
													className={[
														"list-disc my-1 text-md",
														theme ? "text-[#C4C4C5]" : "text-[#1D1E20]",
													].join(" ")}
												>
													MongoDB
												</li>
											</div>
											<div className="lg:ml-48 mx-4 ">
												<li
													className={[
														"text-md list-disc my-1",
														theme ? "text-[#C4C4C5]" : "text-[#1D1E20]",
													].join(" ")}
												>
													PostgreSQL
												</li>
											</div>
										</div>
									</ul>
									{/* Back end done  */}

									{/* Others */}
									<h4
										className={[
											"text-3xl font-bold text-start mt-12",
											theme ? "text-white" : "text-[#1D1E20]",
										].join(" ")}
									>
										Others
									</h4>
									<ul className="mt-6">
										<div className="flex flex-row">
											<div className="mx-4 ">
												<li
													className={[
														"text-md list-disc my-1",
														theme ? "text-[#C4C4C5]" : "text-[#1D1E20]",
													].join(" ")}
												>
													Python
												</li>
												<li
													className={[
														" text-md list-disc my-1",
														theme ? "text-[#C4C4C5]" : "text-[#1D1E20]",
													].join(" ")}
												>
													C++
												</li>
												<li
													className={[
														"list-disc my-1 text-md",
														theme ? "text-[#C4C4C5]" : "text-[#1D1E20]",
													].join(" ")}
												>
													Git
												</li>
											</div>
											<div className="lg:ml-56 mx-4 ">
												<li
													className={[
														"text-md list-disc my-1",
														theme ? "text-[#C4C4C5]" : "text-[#1D1E20]",
													].join(" ")}
												>
													Java
												</li>
											</div>
										</div>
									</ul>
									{/* End others  */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
