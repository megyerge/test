import React from 'react';

export const Result = ({searchPhrase, result, clearSearch}) => (
    <div>
        Finding: {searchPhrase}
        <br/>
        {(result || []).map(item => (
            <p key={item.show.id}>
                {item.show.name}
            </p>
        ))}
        <button id="clearBtn" onClick={clearSearch}>Clear search</button>
    </div>
);

export default Result;
