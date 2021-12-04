import { useEffect, useState } from "react"

import { useMobile } from "hooks/isMobile"
import Navbar from "@Components/Navbar"
import MobileMenu from "@Components/MobileMenu"
import Hero from "@Components/Hero"
import FullHeightDawg from "@Components/FullHeightDawg"
import AnotherHero from "@Components/AnotherHero"
import CardGrid from "@Components/CardGrid"
import About from "@Components/About"
import CoachingStaff from "@Components/CoachingStaff"
import JoinTheTeam from "@Components/JoinTheTeam"

const Home = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const isMobile = useMobile()

	useEffect(() => {
		if (!isMobile) {
			setIsMenuOpen(false)
		}
	}, [isMobile])

	return (
		<main>
			<Navbar setIsMenuOpen={setIsMenuOpen} />
			<MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
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
