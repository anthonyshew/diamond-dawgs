import { ThemeProvider } from "styled-components"
import GlobalStyles from "../styles/global"

const colors = {
	yellow: "#F5F64A",
	darkGreen: "#243E36",
	pink: "#FFDDD1",
	lightGreen: "#81B29A",
	orange: "#E39478",
	gray600: "#808080",
	white: "#FFFFFF",
	black: "#000000",
	darkBlue: "#479DCF",
	lightBlue: "#6BE7E5"
}

const MyApp = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={{ colors }}>
			<GlobalStyles />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
