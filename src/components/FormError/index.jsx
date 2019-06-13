import React from 'react';

const FormErrors = ({formErrors}) =>
  <div>
    {Object.keys(formErrors).map((fieldName, errorNumber) => {
      if (formErrors[fieldName].length > 0){
        return (
          <p key={errorNumber}>{formErrors[fieldName]}</p>
        )
      } else {
        return '';
      }
    })}
  </div>

export default FormErrors
