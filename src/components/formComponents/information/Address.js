import React from "react"

const Address = ({ handleChange }) => {
  return (
    <>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name="address"
          id="address"
          className="contactFormInput peer"
          placeholder=" "
          required
          onChange={handleChange}
        />
        <label htmlFor="address" className="contactFormLabel">
          Address
        </label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name="city"
          id="city"
          className="contactFormInput peer"
          placeholder=" "
          required
          onChange={handleChange}
        />
        <label htmlFor="city" className="contactFormLabel">
          City
        </label>
      </div>
      <div className="flex justify-between">
        <div className="relative z-0 mb-6 w-2/5 group">
          <input
            type="text"
            name="state"
            id="state"
            className="contactFormInput peer"
            placeholder=" "
            required
            onChange={handleChange}
          />
          <label htmlFor="state" className="contactFormLabel">
            State
          </label>
        </div>
        <div className="relative z-0 mb-6 w-2/5 group">
          <input
            type="text"
            name="zipcode"
            id="zipcode"
            className="contactFormInput peer"
            placeholder=" "
            required
            onChange={handleChange}
          />
          <label htmlFor="zipcode" className="contactFormLabel">
            Zip Code
          </label>
        </div>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name="country"
          id="country"
          className="contactFormInput peer"
          placeholder=" "
          required
          onChange={handleChange}
        />
        <label htmlFor="country" className="contactFormLabel">
          Country
        </label>
      </div>
    </>
  )
}

export default Address
