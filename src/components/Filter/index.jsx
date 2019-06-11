import React from 'react'
import blog from '../Posts/style.module.css'

const Filter = ( { filterLike, filterDislike, filterAll, filterAlph } ) => {
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
        onClick={ filterAlph }
        className={blog.sorting__item}>
        ALPH
      </button>
    </>
  )
}
export default Filter
