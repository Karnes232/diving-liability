import React from "react"

const Name = ({handleChange}) => {
  return (
    <>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="name"
          name="firstName"
          id="firstName"
          className="contactFormInput peer"
          placeholder=" "
          required
          onChange={handleChange}
        />
        <label htmlFor="firstName" className="contactFormLabel">
          First Name
        </label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="name"
          name="lastName"
          id="lastName"
          className="contactFormInput peer"
          placeholder=" "
          required
          onChange={handleChange}
        />
        <label htmlFor="lastName" className="contactFormLabel">
          Last Name
        </label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="date"
          name="birthdate"
          id="birthdate"
          className="contactFormInput peer"
          placeholder=" "
          required
          onChange={handleChange}
        />
        <label htmlFor="birthdate" className="contactFormLabel">
          Birthdate
        </label>
      </div>
    </>
  )
}

export default Name
