import React, { useMemo } from 'react'
import styles from './CarouselControl.styles';

export type SHOW = 1 | 2 | 3 | 4;

export type CarouselControlProps = {
    show: SHOW;
    size: number;
    currentIndex: number;
}

function CarouselControl({ show, size, currentIndex }: CarouselControlProps) {

    const renderBullets = useMemo(() => {
        let output = [];

        for (let index = 0; index < size; index++) {
            let className = '';
                if (index < currentIndex) {
                    className = styles.bulletDisable;
                } else {
                    if (index <= (currentIndex + (show -1))) {
                        className = styles.bulletActive;
                    } else {
                        className = styles.bulletDisable;
                    }
                };   
                output.push(
                <div key={`bullet-${index}`} data-testid={`bullet-${index}`} className={className} />
            )
        };
        
        return output;
    }, [currentIndex, size, show]);

    return (
        <div data-testid="bullets-container" className={styles.bulletsContainer}>
            {renderBullets}
        </div>
    )
}

export default CarouselControl;
