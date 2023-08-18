import React from "react"
import Name from "./Name"
import Contact from "./Contact"
import Address from "./Address"
import { useState } from "react"

const InformationForm = ({ informationState, setInformationState }) => {
  const [readMore, setReadMore] = useState(false)
  const handleChange = e => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value
    setInformationState({
      ...informationState,
      [e.target.name]: value,
    })
  }
  
  return (
    <div className="mt-5 mb-10 block bg-white border border-gray-200 rounded-lg shadow">
      <div
        className="p-2 text-lg bg-slate-200 w-full"
        onClick={e => setReadMore(!readMore)}
      >
        Participant Information
      </div>

      {readMore ? (
        <>
          <section className="p-5">
            <Name handleChange={handleChange} informationState={informationState}/>
            <Contact handleChange={handleChange} />
            <Address handleChange={handleChange} />
          </section>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default InformationForm
