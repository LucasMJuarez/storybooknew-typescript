import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }),
    iconContainer: style({
        marginTop: '32px',
    }),
    labelContainer: style({
        marginTop: '40px',
    }),
    titleContainer: style({
        marginTop: '13px',
    }),
    descriptionContainer: style({
        marginTop: '12px',
        maxWidth: '648px',
        width: '85%',
    }),
};

export default styles;
