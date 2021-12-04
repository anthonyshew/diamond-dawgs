import styled, { useTheme } from "styled-components"

import Card from "./Card"

const CardGrid = () => {
	const theme = useTheme()

	return (
		<Grid>
			<Card
				image="/images/action_shot.PNG"
				backgroundColor={theme.colors.pink}
				textColor={theme.colors.black}
				title="Roadmap"
			>
				<P>20 Dawgs airdropped to random holders</P>
				<P>$1000 per day (2 winners) giveaway for 15 days</P>
				<P>Starting plans for Diamond Dawgs HQ</P>
				<P>$20,000 donated to Jimmy V Foundation for Cancer Research</P>
				<P>$20,000 in ETH giveaway to 20 holders</P>
				<P>Location locked down for Diamond Dawgs HQ</P>
				<P>$30,000 in ETH giveaway to 3 holders</P>
			</Card>
			<Card
				image="/images/cute-little-dude.PNG"
				backgroundColor={theme.colors.lightGreen}
				textColor={theme.colors.white}
				title="Utilities"
			>
				<ButtonLink href="/vip-redeem">VIP Access</ButtonLink>
				<H4>Stadium Background</H4>
				<P>Access to a 1-on-1 stadium tour with Diamond Dawgs founder & St. Louis Cardinals player Evan Mendoza</P>
				<H4>Signature Series</H4>
				<P>Access to FREE Will Call Tickets to one of Evan's baseball games</P>
				<ButtonLink href="/vip-redeem">Trait Swap</ButtonLink>
				<P>Own 2 Dawgs and trade attributes! Coming soon...</P>
			</Card>
			<Card
				image="/images/grand_opening.PNG"
				backgroundColor={theme.colors.orange}
				textColor={theme.colors.black}
				title="Long Term Goals"
			>
				<H4>Promo Nights for MiLB Teams</H4>
				<P>Changing the team name, jerseys, and hats to the Dawgs for a night while selling merch in the team store</P>
				<H4>Diamond Dawgs HQ</H4>
				<P>Indoor Baseball Facility for the aspiring Baseball Player</P>
				<H4>Upgraded Characters</H4>
				<P>Enhanced Artwork</P>
				<H4>Collaborations with Pro Athletes</H4>
				<P>Community led navigation with sports figures from around the world</P>
			</Card>
		</Grid>
	)
}

export default CardGrid

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	padding-top: 3rem;
	padding-bottom: 3rem;
	background-image: linear-gradient(
		180deg,
		${(props) => props.theme.colors.lightGreen} 0%,
		${(props) => props.theme.colors.lightGreen} 275px,
		${(props) => props.theme.colors.white} 275px,
		${(props) => props.theme.colors.white} 275px,
		${(props) => props.theme.colors.white} 100%
	);

	@media (max-width: 1000px) {
		display: block;
	}
`

const H4 = styled.h4`
	margin-top: 0.5rem;
	text-align: center;
	font-weight: 900;
	font-size: 1.5rem;
`

const P = styled.p`
	margin: 0.5rem;
	text-align: center;
	font-weight: 800;
`

const ButtonLink = styled.a`
	appearance: none;
	padding: 0.5rem 2rem;
	border: 2px solid ${(props) => props.theme.colors.black};
	background-color: ${(props) => props.theme.colors.gray600};
	border-radius: 1rem;
	font-family: "Poppins";
	font-size: 1.5rem;
	font-weight: 700;
	text-transform: uppercase;
	margin: 1rem 0;
	color: ${(props) => props.theme.colors.white};
	cursor: pointer;
`
