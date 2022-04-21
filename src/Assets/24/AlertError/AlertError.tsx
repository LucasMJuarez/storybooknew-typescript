import * as React from 'react';

function AlertError() {
    return (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 3C16.9706 3 21 7.03031 21 12.0018C21 16.9733 16.9706 21.0037 12 21.0037C7.02939 21.0037 3 16.9733 3 12.0018C3 7.03031 7.02939 3 12 3ZM12 5C8.13406 5 5 8.13477 5 12.0018C5 15.8689 8.13406 19.0037 12 19.0037C15.8659 19.0037 19 15.8689 19 12.0018C19 8.13477 15.8659 5 12 5Z'
                fill='#FF374A'
            />
            <rect x='11' y='7' width='2' height='7' rx='1' fill='#FF374A' />
            <circle cx='12' cy='16' r='1' fill='#FF374A' />
        </svg>
    );
}

export default AlertError;
