import {style} from 'typestyle';

const styles = {
    mainContainer: style({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '120px',
        paddingLeft: '16px;',
    }),
    subContainer: style({
        display: 'flex',
        margin: '15px',
        width: '100%',
    }),
    textBox: style({
        display: 'flex',
        flexDirection: 'column',
        paddingRight: '10px',
    }),
    backgroundImg: style({
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: -10,
    }),
    card: style({
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 10,
        overflow: 'hidden',
        backgroundColor: '#00a9e0',
    }),
};

export default styles;
