import { useMediaQuery } from "hooks/useMediaQuery"

export const useMobile = () => {
	const isMobile = useMediaQuery("(max-width: 1000px)")

	return isMobile
}
