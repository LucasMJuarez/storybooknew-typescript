import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '4px 16px',
    }),
    topPlaceholder: style({
        paddingTop: '20px',
    }),
    bottomPlaceholder: style({
        paddingBottom: '20px',
    }),
};

export default styles;
