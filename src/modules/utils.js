// eslint-disable-next-line consistent-return
function verifyQuery() {
  const queryField = document.querySelector('#location');
  const query = queryField.value;
  const regex = /^[a-zA-Z\s]+$/;
  if (!regex.test(queryField.value)) {
    queryField.setCustomValidity('Please provide a valid city');
    queryField.reportValidity();
  } else {
    queryField.setCustomValidity('');
    return query;
  }
}
function handleBackgroundChanges(newClass) {
  const contentWrapper = document.querySelector('.content-wrapper');
  if (contentWrapper.classList[1]) {
    contentWrapper.classList.remove(contentWrapper.classList[1]);
  }
  contentWrapper.classList.add(newClass);
}

export { verifyQuery, handleBackgroundChanges };
