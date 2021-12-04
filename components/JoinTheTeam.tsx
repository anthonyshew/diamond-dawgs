import styled from "styled-components"

const JoinTheTeam = ({ ...props }) => {
	return (
		<Container>
			<Title>Join The Team</Title>
			<Grid>
				<Outbound href="https://mobile.twitter.com/diamonddawgsnft" target="_blank" rel="noopener noreferrer">
					<Img src="/images/twitter.PNG" />
				</Outbound>
				<Outbound href="DD Discord Link" target="_blank" rel="noopener noreferrer">
					<Img src="/images/discord.PNG" />
				</Outbound>
				<Outbound href="https://opensea.io/collection/diamond-dawgs" target="_blank" rel="noopener noreferrer">
					<Img src="/images/open_sea.PNG" />
				</Outbound>
			</Grid>
		</Container>
	)
}

export default JoinTheTeam

const Container = styled.div`
	background-color: ${(props) => props.theme.colors.pink};
	padding: 3rem;
`

const Title = styled.h2`
	text-transform: uppercase;
	font-weight: 900;
	font-size: 3rem;
	text-align: center;
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin-top: 3rem;
`

const Outbound = styled.a`
	width: 100px;
	justify-self: center;
	align-self: center;

	@media (max-width: 575px) {
		width: 50px;
	}
`

const Img = styled.img`
	width: 100%;
`
