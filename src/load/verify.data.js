import getData from './api';

// eslint-disable-next-line consistent-return
export default function verifyQuery() {
  const queryField = document.querySelector('#location');
  const form = document.querySelector('form');
  const regex = /^[a-zA-Z]+$/;
  if (!regex.test(queryField.value)) {
    queryField.setCustomValidity('Please provide a valid city');
    queryField.reportValidity();
  } else {
    queryField.setCustomValidity('');
    getData(queryField.value);
    form.reset();
  }
}
