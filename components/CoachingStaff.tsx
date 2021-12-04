import styled from "styled-components"
import TeamMemberAvatar from "@Components/TeamMemberAvatar"

const teamMembers = [
	{
		name: "Matt",
		role: "Developer",
		image: "/images/dawg_4.PNG"
	},
	{
		name: "Flow",
		role: "Strategy",
		image: "/images/dawg_3.PNG"
	},
	{
		name: "Ohio",
		role: "Social Media",
		image: "/images/dawg_2.PNG"
	},
	{
		name: "Daedalus",
		role: "Discord Manager",
		image: "/images/dawg_1.PNG"
	}
]

const CoachingStaff = () => {
	return (
		<Container>
			<Pretitle id="team">meet the</Pretitle>
			<Title>Coaching Staff</Title>
			<MaxWidth>
				<Img src="/images/doza.PNG" />
				<Flex>
					<H3>Evan Mendoza</H3>
					<SocialIcons>
						<a href="https://www.instagram.com/e_mendoza18/?hl=en" target="_blank" rel="noopener noreferrer">
							<Social src="/images/instagram.PNG" />
						</a>
						<a href="https://twitter.com/e_mendoza18" target="_blank" rel="noopener noreferrer">
							<Social src="/images/twitter.PNG" />
						</a>
					</SocialIcons>
				</Flex>
				<Info>Artist/Athlete, Creator of the DiamondDawgs</Info>
			</MaxWidth>
			<Bio>
				I grew up not knowing how creative I really was. Having a desire to learn 3D softwares by myself in high school
				should have been a tell. It wasn't until my first 1/1 sold back in March of 2021 I felt my worth.
			</Bio>
			<Bio>
				Along with feeling worthy, I also felt the power to translate the message of being more than an athlete in the
				NFT space. This is my WHY!
			</Bio>
			<TeamGrid>
				{teamMembers.map((member) => {
					return <TeamMemberAvatar name={member.name} role={member.role} image={member.image} />
				})}
			</TeamGrid>
		</Container>
	)
}

export default CoachingStaff

const Container = styled.div`
	padding: 4rem 2rem;
`

const Pretitle = styled.p`
	text-align: center;
	font-weight: 700;
	letter-spacing: 2px;
	font-size: 1.5rem;
`

const Title = styled.h2`
	margin-bottom: 3rem;
	text-align: center;
	text-transform: uppercase;
	font-weight: 900;
	font-size: 4rem;

	@media (max-width: 600px) {
		font-size: 2.8rem;
	}
`

const MaxWidth = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`

const Img = styled.img`
	display: block;
	width: 40%;
	max-width: 450px;
	min-width: 250px;

	@media (max-width: 800px) {
		margin: 0 auto;
	}
`

const Flex = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 800px) {
		flex-direction: column;
	}
`

const H3 = styled.h3`
	width: 40%;
	max-width: 450px;
	min-width: 250px;
	text-align: center;
	font-weight: 900;
	font-size: 2rem;

	@media (max-width: 800px) {
		margin: 1.5rem 0;
	}
`

const SocialIcons = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 24px;
`

const Social = styled.img`
	width: 50px;
	height: 50px;
`

const Info = styled.div`
	font-weight: 700;
	font-size: 1.2rem;
	text-transform: uppercase;

	@media (max-width: 800px) {
		margin: 1.5rem 0;
		text-align: center;
	}
`

const Bio = styled.p`
	margin: 1rem auto;
	max-width: 750px;
	font-weight: 600;
	font-size: 1.1rem;
	letter-spacing: 0.05rem;
`

const TeamGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 5rem 1rem;

	@media (max-width: 800px) {
		grid-template-columns: repeat(1, 1fr);
	}
`
