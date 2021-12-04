import "styled-components"

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			yellow: string
			darkGreen: string
			pink: string
			lightGreen: string
			orange: string
			gray600: string
			white: string
			black: string
			darkBlue: string
			lightBlue: string
		}
	}
}
