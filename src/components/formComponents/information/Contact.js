import React, { useState } from "react"
import Input from "react-phone-number-input/input"
const Contact = ({handleChange}) => {
  const [phoneValue, setPhoneValue] = useState()
  return (
    <>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="email"
          name="email"
          id="email"
          className="contactFormInput peer"
          placeholder=" "
          required
          onChange={handleChange}
        />
        <label htmlFor="email" className="contactFormLabel">
          Email address
        </label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <Input
          name="telephone"
          placeholder="Enter phone number"
          value={phoneValue}
          onChange={setPhoneValue}
          className="contactFormInput peer"
        />
      </div>
    </>
  )
}

export default Contact
