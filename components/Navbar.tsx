import { NavLink } from "@Components/NavLink"

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
		<nav className="flex flex-row justify-between px-24 py-4">
			<img src="/images/facade_black.PNG" className="w-24" />
			<div className="flex flex-row items-center">
				{navLinks.map((link) => {
					return <NavLink {...link} />
				})}
			</div>
		</nav>
	)
}

export default Navbar
