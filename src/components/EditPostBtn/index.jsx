import React from 'react'
import { Link } from 'react-router-dom'

const EditPostButton = () => {
  return (
    <Link to={ `/edit-post` }>
      <button>
       Edit post
      </button>
    </Link>
  )
}

export default EditPostButton
