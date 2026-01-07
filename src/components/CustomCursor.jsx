import { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const trailerRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const onMouseMove = (e) => {
            const { clientX, clientY } = e;

            // Move the main cursor dot instantly
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
            }

            // Move the trailer with a slight delay/smoothness via CSS or RAF if more complex
            if (trailerRef.current) {
                trailerRef.current.animate({
                    transform: `translate3d(${clientX - 16}px, ${clientY - 16}px, 0)`
                }, {
                    duration: 500,
                    fill: 'forwards'
                });
            }
        };

        const onMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseover', onMouseOver);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', onMouseOver);
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className={`custom-cursor-dot ${isHovering ? 'hovering' : ''}`} />
            <div ref={trailerRef} className={`custom-cursor-trailer ${isHovering ? 'hovering' : ''}`} />
        </>
    );
};

export default CustomCursor;
