import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        padding: '16px 16px',
        cursor: 'default',
    }),
    onHover: style({
        $nest: {
            '&:hover': {
                cursor: 'pointer',
            },
        },
    }),
    textContainer: style({
        display: 'flex',
        flexDirection: 'column',
    }),
    icon: style({
        marginRight: '16px',
    }),
    amountContainer: style({
        flexWrap: 'wrap',
        marginLeft: ' auto',
    }),
    info: style({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: '4px',
    }),
    info3L: style({
        marginTop: '18px',
    }),
    labelContainer: style({
        marginTop: '4px',
    }),
};

export default styles;
