import {style, keyframes} from 'typestyle';
import {colors} from '../../styles';

const containerRotator = keyframes({
    '0%': {transform: 'rotate(0deg)'},
    '100%': {transform: 'rotate(270deg)'},
});
const spinnerRotator = keyframes({
    '0%': {
        strokeDashoffset: 187,
    },
    '50%': {
        strokeDashoffset: 46.75,
        transform: 'rotate(135deg)',
    },
    '100%': {
        strokeDashoffset: 187,
        transform: 'rotate(450deg)',
    },
});
const styles: {[className: string]: string} = {
    container: style({
        animationName: containerRotator,
        animationDuration: '1.4s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
    }),
    spinner: style({
        strokeDasharray: 187,
        strokeDashoffset: 0,
        transformOrigin: 'center',
        animation: spinnerRotator,
        animationDuration: '1.4s',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
    }),
    inverse: colors.android_icons_icon_navigation_bar,
    color: colors.android_controls_tab_selected,
    colorBlue: colors.android_bars_primary_primary
};

export default styles;
