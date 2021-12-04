import styled from "styled-components"

const FullHeightDawg = ({ ...props }) => {
	return (
		<Container>
			<Img src="/images/standing_dawg.PNG" />
		</Container>
	)
}

export default FullHeightDawg

const Container = styled.div`
	background: linear-gradient(
		0deg,
		${(props) => props.theme.colors.lightGreen} 0%,
		${(props) => props.theme.colors.lightGreen} 50%,
		${(props) => props.theme.colors.darkGreen} 50%,
		${(props) => props.theme.colors.darkGreen} 50%,
		${(props) => props.theme.colors.darkGreen} 100%
	);
`

const Img = styled.img`
	display: block;
	width: 50%;
	max-width: 1200px;
	min-width: 300px;
	margin: 0 auto;
`
