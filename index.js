// phew… not a lot going on here. Please add some code!
//const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

//bookmarkButton.addEventListener("click", () => {
  //bookmarkButton.classList.toggle("bookmark--active");
//});

document.querySelectorAll('.bookmark').forEach(bookmarkButton => {
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
console.log 