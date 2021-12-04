import styled from "styled-components"

interface Props {
	name: string
	role: string
	image: string
}

const TeamMemberAvatar = ({ name, role, image }) => {
	return (
		<Wrapper>
			<AvatarImage src={image} />
			<Name>{name}</Name>
			<Role>{role}</Role>
		</Wrapper>
	)
}

export default TeamMemberAvatar

const Wrapper = styled.div``

const AvatarImage = styled.img`
	display: block;
	width: 250px;
	margin: 1rem auto;
`

const Name = styled.p`
	text-transform: uppercase;
	font-weight: 900;
	font-size: 2rem;
	text-align: center;
`
const Role = styled.p`
	text-transform: uppercase;
	font-weight: 900;
	font-size: 1.2rem;
	text-align: center;
`
