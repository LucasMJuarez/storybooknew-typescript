import React, { Children, useMemo, useState, useEffect } from 'react';
import { useWindowSize } from '../../utils/useWindowSize';
import Left from '../../Assets/40/Carousel/Arrows/Left';
import Right from '../../Assets/40/Carousel/Arrows/Right';
import styles from './GenericCarousel.styles';

export type GenericCarouselProps = {
    children: React.ReactNode
    arrows?: boolean
    getCurrentIndex?: Function | undefined; //Send current index to parent
};

const GenericCarousel = ({
    children, arrows, getCurrentIndex
}: GenericCarouselProps): JSX.Element => {
    
    const show = 3;
    const length = useMemo(() => Children.count(children), [children]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [touchPosition, setTouchPosition] = useState<null | number>(null);

    //Check media queries
    const screen = useWindowSize();
    const isMobile = screen?.width !== undefined && screen?.width < 767 ? true : false;
    const [mQuery, setMQuery] = useState<any>(isMobile);

    useEffect(() => {
        if(isMobile) {
            setMQuery(true);
        } else {
            setMQuery(false);
        }; 
        getCurrentIndex?.(currentIndex);
    }, [screen, currentIndex]);

    const goNextItem = () => {
        if (currentIndex <= (length +1 - show)) {
            setCurrentIndex(prevState => prevState + 1);
        }
    };

    const goPreviousItem = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1);
        }
    };

    //Handle when the user start the swipe gesture
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    };

    //Handle when the user move the finger in swipe gesture
    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const touchDown = touchPosition;
        if (touchDown === null) return;
        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;
        if (diff > 5) goNextItem();
        if (diff < -5) goPreviousItem();                                              
        setTouchPosition(null);
    };

    const transitions = {
        desktop: ({
            transform: `translateX(-${currentIndex * (100 / (show))}%)`,
        }),
        mobile: ({
            transform: `translateX(-${currentIndex * (100 / 2 )}%)`,
        })
    };

    return (
        <div data-testid="carousel-wrapper" className={styles.carouselWapper}>
            {
                currentIndex > 0 ? arrows &&
                    <div data-testid="left-arrow-container" className={`${styles.arrowsContainer} ${styles.leftArrow}`}>
                        <Left 
                            data-testid="left-button"
                            onClick={goPreviousItem}
                            background
                        />
                    </div>
                : null
            }
            <div
                data-testid="carousel-content-wrapper"
                className={styles.carouselContentWapper}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                <div
                    data-testid="carousel-content"
                    className={`
                            ${styles.carouselContent} 
                            ${  
                                length === 1 ? '' : 
                                length === 2 ? styles.show2 : 
                                styles.show3
                            }
                        `}
                    style={mQuery ? transitions.mobile : transitions.desktop}
                >    
                    {mQuery ? <div data-testid="first-mobile-item" className={styles.firstMobileItem}/> : null}
                        {children}
                    {mQuery ? <div data-testid="last-mobile-item" className={styles.lastMobileItem}/> : null}
                </div>
            </div>
            { 
                (currentIndex < (length - show)) ? arrows &&
                    <div data-testid="right-arrow-container" className={`${styles.arrowsContainer} ${styles.rightArrow}`}>
                        <Right 
                            data-testid="right-button"
                            onClick={goNextItem}
                            background
                        />
                    </div>  
                : null
            }
        </div>
    )
};

export default GenericCarousel;
