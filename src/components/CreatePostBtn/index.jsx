import React from 'react'
import { Link } from 'react-router-dom'

import button from './style.module.css'

const CreatePostButton = () => {
  return (
    <Link to={ `/create-post` }>
      <button className={button.page}>
        Create new post
      </button>
    </Link>
  )
}

export default CreatePostButton
