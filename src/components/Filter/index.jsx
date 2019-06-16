import React from 'react'
import blog from '../Posts/style.module.css'
import {
  FILTER_MODE_ALL,
  FILTER_MODE_ALPHABET,
  FILTER_MODE_DISLIKE,
  FILTER_MODE_LIKE,
  FILTER_MODE_RESET,
} from '../../constants'

const Filter = ( { changeFilterMode } ) => {
  return (
    <>
      <button
        onClick={ () => changeFilterMode(FILTER_MODE_ALL) }
        className={blog.sorting__item}>
        SHOW ALL
      </button>
      <button
        onClick={ () => changeFilterMode(FILTER_MODE_ALPHABET) }
        className={blog.sorting__item}>
        FILTER ALPHABET
      </button>
      <button
        onClick={ () => changeFilterMode(FILTER_MODE_LIKE) }
        className={blog.sorting__item}>
        FILTER LIKE
      </button>
      <button
        onClick={ () => changeFilterMode(FILTER_MODE_DISLIKE) }
        className={blog.sorting__item}>
        FILTER DISLIKE
      </button>
      <button
        onClick={ () => changeFilterMode(FILTER_MODE_RESET) }
        className={blog.sorting__item}>
        RESET FILTER
      </button>
    </>
  )
}
export default Filter
