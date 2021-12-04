import Navbar from "@Components/Navbar"
import Hero from "@Components/Hero"
import FullHeightDawg from "@Components/FullHeightDawg"
import AnotherHero from "@Components/AnotherHero"
import CardGrid from "@Components/CardGrid"
import About from "@Components/About"
import CoachingStaff from "@Components/CoachingStaff"
import JoinTheTeam from "@Components/JoinTheTeam"

const Home = () => {
	return (
		<main>
			<Navbar />
			<Hero />
			<FullHeightDawg />
			<AnotherHero />
			<CardGrid />
			<About />
			<CoachingStaff />
			<JoinTheTeam />
		</main>
	)
}

export default Home
