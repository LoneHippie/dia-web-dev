import { useEffect, useState } from 'react';

const getWindowDimensions = () => {
    let screenWidth: number | undefined;
    let screenHeight: number | undefined;

    //for checking if window is defined during node build process
    if (typeof window !== 'undefined') {
        screenWidth = window.innerWidth;
        screenHeight = window.innerHeight;
    }

    return {
        screenWidth,
        screenHeight
    };
};
  
const useWindowDimensions = () => {
    const [ windowDimensions, setWindowDimensions ] = useState(getWindowDimensions());
  
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
};  

export default useWindowDimensions;