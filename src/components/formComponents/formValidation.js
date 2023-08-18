export const formValidation = (informationState, setInformationError) => {
  if (
    informationState.firstName === undefined ||
    informationState.firstName.trim() === ""
  ) {
    setInformationError(true)
  }
  if (
    informationState.lastName === undefined ||
    informationState.lastName.trim() === ""
  ) {
    setInformationError(true)
  }
  if (
    informationState.birthdate === undefined ||
    informationState.birthdate.trim() === ""
  ) {
    setInformationError(true)
  }
  if (
    informationState.city === undefined ||
    informationState.city.trim() === ""
  ) {
    setInformationError(true)
  }
  if (
    informationState.country === undefined ||
    informationState.country.trim() === ""
  ) {
    setInformationError(true)
  }
  if (
    informationState.email === undefined ||
    informationState.email.trim() === ""
  ) {
    setInformationError(true)
  }

  console.log(informationState)
}
