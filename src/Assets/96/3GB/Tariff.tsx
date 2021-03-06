import * as React from 'react';
import styles from './Tariff.styles';

export type Props = {
    title?: string;
};

function CameraCircleGrey({title}: Props) {
    return (
        <div className={styles.wrapper}>
            <svg
                width='96'
                height='97'
                viewBox='0 0 96 97'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                className={styles.svgContainer}
            >
                <defs>
                    <path d='M4 0h88a4 4 0 0 1 4 4v88a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z' id='a' />
                </defs>

                <g transform='translate(0 .5)' fill='none' fillRule='evenodd'>
                    <mask id='b' fill='#fff'>
                        <use xlinkHref='#a' />
                    </mask>
                    <use fill='#68CA25' fillRule='nonzero' xlinkHref='#a' />
                    <path
                        d='M-453.728-443.993c-20.221 82.043-28.035 167.554-10.722 269.346C-448.492-80.767-420.216.26-401.16 44.919c6.57 15.384 16.741 31.436 24.605 41.31 22.619 28.398 60.263 26.584 76.08 18.842 17.243-8.43 37.063-28.786 29.891-75.278-3.47-22.458-13.47-55.32-19.098-73.583-17.272-56.048-40.262-123.673-42.268-171.849-2.678-64.437 22.9-72.876 39.881-76.583 28.567-6.247 52.51 24.91 75.258 63.959 27.153 46.601 73.684 129.173 111.639 192.245C-70.908 20.916-7.676 81.875 93.872 77.69c103.524-4.254 179.835-43.492 219.144-167.026 29.42-92.415 49.47-161.476 81.738-232.2 37.102-81.326 86.592-124.858 128.269-111.566 38.697 12.335 48.356 49.91 48.818 105.14.411 48.853-5.276 102.708-9.7 142.275-1.605 14.358-4.513 43.243-3.33 59.275 2.337 31.526 16.079 63.013 51.817 68.054 38.066 5.36 68.608-24.86 80.805-61.388 4.815-14.398 8.917-36.428 11.134-52.061 11.184-78.945 14.083-132.003 9.047-212.78-5.907-94.449-24.514-180.577-56.972-255.118-31.054-71.282-80.936-116.967-144.91-121.002-70.814-4.464-152.08 42.207-194.71 132.76-39.299 83.468-70.734 169.158-89.802 212.89-19.339 44.35-47.765 71.68-91.467 76.254C80.32-333.223 34.28-371.754.559-426.695c-29.399-47.887-87.666-139.067-118.84-169.706-29.289-28.786-62.74-64.806-132.381-63.71-55.047.867-156.655 27.83-203.066 216.118z'
                        fillOpacity='.1'
                        fill='#FFF'
                        fillRule='nonzero'
                        mask='url(#b)'
                    />
                </g>
            </svg>
            <div className={styles.childContainer}>
                <span>{title}</span>
            </div>
        </div>
    );
}

export default CameraCircleGrey;
