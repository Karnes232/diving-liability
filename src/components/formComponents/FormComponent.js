import React, { useRef, useState } from "react"

import MedicalForm from "./medical/MedicalForm"
import InformationForm from "./information/InformationForm"
import {
  informationStateObject,
  medicalStateObject,
} from "../../data/stateObjects"
import DiscoverNonDiscloure from "./liability/DiscoverNonDiscloure"
import DiscoverLiability from "./liability/DiscoverLiability"
import Signature from "./signature/Signature"
import { formValidation } from "./formValidation"
// import axios from "axios"

const FormComponent = () => {
  const [informationError, setInformationError] = useState(false)
  const [signatureMissing, setSignatureMissing] = useState(false)
  const [medicalState, setMedicalState] = useState(medicalStateObject)
  const [informationState, setInformationState] = useState(
    informationStateObject,
  )

  // const createPdf = async data => {
  //   axios.post("/api/pdf", {
  //     data: data,
  //   })
  //   .then(function (response) {
  //     console.log(response)
  //   })
  //   .catch(function (error) {
  //     console.log(error)
  //   })
  // }

  let sigCanvas = useRef()
  const handleSubmit = async e => {
    e.preventDefault()
    const notValid = await formValidation(informationState)
    const isEmpty = sigCanvas.current.isEmpty()
    let signatureImage = ""
    if (isEmpty === false) {
      signatureImage = sigCanvas.current
        .getTrimmedCanvas()
        .toDataURL("image/webp")
      setSignatureMissing(false)
      if (notValid === false) {
        // createPdf(medicalState)
        console.log("Winner")
        setInformationError(false)
      } else {
        console.log("Participant Information Missing")
        setInformationError(true)
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    } else {
      setSignatureMissing(true)
      console.log("Signature Missing")
    }
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
        errors={informationError}
      />

      <MedicalForm
        medicalState={medicalState}
        setMedicalState={setMedicalState}
      />
      <DiscoverNonDiscloure />
      <DiscoverLiability
        firstName={informationState.firstName}
        lastName={informationState.lastName}
      />
      <Signature sigCanvas={sigCanvas} signatureMissing={signatureMissing} />
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
