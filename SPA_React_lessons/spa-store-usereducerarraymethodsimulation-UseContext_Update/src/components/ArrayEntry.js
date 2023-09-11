import React from 'react';

const ArrayEntry = ({ date }) => {
    return (
        <div>
            {date.toLocaleString()}
        </div>
    );
};

export default ArrayEntry;
