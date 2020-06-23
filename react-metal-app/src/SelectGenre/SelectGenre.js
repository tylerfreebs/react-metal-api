import React from 'react';
import './SelectGenre.css';
import { useGenre } from '../provider/genres'
import GenreList from './GenreList';

export default function SelectGenre() {
    const genre = useGenre();

    return(
        <GenreList />
    )
}