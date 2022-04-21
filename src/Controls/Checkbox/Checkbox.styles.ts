import {style} from 'typestyle';

const styles: {[className: string]: string} = {
    CheckboxContainer: style({
        display: 'inlineBlock',
        verticalAlign: 'center',
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

