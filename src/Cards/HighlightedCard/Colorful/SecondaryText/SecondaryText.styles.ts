import {style} from 'typestyle';
import {colors} from '../../../../styles';

const styles: {[className: string]: string} = {
    wrapperCard: style({
        width: '100%',
        $nest: {
            '& :hover': {
                cursor: 'pointer',
            },
        },
    }),
    card: style({
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 10,
        overflow: 'hidden',
        backgroundColor: '#00A9E0',
        borderRadius: 4,
    }),
    container: style({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '24px 16px 16px',
        $nest: {
            '@media only screen and (max-width: 768px)': {
                display: 'flex',
                flexDirection: 'column',
                
            },
        },
    }),
    wrapperText: style({
        display: 'flex',
        flexDirection: 'column',
        $nest: {
            '@media only screen and (max-width: 768px)': {
                $nest: {
                    '& :first-child': {
                        fontSize: '18px',
                        fontWeight: 300,
                        lineHeight: 1.3333333,
                    },
                    '& :last-child': {
                        lineHeight: 1.42857142,
                        fontSize: '14px',
                    },
                },
            },
        },
    }),
    button: style({
        display: 'flex',
        zIndex: 20,
        alignItems: 'center',
        $nest: {
            '@media only screen and (max-width: 768px)': {
                flexDirection: 'column',
                marginTop: '16px',
                alignItems: 'flex-end',
            },
        },
    }),
    wrapperImg: style({
        position: 'absolute',
        zIndex: -10,
        marginLeft: 2,
        width: '116%',
        transform: 'translate(0, -15%)',
        $nest: {
            '@media only screen and (min-width: 768px)': {
                transform: 'translate(-60px, -252px)',
                height: 600,
            },
        },
    }),
    imgMovistar: style({
        height: '100%',
        width: '100%',
    }),
};

export default styles;
