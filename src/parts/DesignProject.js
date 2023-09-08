import React from "react";

export default function DesignProject({ theme }) {
	return (
		<section id="Design-projects">
			<div
				className={[
					"min-h-screen",
					theme ? "bg-[#1D1E20]" : "bg-[#F5F5F5]",
				].join(" ")}
			>
				<div className="h-full w-full lg:px-60 lg:pb-44 lg:pt-32 py-16 px-10 text-center">
					<h1
						className={[
							"text-5xl font-bold",
							theme ? "text-white" : "text-[#303336]",
						].join(" ")}
					>
						Design Projects
					</h1>
					{/* Project-card */}
					<div className="w-full flex md:flex-row flex-col md:mt-8">
						<div className="left-dProject">
							<iframe
								style={{ backgroundColor: "transparent" }}
								width="100%"
								height="100%"
								allowTransparency="true"
								src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJdpo8FZEpzmIExNEHBcJHJ%2FJobs.Io-Prototype%3Fpage-id%3D1%253A10%26type%3Ddesign%26node-id%3D10-12%26viewport%3D-70%252C-1108%252C0.23%26t%3Dvyt31M9Sjh7TftUT-1%26scaling%3Dcontain%26starting-point-node-id%3D10%253A10%26mode%3Ddesign%26hide-ui%3D1"
								allowfullscreen
							></iframe>
						</div>
						<div className="right-dProject flex flex-col justify-between md:my-28 my-10 md:text-left text-center">
							<h1
								className={[
									"text-4xl font-bold tracking-wide",
									theme ? "text-white" : "text-[#303336]",
								].join(" ")}
							>
								Jobs.io
							</h1>
							<div
								className={[
									"text-lg leading-relaxed md:mt-0 mt-5",
									theme ? "text-white opacity-80" : "text-[#303336]",
								].join(" ")}
							>
								<h3>
									Nike Shopper is a user-friendly mobile application designed
									with a simple user interface (UI) to ensure that people of all
									ages can easily shop for Nike products online.{" "}
									<h3 className="mt-3">
										The app features a clean and intuitive design, making it
										accessible and straightforward to navigate for users with
										varying levels of technical proficiency.{" "}
									</h3>
								</h3>
							</div>
							<div className="md:text-xl text-lg font-semibold text-[#525252] tracking-wide md:my-0 my-7">
								<div className="flex flex-row justify-between my-4">
									<h2
										className={
											theme ? "text-white opacity-80" : "text-[#303336]"
										}
									>
										Role:
									</h2>
									<h2>UI Designer</h2>
								</div>
								<div className="border border-gray-300 w-full"></div>
								<div className="flex flex-row justify-between my-4">
									<h2
										className={
											theme ? "text-white opacity-80" : "text-[#303336]"
										}
									>
										Link:
									</h2>
									<a
										className="hover:text-blue-600 underline"
										href="https://www.youtube.com/watch?v=W7mvt7nJEeg&list=PLw4xrUjn6435fnYoohd1I5quPDaaQzrMk"
										target="_blank"
									>
										https://www.youtube.com/watch?v=W7mvt7nJEeg
									</a>
								</div>
								<div className="border border-gray-300 w-full"></div>
								<div className="flex flex-row justify-between my-4">
									<h2
										className={
											theme ? "text-white opacity-80" : "text-[#303336]"
										}
									>
										Timeline:
									</h2>
									<h2>February 2023 - March 2023</h2>
								</div>
								<div className="border border-gray-300 w-full"></div>
								<div className="flex flex-row justify-between my-4">
									<h2
										className={
											theme ? "text-white opacity-80" : "text-[#303336]"
										}
									>
										Tool:
									</h2>
									<h2>Figma</h2>
								</div>
							</div>
							<a
								href="https://www.figma.com/proto/Jdpo8FZEpzmIExNEHBcJHJ/Jobs.Io-Prototype?page-id=1%3A10&type=design&node-id=10-15&viewport=-70%2C-1108%2C0.23&t=8DJvGmnWmkp7gIT9-1&scaling=scale-down&starting-point-node-id=10%3A10&mode=design"
								target="_blank"
							>
								<button
									className={[
										"py-3 px-5 border-2 rounded-lg text-xl",
										theme
											? "border-white opacity-80 text-white hover:border-[#F5F5F5] hover:text-[#303336] hover:bg-white"
											: "border-[#303336] hover:border-[#303336] hover:text-white hover:bg-[#303336]",
									].join(" ")}
								>
									Full Protoype
								</button>
							</a>
						</div>
					</div>
					{/* End of one project card */}
					{/* Project-card */}
					<div className="w-full flex md:flex-row flex-col md:mt-8">
						<div className="left-dProject">
							<iframe
								style={{ backgroundColor: "transparent" }}
								width="100%"
								height="100%"
								allowTransparency="true"
								src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FDqFSn4MB4VfmhvbGYoDIAS%2FSneaker-shop-App%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D3-1408%26viewport%3D-10%252C180%252C0.11%26t%3DMOzE1k1l6w0miwvX-1%26scaling%3Dscale-down%26starting-point-node-id%3D3%253A1225%26mode%3Ddesign%26hide-ui%3D1"
								allowfullscreen
							></iframe>
						</div>
						<div className="right-dProject flex flex-col justify-between md:my-28 my-10 md:text-left text-center">
							<h1
								className={[
									"text-4xl font-bold tracking-wide",
									theme ? "text-white" : "text-[#303336]",
								].join(" ")}
							>
								Nike Shopper
							</h1>
							<div
								className={[
									"text-lg leading-relaxed md:mt-0 mt-5",
									theme ? "text-white opacity-80" : "text-[#303336]",
								].join(" ")}
							>
								<h3>
									Nike Shopper is a user-friendly mobile application designed
									with a simple user interface (UI) to ensure that people of all
									ages can easily shop for Nike products online.{" "}
									<h3 className="mt-3">
										The app features a clean and intuitive design, making it
										accessible and straightforward to navigate for users with
										varying levels of technical proficiency.{" "}
									</h3>
								</h3>
							</div>
							<div className="md:text-xl text-lg font-semibold text-[#525252] tracking-wide md:my-0 my-7">
								<div className="flex flex-row justify-between my-4">
									<h2
										className={
											theme ? "text-white opacity-80" : "text-[#303336]"
										}
									>
										Role:
									</h2>
									<h2>UI Designer</h2>
								</div>
								<div className="border border-gray-300 w-full"></div>
								<div className="flex flex-row justify-between my-4">
									<h2
										className={
											theme ? "text-white opacity-80" : "text-[#303336]"
										}
									>
										Timeline:
									</h2>
									<h2>March 2023 - April 2023</h2>
								</div>
								<div className="border border-gray-300 w-full"></div>
								<div className="flex flex-row justify-between my-4">
									<h2
										className={
											theme ? "text-white opacity-80" : "text-[#303336]"
										}
									>
										Tool:
									</h2>
									<h2>Figma</h2>
								</div>
							</div>
							<a
								href="https://www.figma.com/proto/DqFSn4MB4VfmhvbGYoDIAS/Sneaker-shop-App?page-id=0%3A1&type=design&node-id=3-1408&viewport=109%2C92%2C0.3&t=XuLU2eEBCXG318sQ-1&scaling=scale-down&starting-point-node-id=3%3A1225&mode=design"
								target="_blank"
							>
								<button
									className={[
										"py-3 px-5 border-2 rounded-lg text-xl",
										theme
											? "border-white opacity-80 text-white hover:border-[#F5F5F5] hover:text-[#303336] hover:bg-white"
											: "border-[#303336] hover:border-[#303336] hover:text-white hover:bg-[#303336]",
									].join(" ")}
								>
									Full Protoype
								</button>
							</a>
						</div>
					</div>
					{/* End of one project card */}
					{/* project card */}
					<div className="w-full flex md:flex-row flex-col">
						<div className="left-dProject2">
							<iframe
								style={{ backgroundColor: "transparent" }}
								width="100%"
								height="100%"
								allowTransparency="true"
								src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F4A1cymePN9pkTK9kMNVlKw%2FUi-Design-Payment-App%3Fpage-id%3D52%253A40%26type%3Ddesign%26node-id%3D113-327%26viewport%3D283%252C153%252C0.08%26t%3D0GImeEoxTYRnU9Fd-1%26scaling%3Dscale-down%26starting-point-node-id%3D106%253A339%26mode%3Ddesign%26hide-ui%3D1"
								allowfullscreen
							></iframe>
						</div>
						<div className="right-dProject flex flex-col justify-between md:my-28 my-10 md:text-left text-center">
							<h1
								className={[
									"text-4xl font-bold tracking-wide",
									theme ? "text-white" : "text-[#303336]",
								].join(" ")}
							>
								Hand Pay
							</h1>
							<div
								className={[
									"text-lg leading-relaxed md:mt-0 mt-5",
									theme ? "text-white opacity-80" : "text-[#303336]",
								].join(" ")}
							>
								<h3>
									HandPay is an innovative mobile application that
									revolutionizes the payment process by allowing users to make
									secure and convenient payments simply by swiping their hand on
									their phone. With HandPay, users can effortlessly settle
									bills, make purchases, and complete transactions, all from the
									comfort of their own homes.
								</h3>
							</div>
							<div className="md:text-xl text-lg font-semibold text-[#525252] tracking-wide md:my-0 my-7">
								<div className="flex flex-row justify-between my-4">
									<h2
										className={
											theme ? "text-white opacity-80" : "text-[#303336]"
										}
									>
										Role:
									</h2>
									<h2>UI Designer</h2>
								</div>
								<div className="border border-gray-300 w-full"></div>
								<div className="flex flex-row justify-between my-4">
									<h2
										className={
											theme ? "text-white opacity-80" : "text-[#303336]"
										}
									>
										Timeline:
									</h2>
									<h2>April 2023 - May 2023</h2>
								</div>
								<div className="border border-gray-300 w-full"></div>
								<div className="flex flex-row justify-between my-4">
									<h2
										className={
											theme ? "text-white opacity-80" : "text-[#303336]"
										}
									>
										Tool:
									</h2>
									<h2>Figma</h2>
								</div>
							</div>
							<a
								target="_blank"
								href="https://www.figma.com/proto/4A1cymePN9pkTK9kMNVlKw/Ui-Design-Payment-App?page-id=52%3A40&type=design&node-id=113-327&viewport=260%2C871%2C0.4&t=j0s1MIeZvAAuTQUr-1&scaling=scale-down&starting-point-node-id=106%3A339&mode=design"
							>
								<button
									className={[
										"py-3 px-5 border-2 rounded-lg text-xl",
										,
										theme
											? "border-white opacity-80 text-white hover:border-[#F5F5F5] hover:text-[#303336] hover:bg-white"
											: "border-[#303336] hover:border-[#303336] hover:text-white hover:bg-[#303336]",
									].join(" ")}
								>
									Full Protoype
								</button>
							</a>
						</div>
					</div>
					{/* End of one project card */}
					{/* project card */}
					<div className="w-full flex flex-col md:mt-11">
						<div className="left-dProject3">
							<iframe
								width="100%"
								height="100%"
								src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fqi7M3bNxQjqAXUjpk2iaQF%2FFinance-Sendiri%3Fpage-id%3D1%253A504%26type%3Ddesign%26node-id%3D102-3175%26viewport%3D266%252C423%252C0.05%26t%3DvgGVQKA4CbZTDZnk-1%26scaling%3Dscale-down%26starting-point-node-id%3D102%253A3072%26mode%3Ddesign%26hide-ui%3D1"
								allowfullscreen
							></iframe>
						</div>
						<div className="right-dProject flex flex-col justify-between mb-28 mt-4 text-center md:text-left">
							<h1
								className={[
									"text-4xl font-bold tracking-wide",
									theme ? "text-white" : "text-[#303336]",
								].join(" ")}
							>
								Finance+
							</h1>
							<div
								className={[
									"text-lg leading-relaxed mt-7",
									theme ? "text-white opacity-80" : "text-[#303336]",
								].join(" ")}
							>
								<h3>
									Finance+ is a comprehensive website application that empowers
									users to effortlessly track and manage their financial
									accounts and transactions directly from their smartphones.
									With its creative and user-friendly interface, Finance+ offers
									a seamless experience for users of all ages, helping them
									monitor their expenses, income, stocks, and various other
									financial aspects.
								</h3>
							</div>
							<div className="md:text-xl text-lg font-semibold text-[#525252] tracking-wide mt-5 ">
								<div className="flex flex-row justify-between my-4">
									<h2
										className={
											theme ? "text-white opacity-80" : "text-[#303336]"
										}
									>
										Role:
									</h2>
									<h2>UI Designer</h2>
								</div>
								<div className="border border-gray-300 w-full"></div>
								<div className="flex flex-row justify-between my-4">
									<h2
										className={
											theme ? "text-white opacity-80" : "text-[#303336]"
										}
									>
										Timeline:
									</h2>
									<h2>April 2023 - May 2023</h2>
								</div>
								<div className="border border-gray-300 w-full"></div>
								<div className="flex flex-row justify-between my-4">
									<h2
										className={
											theme ? "text-white opacity-80" : "text-[#303336]"
										}
									>
										Tool:
									</h2>
									<h2>Figma</h2>
								</div>
							</div>
							<a
								target="_blank"
								href="https://www.figma.com/proto/qi7M3bNxQjqAXUjpk2iaQF/Finance-Sendiri?page-id=1%3A504&type=design&node-id=102-3175&viewport=266%2C423%2C0.05&t=vgGVQKA4CbZTDZnk-1&scaling=scale-down&starting-point-node-id=102%3A3072&mode=design"
								className="mt-5"
							>
								<button
									className={[
										"py-3 px-5 border-2 rounded-lg text-xl",
										theme
											? "border-white opacity-80 text-white hover:border-[#F5F5F5] hover:text-[#303336] hover:bg-white"
											: "border-[#303336] hover:border-[#303336] hover:text-white hover:bg-[#303336]",
									].join(" ")}
								>
									Full Protoype
								</button>
							</a>
						</div>
					</div>
					{/* End of one project card */}
				</div>
			</div>
		</section>
	);
}
