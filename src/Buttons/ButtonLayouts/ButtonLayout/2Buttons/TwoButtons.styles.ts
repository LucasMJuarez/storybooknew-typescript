import {style} from 'typestyle';

const styles: {[className: string]: string} = {
    container: style({
        display: 'flex',
        padding: '8px',
        justifyContent: 'center',
        flexWrap: 'wrap',
        $nest: {
            '& button': {
                margin: '8px',
            },
            '@media only screen and (max-width: 767px)': {
                $nest: {
                    '& button': {
                        width: '45%',
                    },
                },
            },
        },
    }),
};

export default styles;
