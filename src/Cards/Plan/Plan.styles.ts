import {style} from 'typestyle';

const styles: {[className: string]: string} = {
    cardWrapper: style({
        width: '100%'
    }),
    card: style({
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 10,
        overflow: 'hidden',
        backgroundColor: '#00A9E0',
        height: 160,
        minWidth: 210,
        margin: '8px 16px',
        borderRadius: 4,
    }),
    container: style({
        boxSizing: 'border-box',
        height: '100%',
        padding: '24px 16px 16px 16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        $nest: {
            '&:hover': {
                cursor: 'pointer',
            },
        },
    }),
    wrapperImg: style({
        display: 'flex',
        justifyContent: 'center',

        position: 'absolute',
        zIndex: -10,
        width: '100%',
        minWidth: 400,
        transform: 'translate(0, -15%)',
        $nest: {
            '@media only screen and (min-width: 768px)': {
                transform: 'translate(0, -30%)',
            },
        },
    }),
    imgMovistar: style({
        height: '100%',
        width: '100%',
        $nest: {
            '@media only screen and (min-width: 768px)': {
                height: '80%',
                width: '80%',
            },
        },
    }),
    tagWrapper: style({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
    }),
};

export default styles;
