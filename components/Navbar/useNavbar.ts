import { useMemo } from "react"
import useWindowDimensions from "../../hooks/useWindowDimensions"
import { BasePath } from "./types"

const useNavBar = () => {
    const { screenWidth } = useWindowDimensions()

    const isMobile = useMemo(() => !!screenWidth && screenWidth <= 780 ,[screenWidth])

    const basePaths: BasePath[] = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "/blog",
            name: "Articles"
        },
        {
            path: "/about",
            name: "About"
        }
    ]
    
    return {
        isMobile,
        basePaths
    }
}

export default useNavBar;