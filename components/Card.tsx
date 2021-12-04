import styled from "styled-components"

export interface Props {
	image: string
	title: string
	backgroundColor: string
	textColor: string
}

const Card: React.FC<Props> = ({ image, title, backgroundColor, textColor, children }) => {
	return (
		<Container>
			<Img src={image} />
			<Body backgroundColor={backgroundColor}>
				<Title>{title}</Title>
				{children}
			</Body>
		</Container>
	)
}

export default Card

const Container = styled.div`
	width: 300px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	border-radius: 24px;
	overflow: hidden;
	box-shadow: 10px 25px 25px 1px black;
`

const Img = styled.div<{ src: string }>`
	width: 100%;
	height: 200px;
	background-image: url(${(props) => props.src});
	background-position: center;
	background-size: cover;
`
const Body = styled.div<{ backgroundColor: string }>`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 1rem;
	background-color: ${(props) => props.backgroundColor};
	font-weight: 700;
	border-radius: 0 0 24px 24px;
`

const Title = styled.h3`
	font-size: 32px;
	font-weight: 900;
	text-align: center;
	text-transform: uppercase;
`
