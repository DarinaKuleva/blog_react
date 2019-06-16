import React from 'react';
import createPost from '../CreateNewPost/style.module.css'

const FormErrors = ({formErrors}) =>
  <div>
    {Object.keys(formErrors).map((fieldName, errorNumber) => {
      if (formErrors[fieldName].length > 0){
        return (
          <p key={errorNumber}
             className={createPost.form_error}>{formErrors[fieldName]}</p>
        )
      } else {
        return '';
      }
    })}
  </div>

export default FormErrors
