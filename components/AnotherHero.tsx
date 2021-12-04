import styled from "styled-components"

const AnotherHero = () => {
	return (
		<Container>
			<H2>Swing it dawg!</H2>
			<P>
				Standard projects that solely have a roadmap isn't what we are going for here. Our community is built on a
				vision and a movement. We have big dreams and will continue to innovate our unique utilities, amazing artwork,
				and provide lifetime experiences found nowhere else on the market. This is our obligation, along with our pledge
				to give back to charities and foundations in need. That being said, we do think it is vital to share with you a
				few ideas we have in mind:
			</P>
		</Container>
	)
}

export default AnotherHero

const Container = styled.div`
	background-color: ${(props) => props.theme.colors.lightGreen};
`

const H2 = styled.h2`
	text-align: center;
	font-size: 4.5rem;
	font-weight: 700;
	letter-spacing: 0.1rem;
	text-transform: uppercase;
	color: ${(props) => props.theme.colors.white};
`

const P = styled.p`
	margin: 0 auto;
	max-width: 36rem;
	margin-top: 1.5rem;
	font-weight: 600;
	font-size: 1.125rem;
	letter-spacing: 0.04rem;
`
