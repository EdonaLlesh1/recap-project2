// phew… not a lot going on here. Please add some code!
const answer = document.querySelector('[data-js="card-answer"]');
const showAnswerButton = document.querySelector('[data-js="answerButton"]');

document.querySelectorAll('[data-js="bookmark-button"]').forEach(bookmarkButton => {
  bookmarkButton.addEventListener('click', function () {
    this.classList.toggle('active');
    const icon = this.querySelector('.bookmark__icon');
    icon.style.fill = this.classList.contains('active') ? 'black' : 'white';
  });
});

document.querySelectorAll('.card__button-answer').forEach(answerButton => {
  answerButton.addEventListener('click', function () {
    const answerParagraph = this.closest('.card').querySelector('.card__answer');
    answerParagraph.classList.toggle('hidden');
    this.innerText = answerParagraph.classList.contains('hidden') ? 'Show answer' : 'Hide answer';
  });
});
