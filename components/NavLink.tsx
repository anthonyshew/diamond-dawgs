interface Props {
	text: string
	anchorLink: string
}

export const NavLink = ({ text, anchorLink }: Props) => {
	return (
		<a className="p-2 m-2 text-2xl text-gray-600 font-extrabold" href={`#${anchorLink}`}>
			{text.toUpperCase()}
		</a>
	)
}
