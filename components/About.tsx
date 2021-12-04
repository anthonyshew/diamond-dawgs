import styled from "styled-components"

const About = ({ ...props }) => {
	return (
		<section>
			<Container>
				<H2 id="about">About</H2>
			</Container>
			<ContentContainer>
				<p>
					The Diamond Dawg NFTs are 7,000 computer generated, baseball inspired collectibles with over 175 hand crafted
					features by pro athlete and artist, Evan Mendoza. Each collectible contains unique traits inspired by his
					teammates, cities, teams, and his journey from Little League to the Pros. Aside from the Dawgs, Evan has had a
					creative background most of his life. He enjoys photography (sports & timelapse), videography, storytellings,
					and much more. We are bringing together baseball fans and NFT collectors through the art of an actual player.
					This is your opportunity to get involved in this one-of-a-kind project and community!
				</p>
			</ContentContainer>
		</section>
	)
}

export default About

const Container = styled.div`
	background: repeat center/125px url("/images/dawg_outline.PNG"),
		linear-gradient(
			0deg,
			${(props) => props.theme.colors.yellow} 0%,
			${(props) => props.theme.colors.gold} 50%,
			${(props) => props.theme.colors.yellow} 100%
		);
`

const H2 = styled.h2`
	padding: 8rem 0;
	font-size: 8rem;
	font-weight: 900;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 1rem;
`

const ContentContainer = styled.div`
	padding: 3rem;
	background-color: ${(props) => props.theme.colors.lightGreen};
	letter-spacing: 0.05rem;

	p {
		margin: 0 auto;
		max-width: 750px;
		font-weight: 600;
		line-height: 2.5rem;
		font-size: 1.5rem;
	}
`
