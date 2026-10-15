import React from 'react'
import { useContext } from 'react'
import { ContextAuthor } from '../context/ContextAuthor'

export const About = () => {
  const {author, setAuthor} = useContext(ContextAuthor);
  return (
    <div> Página de {author}: La página sirve para que entiendas todo sobre las monedas virtuales y así. OwO </div>
  )
}
