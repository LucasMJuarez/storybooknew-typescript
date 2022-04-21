import {style} from 'typestyle';

const styles: {[className: string]: string} = {
    container: style({
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        padding: '16px',
    }),
    link: style({
        display: 'flex',
        alignSelf: 'center',
        marginTop: '22px',
    }),
};

export default styles;
