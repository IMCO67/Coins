import React, { useState } from 'react'
import { ContextAuthor } from './ContextAuthor'

export const AuthorProvider = ({ children }) => {
    const [author, setAuthor] = useState("Ian")

    return (
        <ContextAuthor.Provider value={{ author, setAuthor }}>
            {children}
        </ContextAuthor.Provider>
    )
}