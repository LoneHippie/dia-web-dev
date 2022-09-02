import { useMemo } from "react"
import useWindowDimensions, { ScreenSize } from "@utils/hooks/useWindowDimensions"
import { BasePath } from "./types"

const useNavBar = () => {
    const { screenSize } = useWindowDimensions()

    const isMobile = useMemo(() => screenSize === ScreenSize.mobile ,[screenSize])

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