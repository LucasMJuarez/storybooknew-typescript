import {style} from 'typestyle';

const styles = {
    carouselWapper: style({
        display: "flex",
        width: "100%",
        position: "relative"
    }),
    carouselContentWapper: style({
        overflow: "hidden",
        width: "100%",
        height: "100%"
    }),
    carouselContent: style({
        display: "flex",
        transition: "all 250ms linear",
        '-ms-overflow-style': "none",
        scrollbarWidth: "none",
        $nest: {
            "&::-webkit-scrollbar": {
                display: "none",
            },
            "&>*": {
                display: "flex",
                flexShrink: 0,
                flexDirection: "column",
                alignItems: "center",
                boxSizing: "border-box",
                scrollSnapAlign: "start",
                scrollSnapStop: "always",
                $nest: {
                    '@media only screen and (min-width: 767px)': {
                        width: "100%"
                    },
                    '@media only screen and (max-width: 767px)': {
                        width: "50%",
                        scrollSnapAlign: "center",
                        scrollSnapStop: "always",
                    },
                }
            }
        }
    }),
    show2: style({
        $nest: {
            '@media only screen and (min-width: 767px)': {
                $nest: {
                    "&>*": {
                        width: "50%"
                    },
                }
            },
        }
    }),
    show3: style({
        $nest: {
            '@media only screen and (min-width: 767px)': {
                $nest: {
                    "&>*": {
                        width: "33.33%"
                    },
                }
            },
        },
    }),
    firstMobileItem: style({
        display: "none !important",
        $nest: {
            '@media only screen and (max-width: 767px)': {
                display: 'flex !important',
                flexShrink: 0,
                width: '25% !important',
                scrollSnapAlign: 'start',
                scrollSnapStop: 'normal',
            },
        },
    }),
    lastMobileItem: style({
        display: "none !important",
        $nest: {
            '@media only screen and (max-width: 767px)': {
                display: 'flex !important',
                flexShrink: 0,
                width: '25% !important',
                scrollSnapAlign: 'end',
                scrollSnapStop: 'normal',
            },
        },
    }),
    arrowsContainer: style({
        display: 'flex',
        alignItems: 'center',
        top: "0px",
        height: "100%",
        maxHeight: '160px',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                display: 'none',
            },
        },
    }),
    leftArrow: style({
        position: 'absolute',
        left: 0
    }),
    rightArrow: style({
        position: 'absolute',
        right: 0
    }),
};

export default styles;
