const Hero = () => {
	return (
		<section className="bg-green-900 pt-64 text-white">
			<p className="text-center text-4xl font-bold tracking-widest uppercase">Welcome to the</p>
			<h1 className="text-center text-7xl font-bold tracking-widest uppercase">Diamond Dawgs</h1>
			<hr className="my-8 h-4 border-0 bg-yellow-500" />
			<p className="mx-auto max-w-lg">
				The DiamondDawgs Collection consists of 7,000 generative baseball characters, hand designed and drawn by
				professional baseball player Evan Mendoza of the St. Louis Cardinals organization. This is more than just
				baseball characters, this is the evolution we are about to witness on how athletes are able to express
				themselves off the playing field. By joining us, you're not investing into some random project, you're helping
				build this positive movement.
			</p>
			<div className="relative left-[5rem] flex flex-row justify-between">
				<div className="flex flex-col justify-center items-center">
					<p className="font-bold text-xl mb-4">PRICE: 0.03 ETH</p>
					<button className="bg-gradient-to-r from-blue-400 to-blue-200 rounded-full px-12 py-2 text-xl font-medium tracking-widest">
						CONNECT WALLET
					</button>
				</div>
				<p className="text-green-600 text-[20rem] font-extrabold">330</p>
			</div>
			<div className="flex flex-col justify-center items-center text-center text-yellow-500 font-bold">
				<h2 className="text-xl">RELEASE DATE</h2>
				<p className="text-3xl">TBD</p>
			</div>
		</section>
	)
}

export default Hero
