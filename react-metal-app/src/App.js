import React from 'react';
import SearchBand from './SearchBand/SearchBand'
import SelectGenre from './SelectGenre/SelectGenre'


export default function App({ genres }) {
    return (
        <div>
            <ul>
                {genres.map((genre) => (
                    <li key={genre.id}>
                        <button>{genre.name}</button>
                    </li>
                ))}
            </ul>
            <SearchBand />
            <SelectGenre />
        </div>
    );
  
}
