import React, { useState } from "react"
import {
  medicalStatement,
  medicalQuestions,
} from "../../../data/medicalStatement"
import MedicalCard from "./MedicalCard"
const MedicalForm = ({ medicalState, setMedicalState }) => {
  const [readMore, setReadMore] = useState(false)

  const handleChange = e => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value
    setMedicalState({
      ...medicalState,
      [e.target.name]: value,
    })
  }
  return (
    <div className="block  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
      <div className="p-2 text-sm bg-slate-200 w-full">
        Please Complete the form
      </div>
      <div className="p-2 text-lg mb-2 bg-slate-200">
        Diver Medical Participant Questionnaire
      </div>
      <section className="m-2 block bg-white border border-gray-200 rounded-lg shadow">
        <p className="text-gray-700 text-base m-4">
          {readMore
            ? medicalStatement
            : `${medicalStatement.substring(0, 150)}...`}
          <br />
          <button
            className="text-blue-700"
            onClick={e => {
              e.preventDefault()
              setReadMore(!readMore)
            }}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>
      </section>
      <section className="flex flex-col justify-center items-center mx-2 space-y-2">
        <div className="text-2xl my-2">Directions</div>
        <p className="text-xs font-medium">
          Complete this questionnaire as a prerequisite to a recreational scuba
          diving or freediving course
        </p>
        <p className="text-xs">
          <span className="font-medium">Note to women:</span> If you are
          pregnant, or attempting to become pregnant, do not dive.
        </p>
      </section>
      <section className="my-8 mx-2 block bg-white border border-gray-200 rounded-lg shadow">
        <main className="text-xs flex flex-col">
          {medicalQuestions.map((question, index) => {
            return (
              <MedicalCard
                key={index}
                question={question}
                handleChange={handleChange}
              />
            )
          })}
        </main>
      </section>
    </div>
  )
}

export default MedicalForm
