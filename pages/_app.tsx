import { ThemeProvider } from "styled-components"
import GlobalStyles from "../styles/global"

const colors = {
	yellow: "#F5F64A",
	gold: "#e7bc30",
	darkGreen: "#243E36",
	pink: "#FFDDD1",
	lightGreen: "#81B29A",
	orange: "#E39478",
	gray600: "#808080",
	white: "#FFFFFF",
	black: "#000000",
	darkBlue: "#1D84C0"
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
