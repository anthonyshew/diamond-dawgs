import { NavLink } from "@Components/NavLink"
import styled from "styled-components"

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

const Navbar = () => {
	return (
		<Nav>
			<Img src="/images/facade_black.PNG" />
			<LinksWrapper>
				{navLinks.map((link) => {
					return <NavLink {...link} />
				})}
			</LinksWrapper>
		</Nav>
	)
}

export default Navbar

const Nav = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 1rem 6rem;
`

const Img = styled.img`
	width: 6rem;
`

const LinksWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`
