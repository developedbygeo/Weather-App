// eslint-disable-next-line consistent-return
export default function verifyQuery() {
  const queryField = document.querySelector('#location');
  const query = queryField.value;
  const form = document.querySelector('form');
  const regex = /^[a-zA-Z\s]+$/;
  if (!regex.test(queryField.value)) {
    queryField.setCustomValidity('Please provide a valid city');
    queryField.reportValidity();
  } else {
    queryField.setCustomValidity('');
    form.reset();
    return query;
  }
}