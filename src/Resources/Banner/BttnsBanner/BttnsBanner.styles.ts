import {style} from 'typestyle';

const styles: {[className: string]: string} = {
    container: style({
        display: 'flex',
        justifyContent: 'flex-end',
        $nest: {
            '& :first-child:not(button *)': {
                marginRight: '8px',
            },
        },
    }),
};

export default styles;
