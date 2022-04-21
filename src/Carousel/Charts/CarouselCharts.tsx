import React, {useState, useEffect} from 'react';
import GenericCarousel from '../GenericCarousel';
import CircularText from '../../Charts/CircularText';
import ChartFooter from './ChartFooter';
import ChartDynamicFooter from './ChartDynamicFooter';
import CarouselControl from '../CarouselControl';
import {useWindowSize} from '../../utils/useWindowSize';
import styles from './CarouselCharts.styles';

export type Data = {
    bottomText?: string;
    centerText: string;
    headerText?: string;
    onClick?: Function;
    primaryProgress?: number;
    secondaryProgress?: number;
    size?: number;
    status: 'CRITICAL' | 'OK' | 'WARNING' | 'UNLIMITED' | 'OVER_LIMIT' | 'PLACEHOLDER' | undefined;
    title: string;
    subtitle: string;
    tabIndex?: number;
    role?: string;
    ariaLabel?: string;
    onKeyPress?: React.KeyboardEventHandler;
};

export type CarouselChartsProps = {
    arrows: boolean;
    bullets: boolean;
    showFooter: boolean;
    data: Data[];
};

function CarouselCharts({arrows, bullets, data, showFooter}: CarouselChartsProps) {
    const screen = useWindowSize();
    const isMobile = screen?.width !== undefined && screen?.width < 767 ? true : false;
    const [mQuery, setMQuery] = useState<boolean>(isMobile);

    useEffect(() => {
        if (isMobile) {
            setMQuery(true);
        } else {
            setMQuery(false);
        }
    }, [screen]);

    //Get child current index
    const [currentIndex, setCurrentIndex] = useState(0);
    const getIndex = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className={styles.carouselChartContainer} data-testid='carousel-container'>
            <GenericCarousel arrows={arrows} getCurrentIndex={(index: number) => getIndex(index)}>
                {data.map((item, index) => (
                    <div key={`chart-${index}`}>
                        <CircularText
                            key={`circular-text-${index}`}
                            data-testid={`circular-text-${index}`}
                            bottomText={item.bottomText}
                            centerText={item.centerText}
                            headerText={item.headerText}
                            centerLevel={item.centerText === 'Ilimitados' ? '20L' : '28L'}
                            primaryProgress={item.primaryProgress}
                            secondaryProgress={item.secondaryProgress}
                            size={item.size}
                            status={item.status}
                            onClick={item.onClick}
                            tabIndex={item?.tabIndex}
                            role={item?.role}
                            aria-label={item?.ariaLabel}
                            onKeyPress={item?.onKeyPress || function () {}}
                        />
                        {showFooter && !mQuery ? (
                            <ChartFooter
                                key={`chart-footer-${index}`}
                                data-testid={`chart-footer-${index}`}
                                title={item.title}
                                subtitle={item.subtitle}
                                onClick={item.onClick}
                                rightArrow
                                tabIndex={item?.tabIndex}
                                role={item?.role}
                                aria-label={item?.ariaLabel}
                                onKeyPress={item?.onKeyPress || function () {}}
                            />
                        ) : null}
                    </div>
                ))}
            </GenericCarousel>
            {showFooter && mQuery ? <ChartDynamicFooter data={data} currentIndex={currentIndex} rightArrow /> : null}
            {bullets && (
                <CarouselControl
                    data-testid='carousel-control'
                    show={mQuery ? 1 : 3}
                    size={data.length}
                    currentIndex={currentIndex}
                />
            )}
        </div>
    );
}

export default CarouselCharts;
