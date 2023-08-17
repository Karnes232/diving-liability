import React from "react"
import Name from "./Name"
import Contact from "./Contact"
import Address from "./Address"

const InformationForm = ({informationState, setInformationState}) => {
  const handleChange = e => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value
      setInformationState({
      ...informationState,
      [e.target.name]: value,
    })
  }
  return (
    <div className="px-5 mt-5 mb-10">
      <Name handleChange={handleChange}/>
      <Contact handleChange={handleChange}/>
      <Address handleChange={handleChange}/>
    </div>
  )
}

export default InformationForm
