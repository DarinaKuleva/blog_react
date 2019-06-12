import React from 'react'
import blog from '../Posts/style.module.css'

const Filter = ( { filterLike, filterDislike, filterAll, filterAlphabet, filterReset } ) => {
  return (
    <>
      <button
        onClick={ filterLike }
        className={blog.sorting__item}>
        FILTER LIKE
      </button>
      <button
        onClick={ filterDislike }
        className={blog.sorting__item}>
        FILTER DISLIKE
      </button>
      <button
        onClick={ filterAll }
        className={blog.sorting__item}>
        ALL
      </button>
      <button
        onClick={ filterAlphabet }
        className={blog.sorting__item}>
        ALPHABET
      </button>
      <button
        onClick={ filterReset }
        className={blog.sorting__item}>
        RESET
      </button>
    </>
  )
}
export default Filter
