import * as React from "react"

const Hamburger = (props: any) => (
	<svg
		width={props.width}
		height={props.width}
		viewBox="0 0 29 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M3.625 14.5h21.75M3.625 7.25h21.75M3.625 21.75h21.75"
			stroke={props.color || "#000"}
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

export default Hamburger
