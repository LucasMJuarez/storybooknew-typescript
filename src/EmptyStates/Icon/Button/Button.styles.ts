import { style } from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }),
    iconContainer: style({
        marginTop: '0px',
    }),
    titleContainer: style({
        marginTop: '13px',
    }),
    descriptionContainer: style({
        marginTop: '2px',
        maxWidth: '648px',
        width: '85%',
    }),
    buttonContainer: style({
        marginTop: '16px',
        marginBottom: '24px',
    }),
};

export default styles;
