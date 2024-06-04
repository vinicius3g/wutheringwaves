import { useState, useEffect } from 'react';

interface Size {
    width: number | undefined;
    height: number | undefined;
}

export default function useWindowSize(): Size {
    const [windowSize, setWindowSize] = useState<Size>({
        width: undefined,
        height: undefined
    });
    useEffect(() => {
        function handleResize(): void {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener('resize', handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
}
