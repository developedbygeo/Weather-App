import showErr from './util.functions';
import verifyQuery from '../load/verify.data';

function enableEventListeners() {
  // Cache DOM
  const searchButton = document.querySelector('.search');
  const closeErrorBtn = document.querySelector('.close');
  // Event Listeners
  searchButton.addEventListener('click', verifyQuery);
  closeErrorBtn.addEventListener('click', showErr);
}
export { showErr, enableEventListeners };
