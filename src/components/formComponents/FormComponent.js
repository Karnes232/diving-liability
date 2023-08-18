import React, { useState } from "react"

import MedicalForm from "./medical/MedicalForm"
import InformationForm from "./information/InformationForm"
import {
  informationStateObject,
  medicalStateObject,
} from "../../data/stateObjects"
import DiscoverNonDiscloure from "./liability/DiscoverNonDiscloure"
import DiscoverLiability from "./liability/DiscoverLiability"
const FormComponent = () => {
  const [medicalState, setMedicalState] = useState(medicalStateObject)
  const [informationState, setInformationState] = useState(
    informationStateObject,
  )
  const handleSubmit = e => {
    e.preventDefault()
    console.log(medicalState)
    console.log(informationState)
  }
  return (
    <form
      name="contact"
      method="POST"
      action={`/`}
      id="contact"
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto min-h-[75vh]"
    >
      <InformationForm
        informationState={informationState}
        setInformationState={setInformationState}
      />
      <MedicalForm
        medicalState={medicalState}
        setMedicalState={setMedicalState}
      />
      <DiscoverNonDiscloure />
      <DiscoverLiability />
      <div className="flex mt-10 justify-center items-center">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default FormComponent
