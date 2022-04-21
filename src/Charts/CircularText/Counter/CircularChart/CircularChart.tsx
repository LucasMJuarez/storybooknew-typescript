import * as React from 'react';
import styles from './CircularChart.styles';
import {colors} from '../../../../styles';

type CircularChartSvgProps = {
    color: string;
    size: number;
    percentage?: number;
    animate?: boolean;
    stroke?: number;
    onAnimationEnd?: React.AnimationEventHandler<SVGCircleElement>;
    inverseAnimation?: boolean;
    isLoading?: boolean;
};

const CircularChartSvg = ({
    animate,
    color,
    percentage = 100,
    size,
    stroke = 2,
    onAnimationEnd,
    inverseAnimation = false,
    isLoading = false,
}: CircularChartSvgProps) => {
    const classes = styles;
    const radius = size / 2 - stroke;
    const perimeter = 2 * Math.PI * radius;
    const notFilledPerimeter = perimeter - (percentage * perimeter) / 100;
    const filledPerimeter = perimeter - notFilledPerimeter;
    const strokeDashoffset = inverseAnimation ? filledPerimeter : notFilledPerimeter;
    const strokeDasharray = inverseAnimation ? `${filledPerimeter}, ${perimeter}` : perimeter;
    const cx = size / 2;
    const cy = cx;

    return (
        <svg className={classes.svg} height={size} width={size} role='presentation' viewBox={`0 0 ${size} ${size}`}>
            <circle
                cx={cx}
                cy={cy}
                r={radius}
                className={`${animate && onAnimationEnd ? classes.circle + ' ' : null}${
                    isLoading ? classes.loading : null
                }`}
                fill='none'
                stroke={color}
                strokeWidth={stroke}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap='round'
                transform={`rotate(-90, ${cx}, ${cy})`}
                onAnimationEnd={onAnimationEnd}
            />
        </svg>
    );
};

type CircularChartProps = {
    disableAnimation?: boolean;
    children: React.ReactNode;
    color?: string;
    colorBackground?: string;
    secondaryColor?: string;
    percentage: number;
    secondaryPercentage?: number;
    size?: number;
    stroke?: number;
    inverseAnimation?: boolean;
    hideProgress?: boolean;
    isLoading?: boolean;
    tabIndex?: number;
    role?: string;
    ariaLabel?: string;
    onKeyPress?: React.KeyboardEventHandler;
};

const needsAnimation = (percentage: number | undefined, inverseAnimation: boolean | undefined) =>
    inverseAnimation ? percentage !== 0 : percentage !== 100;

const CircularChart = ({
    colorBackground,
    color,
    size = 48,
    disableAnimation = false,
    hideProgress = false,
    children,
    inverseAnimation,
    percentage,
    secondaryPercentage,
    secondaryColor,
    stroke,
    isLoading,
    tabIndex,
    role,
    ariaLabel,
    onKeyPress,
}: CircularChartProps) => {
    const classes = styles;
    const [animate, setAnimate] = React.useState(true);
    const [showProgress, setShowProgress] = React.useState(!hideProgress);

    const backgroundColor = colorBackground || colors.grey_4;

    /**
     * Workaround for some browsers (safari), which show a tiny arc section when the percentage is 0
     */
    const handleAnimationEnd = React.useCallback(() => {
        if (percentage <= 0) {
            setShowProgress(false);
        }
        setAnimate(false);
    }, [percentage]);

    const progressColor = color || (percentage <= 20 ? colors.egg : colors.movistar_blue);
    const shouldAnimate = !disableAnimation && animate;
    const animatePrimary = shouldAnimate && needsAnimation(percentage, inverseAnimation);
    const animateSecondary = shouldAnimate && needsAnimation(secondaryPercentage, inverseAnimation);

    return (
        <div
            className={classes.container}
            style={{height: size, minWidth: size}}
            tabIndex={tabIndex}
            role={role}
            aria-label={ariaLabel}
            onKeyPress={onKeyPress || function () {}}
        >
            <CircularChartSvg color={backgroundColor} size={size} stroke={stroke} />
            {secondaryPercentage && secondaryColor && (
                <CircularChartSvg
                    color={secondaryColor}
                    size={size}
                    stroke={stroke}
                    animate={animateSecondary}
                    inverseAnimation={animateSecondary && inverseAnimation}
                    percentage={secondaryPercentage}
                    onAnimationEnd={handleAnimationEnd}
                />
            )}
            {showProgress && (
                <CircularChartSvg
                    color={progressColor}
                    size={size}
                    stroke={stroke}
                    animate={animatePrimary}
                    inverseAnimation={animatePrimary && inverseAnimation}
                    percentage={percentage}
                    onAnimationEnd={handleAnimationEnd}
                    isLoading={isLoading}
                />
            )}
            {children}
        </div>
    );
};

export default CircularChart;
