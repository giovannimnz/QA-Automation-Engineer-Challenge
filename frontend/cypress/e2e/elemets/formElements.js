class FormElements {
  inputFirstName = () => '#firstName';
  inputLastName = () => '#lastName';
  inputEmail = () => '#userEmail';
  inputGender = (gender) => `label[for='gender-radio-${gender}']`;
  inputPhoneNumber = () => '#userNumber';
  inputDateOfBirth = () => '#dateOfBirthInput';
  selectMonth = () => '.react-datepicker__month-select';
  selectYear = () => '.react-datepicker__year-select';
  selectDay = (day) => `.react-datepicker__day--0${day}:not(.react-datepicker__day--outside-month)`;
  subjectsField = () => '.subjects-auto-complete__value-container';
  inputHobby = (hobby) => `label[for='hobbies-checkbox-${hobby}']`;
  uploadTxtFile = () => '#uploadPicture';
  inputAddress = () => '#currentAddress';
  openState = () => '#state > .css-yk16xz-control';
  selectState = (state) => `#react-select-3-option-${state}`;
  openCity = () => '#city > .css-yk16xz-control';
  selectCity = (city) => `#react-select-4-option-${city}`;
  submitButton = () => '#submit';
  closeModal = () => '#closeLargeModal';
}

export default FormElements;
