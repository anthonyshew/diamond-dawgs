import styled from "styled-components"
import Link from "next/link"
import SEO from "@Components/SEO"

const VipRedeem = () => {
	return (
		<Main>
			<SEO title="VIP Redemptions | Diamond Dawgs NFT" description="VIP Redemptions | Coming Soon" />
			<H1>VIP Redemptions</H1>
			<ComingSoon>Coming Soon</ComingSoon>
			<Link href="/">
				<StyledLink> {"<"} Back to home</StyledLink>
			</Link>
		</Main>
	)
}

export default VipRedeem

const Main = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	background: ${(props) => props.theme.colors.darkGreen};
`

const H1 = styled.h1`
	color: ${(props) => props.theme.colors.white};
	text-transform: uppercase;
	font-size: 4rem;
	font-weight: 900;
	text-align: center;

	@media (max-width: 600px) {
		font-size: 2rem;
	}
`

const ComingSoon = styled.h1`
	color: ${(props) => props.theme.colors.white};
	text-transform: uppercase;
	font-size: 3rem;
	font-weight: 900;

	@media (max-width: 600px) {
		font-size: 1.5rem;
	}
`

const StyledLink = styled.a`
	color: ${(props) => props.theme.colors.white};
	font-family: "Poppins";
	font-size: 2rem;
	text-decoration: underline;
	cursor: pointer;

	@media (max-width: 600px) {
		font-size: 1.2rem;
	}
`
