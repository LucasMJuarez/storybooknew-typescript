import {style} from 'typestyle';

const styles: {[className: string]: string} = {
    button: style({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        $nest: {
            '&:hover': {
                cursor: 'pointer',
            },
            '&:disabled': {
                cursor: 'default',
            },
        },
    }),
};

export default styles;
