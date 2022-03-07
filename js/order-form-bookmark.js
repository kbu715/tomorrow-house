let isBookmarked = JSON.parse(localStorage.getItem('isBookmarked'))
const bookmarkBtn = document.querySelector(
  '.floating-order-form .bookmark-button'
)
const bookmarkIcon = bookmarkBtn.querySelector('i')

if (isBookmarked) {
  bookmarkBtn.classList.add('is-active')
  bookmarkIcon.classList.add('ic-bookmark-filled')
  bookmarkIcon.classList.remove('ic-bookmark')
} else {
  bookmarkBtn.classList.remove('is-active')
  bookmarkIcon.classList.add('ic-bookmark')
  bookmarkIcon.classList.remove('ic-bookmark-filled')
}

bookmarkBtn.addEventListener('click', function () {
  bookmarkIcon.classList.toggle('ic-bookmark-filled')
  bookmarkIcon.classList.toggle('ic-bookmark')
  this.classList.toggle('is-active')
  isBookmarked = !isBookmarked
  localStorage.setItem('isBookmarked', isBookmarked)
})
