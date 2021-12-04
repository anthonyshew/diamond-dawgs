import { Dispatch, SetStateAction } from "react"
import styled from "styled-components"

interface Props {
	isMenuOpen: boolean
	setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }: Props) => {
	return (
		<Wrapper isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)}>
			<Body isMenuOpen={isMenuOpen}>Make something great with the MobileMenu component here!</Body>
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
	background: green;
	transition: 0.2s;
	opacity: ${(props) => (props.isMenuOpen ? 1 : 0)};
	pointer-events: ${(props) => (props.isMenuOpen ? "initial" : "none")};
`

const Body = styled.div<{ isMenuOpen: boolean }>`
	width: ${(props) => (props.isMenuOpen ? "100vw" : "0vw")};
	background: red;
`
