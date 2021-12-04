import styled from "styled-components"

interface Props {
	text: string
	anchorLink: string
}

export const NavLink = ({ text, anchorLink }: Props) => {
	return <Link href={`#${anchorLink}`}>{text.toUpperCase()}</Link>
}

const Link = styled.a`
	padding: 0.5rem;
	margin: 0.5rem;
	font-size: 1.5rem;
	line-height: 2rem;
	color: ${(props) => props.theme.colors.gray600};
	font-weight: 900;
`
