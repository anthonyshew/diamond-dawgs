import { Dispatch, SetStateAction } from "react"
import { NavLink } from "@Components/NavLink"
import styled from "styled-components"
import Hamburger from "./Hamburger"
import { useMobile } from "hooks/isMobile"

const navLinks = [
	{
		text: "Collection Goals",
		anchorLink: "goals"
	},
	{
		text: "About",
		anchorLink: "about"
	},
	{
		text: "Team",
		anchorLink: "team"
	}
]

interface Props {
	setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

const Navbar = ({ setIsMenuOpen }: Props) => {
	const isMobile = useMobile()

	return (
		<Nav>
			<a href="#">
				<Img src="/images/facade_black.PNG" />
			</a>
			{isMobile ? (
				<Hamburger
					width="50px"
					style={{ position: "relative", transform: "translateY(50%)", cursor: "pointer" }}
					onClick={() => setIsMenuOpen(true)}
				/>
			) : (
				<LinksWrapper>
					{navLinks.map((link) => {
						return <NavLink {...link} />
					})}
				</LinksWrapper>
			)}
		</Nav>
	)
}

export default Navbar

const Nav = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 1rem 15%;
`

const Img = styled.img`
	width: 6rem;
`

const LinksWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-left: 2rem;
`
