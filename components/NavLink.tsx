import styled from "styled-components"

interface Props {
	text: string
	anchorLink: string
	color?: string
	onClick: (...args: any) => any
}

export const NavLink = ({ text, anchorLink, color, onClick }: Props) => {
	return (
		<Link onClick={onClick} color={color} href={`#${anchorLink}`}>
			{text.toUpperCase()}
		</Link>
	)
}

const Link = styled.a<{ color?: string }>`
	padding: 0.5rem;
	margin: 0.5rem;
	font-size: 1.5rem;
	line-height: 2rem;
	color: ${(props) => props.color || props.theme.colors.gray600};
	font-weight: 900;
`
