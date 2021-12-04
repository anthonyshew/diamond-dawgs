import NextHead from "next/head"

interface Props {
	/** Page description to show for social media and Google(?). */
	description: string
	/** The page title for the browser, social media, and Google */
	title: string
}

/** Provide meta for this view using next/head. */
export const SEO = ({ description, title }: Props) => {
	return (
		<NextHead>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta itemProp="description" content={description} />
			<meta itemProp="name" content="Diamond Dawgs NFT" />

			<meta name="image" content="https://diamonddawgsnft.com/images/dawg_cards.PNG" />
			<meta itemProp="image" content="https://diamonddawgsnft.com/images/dawg_cards.PNG" />

			<meta property="twitter:card" content="summary" />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={description} />
			<meta property="twitter:site" content="https://diamonddawgsnft.com" />
			<meta property="twitter:image" content="https://diamonddawgsnft.com/images/dawg_cards.PNG" />

			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content="https://diamonddawgsnft.com/images/dawg_cards.PNG" />
			<meta property="og:url" content="https://diamonddawgsnft.com" />
			<meta property="og:site_name" content="Diamond Dawgs NFT" />
			<meta property="og:type" content="website" />
		</NextHead>
	)
}

export default SEO
