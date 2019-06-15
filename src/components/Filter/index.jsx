import React from 'react'
import blog from '../Posts/style.module.css'

const Filter = ( { filterLike, filterDislike, filterAll, filterAlphabet, filterReset } ) => {
  return (
    <>
      <button
        onClick={ filterAll }
        className={blog.sorting__item}>
        SHOW ALL
      </button>
      <button
        onClick={ filterAlphabet }
        className={blog.sorting__item}>
        FILTER ALPHABET
      </button>
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
        onClick={ filterReset }
        className={blog.sorting__item}>
        RESET FILTER
      </button>
    </>
  )
}
export default Filter
