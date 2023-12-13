// phew… not a lot going on here. Please add some code!
const bookmarkButton = document.querySelector('.bookmark');
bookmarkButton.addEventListener('click', function () {
  
  this.classList.toggle('active');
});

const answerButton = document.querySelector('.card__button-answer');
answerButton.addEventListener('click', function () {
 
  const answerParagraph = document.querySelector('.card__answer');
  answerParagraph.classList.toggle('hidden');


  const buttonText = this.innerText === 'Show answer' ? 'Hide answer' : 'Show answer';
  this.innerText = buttonText;
});