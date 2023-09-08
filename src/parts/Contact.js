import React from "react";

export default function Contact({ theme }) {
	return (
		<section id="Contact">
			<div
				className={[
					"min-h-screen",
					theme ? "bg-[#303336]" : "bg-[#E6E6E6]",
				].join(" ")}
			>
				<div className="h-full w-full md:px-60 md:pb-44 md:pt-32 py-20  text-center">
					<h1
						className={[
							"text-5xl font-bold",
							theme ? "text-white" : "text-[#1D1E20]",
						].join(" ")}
					>
						Contacts
					</h1>
					<div className="h-full w-full mt-10 md:mt-24 flex md:flex-row flex-col">
						{/* there should be skeleton in here but im so lazy to d it tbh*/}
						<div className="w-full lg:w-1/2 bg-[#cccccc] inline-block h-96">
							<p className="w-full h-full">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.9820945666866!2d-123.04172678441812!3d49.23882868179812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486769665952571%3A0xd8e03731d3b0efff!2sEuclid%20Ave%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1663786482992!5m2!1sen!2sca"
									className="w-full h-full"
								></iframe>
							</p>
						</div>
						<div
							className={[
								"w-full md:w-1/2 h-96 md:pl-12 md:px-4 pt-12 text-center md:text-start",
								theme ? "bg-[#1D1E20]" : "bg-[#F5F5F5]",
							].join(" ")}
						>
							<h3
								className={[
									"text-4xl",
									theme ? "text-[#F5F5F5]" : "text-[#1D1E20]",
								].join(" ")}
							>
								Contact Details
							</h3>
							<h5
								className={[
									"text-xl mt-9 opacity-70",
									,
									theme ? "text-[#F5F5F5]" : "text-[#1D1E20]",
								].join(" ")}
							>
								Kevin Sugeng
							</h5>
							<h5
								className={[
									"text-xl mt-2 opacity-70",
									theme ? "text-[#F5F5F5]" : "text-[#1D1E20]",
								].join(" ")}
							>
								Euclid Avenue
							</h5>
							<h5
								className={[
									"text-xl mt-2 opacity-70",
									theme ? "text-[#F5F5F5]" : "text-[#1D1E20]",
								].join(" ")}
							>
								Vancouver BC, V5R 5G4
							</h5>
							<h5
								className={[
									"text-xl mt-2 opacity-70",
									theme ? "text-[#F5F5F5]" : "text-[#1D1E20]",
								].join(" ")}
							>
								+1 (236) 668 4089
							</h5>
							<h5
								className={[
									"text-xl mt-2 opacity-70",
									theme ? "text-[#F5F5F5]" : "text-[#1D1E20]",
								].join(" ")}
							>
								kevinsugeng@gmail.com
							</h5>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
