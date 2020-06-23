import React, { createContext, useContext } from 'react'
import { genres } from '../data'

const GenreContext = createContext()

export function GenreProvider({children}) {
    return <GenreContext.Provider value={genres}>{children}</GenreContext.Provider>
}

export function useGenre(){
    const context = useContext(GenreContext)
    return context
}