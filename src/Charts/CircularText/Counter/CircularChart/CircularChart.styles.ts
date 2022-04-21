import {style, keyframes} from 'typestyle';

const animations: {[className: string]: string} = {
    progress: keyframes({
        from: {
            strokeDashoffset: 0,
        },
    }),
};

const styles: {[className: string]: string} = {
    container: style({
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }),

    svg: style({
        position: 'absolute',
        top: 0, // Don't remove, this is needed for iOS
        left: 0, // Don't remove, this is needed for iOS
        transform: 'translate3d(0,0,0)',
    }),

    circle: style({
        animationName: animations.progress,
        animationDelay: '1s',
        animationDuration: '0.5s',
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-out',
    }),

    loading: style({
        animationDuration: '5s',
        animationIterationCount: 'infinite',
    }),
};
export default styles;
