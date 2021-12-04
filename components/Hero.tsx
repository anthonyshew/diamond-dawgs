import styled from "styled-components"

const Hero = () => {
	return (
		<Section>
			<PreH1>Welcome to the</PreH1>
			<H1>Diamond Dawgs</H1>
			<Hr />
			<ParagraphWrapper>
				<Paragraph>
					The DiamondDawgs Collection consists of 7,000 generative baseball characters, hand designed and drawn by
					professional baseball player Evan Mendoza of the St. Louis Cardinals organization. This is more than just
					baseball characters, this is the evolution we are about to witness on how athletes are able to express
					themselves off the playing field. By joining us, you're not investing into some random project, you're helping
					build this positive movement.
				</Paragraph>
			</ParagraphWrapper>
			<NumbersContainer>
				<ButtonContainer>
					<Price>
						<span>PRICE:</span>
						<span> 0.03 ETH</span>
					</Price>
					<ConnectWallet>CONNECT WALLET</ConnectWallet>
				</ButtonContainer>
				<LargeNumber>330</LargeNumber>
			</NumbersContainer>
			<ReleaseWrapper className="flex flex-col justify-center items-center text-center text-yellow-500 font-bold">
				<H2>RELEASE DATE</H2>
				<TBD>TBD</TBD>
			</ReleaseWrapper>
		</Section>
	)
}

export default Hero

const Section = styled.section`
	background: ${(props) => props.theme.colors.darkGreen};
	padding-top: 3rem;
	color: ${(props) => props.theme.colors.white};
`

const PreH1 = styled.div`
	text-align: center;
	font-size: 2.25rem;
	font-weight: 700;
	letter-spacing: 0.1em;
	text-transform: uppercase;
`

const H1 = styled.h1`
	text-align: center;
	font-size: 4.5rem;
	font-weight: 700;
	letter-spacing: 0.1rem;
	text-transform: uppercase;
`

const Hr = styled.hr`
	margin: 2rem 0;
	height: 1rem;
	border: none;
	background: ${(props) => props.theme.colors.yellow};
`

const ParagraphWrapper = styled.div`
	padding: 0 3rem;
`

const Paragraph = styled.p`
	margin: 0 auto;
	max-width: 90rem;
	font-weight: 600;
	font-size: 1.25rem;
	letter-spacing: 0.1rem;
	line-height: 2rem;
`

const NumbersContainer = styled.div`
	position: relative;
	z-index: 1;
	display: flex;
	justify-content: space-around;
	margin-top: 2rem;
`

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 10;

	@media (max-width: 1000px) {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`

const Price = styled.div`
	font-weight: 700;
	font-size: 2rem;

	@media (max-width: 1000px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`

const ConnectWallet = styled.button`
	background-image: linear-gradient(
		to right,
		${(props) => props.theme.colors.darkBlue} 50%,
		${(props) => props.theme.colors.lightBlue} 100%
	);
	border-radius: 9999px;
	padding: 0.5rem 3rem;
	font-size: 1.25rem;
	line-height: 1.75rem;
	font-weight: 500;
	letter-spacing: 0.1em;
	border: none;
	color: ${(props) => props.theme.colors.white};
	letter-spacing: 0.2rem;
	font-weight: 600;
	cursor: pointer;
	margin-top: 2rem;
`

const LargeNumber = styled.p`
	color: ${(props) => props.theme.colors.lightGreen};
	font-size: 20rem;
	font-weight: 800;

	@media (max-width: 650px) {
		font-size: 10rem;
	}
`

const ReleaseWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${(props) => props.theme.colors.yellow};
	font-weight: 600;
	margin-top: 2rem;
`

const H2 = styled.h2`
	font-size: 1.25rem;
	line-height: 1.75rem;
`

const TBD = styled.p`
	font-size: 1.875rem;
	line-height: 2.25rem;
`
