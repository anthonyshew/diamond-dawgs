import Hamburger from "@Components/Hamburger"
import { useLockBodyScroll } from "hooks/useLockBodyScroll"
import { Dispatch, SetStateAction } from "react"
import styled, { useTheme } from "styled-components"
import { navLinks } from "./Navbar"
import { NavLink } from "./NavLink"

interface Props {
	isMenuOpen: boolean
	setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }: Props) => {
	useLockBodyScroll(isMenuOpen)
	const theme = useTheme()

	return (
		<Wrapper isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)}>
			<Body isMenuOpen={isMenuOpen} onClick={(e) => e.stopPropagation()}>
				<Hamburger
					onClick={() => setIsMenuOpen(false)}
					color={theme.colors.white}
					width="100px"
					style={{ position: "absolute", top: "24px", right: "24px", cursor: "pointer" }}
				/>
				<LinksWrapper>
					{navLinks.map((link) => {
						return <NavLink onClick={() => setIsMenuOpen(false)} color={theme.colors.white} {...link} />
					})}
				</LinksWrapper>
			</Body>
		</Wrapper>
	)
}

export default MobileMenu

const Wrapper = styled.div<{ isMenuOpen: boolean }>`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 999;
	background: rgba(0, 0, 0, 0.8);
	transition: 0.2s;
	opacity: ${(props) => (props.isMenuOpen ? 1 : 0)};
	pointer-events: ${(props) => (props.isMenuOpen ? "initial" : "none")};
	cursor: pointer;
`

const Body = styled.div<{ isMenuOpen: boolean }>`
	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
	width: ${(props) => (props.isMenuOpen ? "300px" : "0")};
	background: ${(props) => props.theme.colors.darkGreen};
	cursor: initial;
`

const LinksWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 200px;
`
