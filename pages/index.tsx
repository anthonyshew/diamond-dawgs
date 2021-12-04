import Navbar from "@Components/Navbar"
import Hero from "@Components/Hero"
import FullHeightDawg from "@Components/FullHeightDawg"
import AnotherHero from "@Components/AnotherHero"
import CardGrid from "@Components/CardGrid"

const Home = () => {
	return (
		<main>
			<Navbar />
			<Hero />
			<FullHeightDawg />
			<AnotherHero />
			<CardGrid />
		</main>
	)
}

export default Home
