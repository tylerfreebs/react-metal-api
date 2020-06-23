import React from 'react'

export default function GenreList({genreList, onItemClick}){
    return (
        <ul>
            {genreList.map((genre) => (
            <li className={genre.name} key={genre.id}>
                <button onClick={() => onItemClick(genre.id)}>{genre.name}</button>
            </li>
        ))}
        </ul>
    )
}