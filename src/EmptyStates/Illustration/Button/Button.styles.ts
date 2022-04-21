import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding:'16px',
    }),
    titleContainer: style({
        marginTop: '12px'
    }),
    descriptionContainer: style({
        marginTop: '12px',
        width: '50%',
        $nest: {
            '@media only screen and (max-width: 496px)': {
                width: '100%',
            },
        },
    }),
};

export default styles;
